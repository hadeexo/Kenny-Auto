interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { value: "10+", label: "Years of Experience" },
  { value: "1000+", label: "Happy Clients" },
  { value: "200+", label: "Vehicles" },
  { value: "10+", label: "Locations" },
];

const StatsSection = () => {
  return (
    <div className="bg-white py-12 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <p className="text-4xl md:text-5xl font-extrabold text-orange-500">
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
