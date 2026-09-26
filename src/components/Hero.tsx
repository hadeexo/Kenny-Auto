function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('./images/hero.png')" }}
    >
      <div className="absolute inset-0 bg-black/55"></div>
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="max-w-3xl text-white">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Kenny Auto
            </p>
            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Find Your Next
              <span className="block text-blue-500">Perfect Ride.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Quality Cars. Trusted service. Available in Abuja, Ibadan and
              Lokoja.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-md bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700">
                View Cars
              </button>
              <button className="rounded-md border border-white/40 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-black">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
