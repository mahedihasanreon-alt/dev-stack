export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:py-20">
      <div className="flex flex-col md:flex-row items-center gap-10">
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Build Your Ideal
            <br />
            <span className="text-brand-gradient">Development Stack</span>
          </h1>
          <p className="text-gray-500 mt-5 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="flex flex-wrap gap-3 mt-7 justify-center md:justify-start">
            <button className="brand-gradient text-white font-semibold px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition">
              Explore Technologies
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-lg hover:border-gray-400 transition">
              Learn More
            </button>
          </div>
        </div>

        
        <div className="flex-1 flex justify-center">
  <img
    src="/banner-stack.png"
    alt="Dev Stack illustration"
    className="w-80 h-80 md:w-[28rem] md:h-[28rem] object-contain"
  />
</div>
      </div>
    </section>
  );
}