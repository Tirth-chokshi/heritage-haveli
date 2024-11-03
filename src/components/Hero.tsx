import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://www.gujarattourism.com/content/gujrattourism/en/accommodation/heritage-hotel/french-haveli/_jcr_content/root/responsivegrid/tourbanner.coreimg.jpeg/1580361706044/french-haveli2.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-6">
            Experience the Timeless Beauty of Jash-Dwar Haveli
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Step into a world where history meets luxury, and every corner tells a story of royal heritage
          </p>
          <div className="space-x-4">
            <a
              href="#about"
              className="inline-block px-8 py-3 bg-amber-800 text-white rounded-lg hover:bg-amber-900 transition-colors duration-200"
            >
              Explore the Haveli
            </a>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-white text-amber-800 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;