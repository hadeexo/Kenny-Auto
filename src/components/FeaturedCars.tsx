import { useEffect, useRef, useState } from "react";

interface Model {
  name: string;
  brand: string;
  price: string;
  image: string;
}

const models: Model[] = [
  {
    name: "Highlander 2020",
    brand: "Toyota",
    price: "",
    image: "./images/hero.png",
  },
  {
    name: "Accord LX 2021",
    brand: "Honda",
    price: "",
    image: "./images/hero.png",
  },
  {
    name: "Lexus RX 2022",
    brand: "Lexus",
    price: "",
    image: "./images/hero.png",
  },
  {
    name: "MDX 2023",
    brand: "Acura",
    price: "",
    image: "./images/hero.png",
  },
];

const ModelCard = ({ model }: { model: Model }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); 
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="overflow-hidden rounded-xl relative group">
      <div
        className={`transition-all duration-1000 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        <img
          src={model.image}
          alt={model.name}
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="p-4 bg-white">
        <p className="text-sm text-gray-500">{model.brand}</p>
        <h3 className="text-lg font-semibold">{model.name}</h3>
        <p className="text-orange-500 font-bold">{model.price}</p>
      </div>
    </div>
  );
};

const OurModels = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Featured Models
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {models.map((model) => (
            <ModelCard key={model.name} model={model} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurModels;
