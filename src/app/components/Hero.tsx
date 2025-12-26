export function Hero() {
  const scrollToTechFest = () => {
    const section = document.getElementById('ieee-techfest');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="../public/Untitled design.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6 lg:px-12">
        <div className="max-w-[1440px] w-full">
          <div className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
            <h1 className="text-white text-5xl lg:text-7xl mb-4 lg:mb-6 font-bold">
              IEEE TechFest 2025
            </h1>
            <p className="text-white/90 text-xl lg:text-2xl mb-8 lg:mb-10">
              Join us for three days of innovation, technology, and inspiration
            </p>
            <button
              onClick={scrollToTechFest}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/30 hover:bg-white/20 hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
            >
              Explore Events
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
