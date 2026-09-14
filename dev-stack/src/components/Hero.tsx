import heroImage from '../assets/banner-stack.png';

export default function Hero() {
  return (
    <section className="bg-white px-6 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Build Your Ideal{' '}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>

          <div className="flex gap-4 flex-col sm:flex-row items-center md:items-start">
            <button
              onClick={() => document.getElementById('technologies')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-brand-gradient text-white px-8 py-3 rounded-lg hover:opacity-90 transition font-semibold"
            >
              Explore Technologies
            </button>
            <button className="border-2 border-gray-400 text-dark-btn px-8 py-3 rounded-lg hover:bg-gray-50 transition font-semibold">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img src={heroImage} alt="Layered development stack illustration" className="w-full max-w-md" />
        </div>
      </div>
    </section>
  );
}