import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";

const CarDetails = () => {
  const { id } = useParams();

  const [car, setCar] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCar = async () => {
      if (!id) {
        setError("Car not found.");
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("cars")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching car:", error);
        setError("Couldn't load this car.");
      } else {
        setCar(data);
      }

      setLoading(false);
    };

    fetchCar();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#07111F] px-6 py-32 text-white">
        Loading car details...
      </div>
    );
  }

  if (error || !car) {
    return (
      <div className="min-h-screen bg-[#07111F] px-6 py-32 text-white">
        {error || "Car not found."}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#07111F] px-6 py-32 text-white">
      <div className="mx-auto max-w-7xl">
        {/* We'll build the car details here next. */}

        <h1 className="text-4xl font-bold">
          {car.brand} {car.model}
        </h1>

        <p className="mt-3 text-gray-400">
          {car.year} · {car.location}
        </p>

        <p className="mt-6 text-3xl font-bold text-blue-400">
          ₦{Number(car.price).toLocaleString("en-NG")}
        </p>
      </div>
    </div>
  );
};

export default CarDetails;
