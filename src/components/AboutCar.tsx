import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  MapPin,
  Phone,
  ChevronRight,
  Share2,
  Mail,
  Gauge,
  Circle,
  Car,
  FileText,
  Cog,
  Settings2,
  ArrowUp,
} from "lucide-react";
import { models } from "./FeaturedCars"; // adjust path to wherever OurModels.tsx lives

interface Spec {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const specs: Spec[] = [
  { icon: <Gauge size={20} />, label: "Mileage", value: "170,744 mi" },
  {
    icon: <Circle size={20} className="fill-black" />,
    label: "Exterior Color",
    value: "Black",
  },
  { icon: <Car size={20} />, label: "Structure", value: "4 Doors" },
  { icon: <FileText size={20} />, label: "Stock Number", value: "536276" },
  {
    icon: <Cog size={20} />,
    label: "Engine",
    value: "V8, Flex Fuel, 5.7 Liter",
  },
  {
    icon: <Settings2 size={20} />,
    label: "Transmission",
    value: "Auto, 6-Spd Sequential",
  },
];

const AboutCar = () => {
  const { id } = useParams<{ id: string }>();
  const car = models.find((m) => m.id === id);

  const images = car ? [car.image, car.image, car.image, car.image] : [];

  const [activeImage, setActiveImage] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ firstName, lastName, phone, email, message });
  };

  if (!car) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <p className="text-xl font-semibold">Car not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2">
        <h1 className="text-3xl font-bold mb-4">{car.name}</h1>

        <div className="flex flex-wrap gap-3 mb-6">
          <span className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-md text-sm">
            <MapPin size={16} />
            Abuja
          </span>
          <span className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-md text-sm">
            <Phone size={16} />
            Tel: 0803 865 9145
          </span>
        </div>

        <div className="rounded-lg overflow-hidden mb-3">
          <img
            src={images[activeImage]}
            alt="Vehicle"
            className="w-full h-[300px] object-cover"
          />
        </div>

        <div className="relative flex gap-2 mb-6">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(i)}
              className={`w-24 h-16 rounded-md overflow-hidden border-2 ${
                activeImage === i
                  ? "border-orange-500"
                  : "border-transparent opacity-70"
              }`}
            >
              <img
                src={img}
                alt={`thumb-${i}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
          <button className="ml-2 flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <span className="text-sm text-gray-500">Share To</span>
          <a
            href="#"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-green-500 text-white"
          >
            <Phone size={16} />
          </a>
          <a
            href="#"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-orange-500 text-white"
          >
            <Mail size={16} />
          </a>
          <a
            href="#"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-sky-500 text-white"
          >
            <Share2 size={16} />
          </a>
          <a
            href="#"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-700 text-white"
          >
            <Share2 size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-6 border-t pt-6">
          {specs.map((spec, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-900 text-white shrink-0">
                {spec.icon}
              </div>
              <div>
                <p className="text-sm text-gray-500">{spec.label}</p>
                <p className="font-medium">{spec.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-1">
        <div className="sticky top-6 bg-white shadow-lg rounded-xl p-6 border">
          <h2 className="text-xl font-semibold text-center mb-6">
            Contact us directly
          </h2>

          <div className="flex justify-center gap-12 mb-6">
            <a href="#" className="flex flex-col items-center gap-2">
              <li className="flex items-center gap-3">
                <a
                  href="https://wa.me/2348038659145"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white">
                    <Phone size={20} />
                  </span>
                </a>
              </li>

              <span className="text-sm font-medium">Whatsapp</span>
            </a>
            <a
              href="tel:08038659145"
              className="flex flex-col items-center gap-2"
            >
              <span className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-900 text-white">
                <Phone size={20} />
              </span>
              <span className="text-sm font-medium">Call</span>
            </a>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-sm text-gray-400">Or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <h3 className="font-semibold mb-4">Leave us a message</h3>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="border rounded-md px-3 py-2 text-sm w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="border rounded-md px-3 py-2 text-sm w-full"
              />
            </div>

            <div className="flex gap-3">
              <span className="border rounded-md px-3 py-2 text-sm text-gray-500">
                +234
              </span>
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border rounded-md px-3 py-2 text-sm w-full"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-md px-3 py-2 text-sm w-full"
            />

            <textarea
              placeholder="Please Input Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="border rounded-md px-3 py-2 text-sm w-full resize-none"
            />

            <button
              type="submit"
              disabled={!firstName || !lastName || !phone || !email}
              className="w-full bg-gray-300 disabled:bg-gray-300 enabled:bg-gray-900 enabled:hover:bg-black text-white rounded-md py-3 font-medium transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-gray-400 text-white flex items-center justify-center shadow-lg"
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
};

export default AboutCar;
