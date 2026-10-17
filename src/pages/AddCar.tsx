import { useState } from "react";
import { supabase } from "../lib/supabase";

const AddCar = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [mileage, setMileage] = useState("");
  const [transmission, setTransmission] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<File[]>([]);

  const uploadImages = async () => {
    const imageUrls: string[] = [];

    for (const image of images) {
      const fileName = `${Date.now()}-${image.name}`;

      const { error } = await supabase.storage
        .from("car-images")
        .upload(fileName, image);

      if (error) {
        console.error("Image upload error:", error);
        return null;
      }

      const { data } = supabase.storage
        .from("car-images")
        .getPublicUrl(fileName);

      imageUrls.push(data.publicUrl);
    }

    return imageUrls;
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const imageUrls = await uploadImages();

  if (!imageUrls) {
    return;
  }

  const { data, error } = await supabase
    .from("cars")
    .insert({
      brand,
      model,
      year: Number(year),
      price: Number(price),
      mileage: Number(mileage),
      transmission,
      fuel_type: fuelType,
      location,
      description,
      image_urls: imageUrls,
    })
    .select();

  if (error) {
    console.error("Error adding car:", error);
    return;
  }

  console.log("Car added successfully:", data);
}
  return (
    <div className="min-h-screen bg-[#07111F] px-6 py-32 text-white">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-2 text-3xl font-bold">Add a Car</h1>

        <p className="mb-10 text-gray-400">
          Add a new vehicle to the Kenny Auto listings.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Brand */}
          <div>
            <label className="mb-2 block">Brand</label>

            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              placeholder="e.g. Toyota"
              className="w-full rounded-lg border border-gray-700 bg-[#0D1B2A] px-4 py-3 outline-none"
            />
          </div>

          {/* Model */}
          <div>
            <label className="mb-2 block">Model</label>

            <input
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder="e.g. Camry"
              className="w-full rounded-lg border border-gray-700 bg-[#0D1B2A] px-4 py-3 outline-none"
            />
          </div>

          {/* Year + Price */}
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block">Year</label>

              <input
                type="number"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="2022"
                className="w-full rounded-lg border border-gray-700 bg-[#0D1B2A] px-4 py-3 outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block">Price (₦)</label>

              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="45000000"
                className="w-full rounded-lg border border-gray-700 bg-[#0D1B2A] px-4 py-3 outline-none"
              />
            </div>
          </div>

          {/* Mileage */}
          <div>
            <label className="mb-2 block">Mileage (km)</label>

            <input
              type="number"
              value={mileage}
              onChange={(e) => setMileage(e.target.value)}
              placeholder="35000"
              className="w-full rounded-lg border border-gray-700 bg-[#0D1B2A] px-4 py-3 outline-none"
            />
          </div>

          {/* Transmission */}
          <div>
            <label className="mb-2 block">Transmission</label>

            <select
              value={transmission}
              onChange={(e) => setTransmission(e.target.value)}
              className="w-full rounded-lg border border-gray-700 bg-[#0D1B2A] px-4 py-3 outline-none"
            >
              <option value="">Select transmission</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
            </select>
          </div>

          {/* Fuel */}
          <div>
            <label className="mb-2 block">Fuel Type</label>

            <select
              value={fuelType}
              onChange={(e) => setFuelType(e.target.value)}
              className="w-full rounded-lg border border-gray-700 bg-[#0D1B2A] px-4 py-3 outline-none"
            >
              <option value="">Select fuel type</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Electric">Electric</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="mb-2 block">Location</label>

            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full rounded-lg border border-gray-700 bg-[#0D1B2A] px-4 py-3 outline-none"
            >
              <option value="">Select location</option>
              <option value="Abuja">Abuja</option>
              <option value="Ibadan">Ibadan</option>
              <option value="Lokoja">Lokoja</option>
            </select>
          </div>

          {/* Images */}
          <div>
            <label className="mb-2 block">Car Images</label>

            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => {
                if (e.target.files) {
                  setImages(Array.from(e.target.files));
                }
              }}
              className="w-full rounded-lg border border-gray-700 bg-[#0D1B2A] px-4 py-3"
            />

            <p className="mt-2 text-sm text-gray-400">
              Select multiple images of the vehicle.
            </p>
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block">Description</label>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Tell customers about this vehicle..."
              rows={5}
              className="w-full rounded-lg border border-gray-700 bg-[#0D1B2A] px-4 py-3 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#1565D8] px-6 py-3 font-semibold transition hover:bg-[#2F80ED]"
          >
            Add Car
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
