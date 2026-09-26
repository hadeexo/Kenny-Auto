interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { value: "7+", label: "Years of Experience" },
  { value: "50+", label: "Happy Clients" },
  { value: "100+", label: "Vehicles" },
  { value: "3", label: "Locations" },
];

const StatsSection = () => {
  return (
    <div className="bg-white py-12 px-8 items-center justify-center">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <p className="text-4xl md:text-5xl font-extrabold text-blue-500">
              {stat.value}
            </p>
            <p className="mt-2 text-gray-900 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
