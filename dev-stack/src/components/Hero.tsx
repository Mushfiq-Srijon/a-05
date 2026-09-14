export default function Hero() {
  return (
    <section className="bg-white px-6 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Build Your Ideal{' '}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-col sm:flex-row">
            <button className="bg-orange-cta text-white px-8 py-3 rounded-lg hover:opacity-90 transition font-semibold">
              Explore Technologies
            </button>
            <button className="border-2 border-gray-400 text-dark-btn px-8 py-3 rounded-lg hover:bg-gray-50 transition font-semibold">
              Learn More
            </button>
          </div>
        </div>

        {/* Right: Illustration Placeholder */}
        <div className="hidden md:flex justify-center items-center">
          <div className="w-80 h-80 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-3xl opacity-20 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <p className="text-xl font-semibold">3D Illustration</p>
              <p className="text-sm">(Add your 3D asset here)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}