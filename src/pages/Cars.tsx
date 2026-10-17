import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { Link } from "react-router-dom";

const Cars = () => {
  const [cars, setCars] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCars = async () => {
      const { data, error } = await supabase
        .from("cars")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching cars:", error);
        setError("Couldn't load cars. Please try again later.");
      } else {
        setCars(data ?? []);
      }

      setLoading(false);
    };

    fetchCars();
  }, []);

  return (
    <div className="min-h-screen bg-[#07111F] px-6 py-32 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-3 text-4xl font-bold">Available Cars</h1>

        <p className="mb-10 text-gray-400">
          Find your next car with Kenny Auto.
        </p>

        {loading && <p className="text-gray-400">Loading cars...</p>}

        {error && <p className="text-red-400">{error}</p>}

        {!loading && !error && cars.length === 0 && (
          <p className="text-gray-400">
            No cars available right now. Check back soon.
          </p>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
          <Link
  key={car.id}
  to={`/cars/${car.id}`}
  className="block overflow-hidden rounded-xl border border-gray-800 bg-[#0D1B2A] transition hover:-translate-y-1 hover:border-blue-500"
>
              {car.image_urls?.[0] && (
                <img
                  src={car.image_urls[0]}
                  alt={`${car.brand} ${car.model}`}
                  className="h-56 w-full object-cover"
                />
              )}

              <div className="p-5">
                <h2 className="text-xl font-bold">
                  {car.brand} {car.model}
                </h2>

                <p className="mt-2 text-gray-400">
                  {car.year || "Year unavailable"} ·{" "}
                  {car.transmission || "Transmission unavailable"}
                </p>

                <p className="mt-4 text-2xl font-bold text-blue-400">
                  {car.price != null
                    ? `₦${Number(car.price).toLocaleString("en-NG")}`
                    : "Price on request"}
                </p>

                <p className="mt-2 text-sm text-gray-400">
                  {car.location || "Location unavailable"}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
