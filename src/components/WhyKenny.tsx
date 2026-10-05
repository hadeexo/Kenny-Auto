interface FeatureCard {
  title: string;
  description: string;
}

const features: FeatureCard[] = [
  {
    title: "Quality Vehicles",
    description: "Every car passes a full inspection before it's listed.",
  },
  {
    title: "Trusted Service",
    description:
      "Real warranty coverage and a team that answers after the sale.",
  },
  {
    title: "Easy Car Buying",
    description: "Browse, enquire, and drive away — no back-and-forth hassle.",
  },
];

const WhyKenny = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-24 px-6 md:px-16 overflow-hidden"
      style={{ backgroundImage: "url('./images/hero.png')" }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-x-0 top-0 h-40 md:h-56 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute inset-y-0 left-0 w-full md:w-2/3 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-3">Why Kenny Auto</h2>
        <p className="text-sm uppercase tracking-widest text-gray-300 mb-6">
          Trusted · Transparent · Built to Last
        </p>

        <p className="text-sm md:text-base text-gray-200 max-w-lg mb-10">
          Every car inspected, every warranty real, every customer looked after
          — before the sale and long after.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl items-stretch">
          {features.map((feature, i) => {
            const isHighlighted = i === 1;
            return (
              <div
                key={i}
                className={`rounded-lg p-5 flex flex-col justify-center transition-transform ${
                  isHighlighted
                    ? "bg-blue-50 text-gray-900 sm:scale-105 shadow-xl shadow-orange-900/30 border-black/40"
                    : "bg-black/60 backdrop-blur-sm border border-white/20"
                }`}
              >
                <h3
                  className={`text-lg font-bold mb-2 ${
                    isHighlighted ? "text-gray-900" : "text-white"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-sm ${
                    isHighlighted ? "text-gray-900/80" : "text-gray-300"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyKenny;
