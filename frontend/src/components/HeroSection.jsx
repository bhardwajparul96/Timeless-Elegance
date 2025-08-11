
import React, { useEffect, useState } from 'react';
import bgImage from '../assets/bg.jpg';

const HeroSection = () => {
  const [coords, setCoords] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Darkened Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'left center',
          filter: 'brightness(0.4) contrast(1.1)',
        }}
      />

      {/* Yellowish Radial Cursor Light */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `radial-gradient(
            circle at ${coords.x}px ${coords.y}px,
            rgba(255, 221, 102, 0.2) 0px,
            rgba(255, 221, 102, 0.1) 150px,
            transparent 300px
          )`,
          mixBlendMode: 'screen',
          transition: 'all 0.2s ease-out',
        }}
      />

      {/* Content */}
      
      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center h-full px-6 md:px-20 text-white max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-light leading-snug">
          Discover <span className="text-[#D4AF37] font-semibold">Timeless Luxury</span><br />
          <span className="font-semibold">Exclusive Branded Watches</span>
        </h1>

        <p className="mt-6 text-lg font-light text-gray-300">
          Explore our carefully curated collection <br />
          of the finest luxury watches from the world’s <br />
          most prestigious brands. Crafted for those who <br />
          value precision, style, and elegance
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-6 py-3 bg-[#b88a4a] text-white font-medium rounded-md hover:bg-[#a3783b] transition duration-300">
            Shop Now
          </button>
          <button className="px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-white hover:text-black transition duration-300">
            View Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;



// import React from 'react';

// const HeroSection = () => (
//   <section className="h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
//     <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/bg-watch.jpg')" }}></div>
//     <div className="text-center z-10 max-w-3xl">
//       <h1 className="text-4xl md:text-5xl font-light">
//         Discover <span className="text-yellow-500 font-semibold">Timeless Luxury</span><br />
//         <span className="font-semibold">Exclusive Branded Watches</span>
//       </h1>
//       <p className="mt-6 text-sm md:text-base text-gray-300">
//         Explore our carefully curated collection of luxury watches from top brands...
//       </p>
//       <div className="mt-8 flex justify-center gap-4">
//         <button className="bg-yellow-500 px-6 py-2 text-sm font-bold text-black rounded hover:bg-yellow-600">Shop Now</button>
//         <button className="border px-6 py-2 text-sm font-semibold rounded hover:bg-white hover:text-black">View Collection</button>
//       </div>
//     </div>
//   </section>
// );

// export default HeroSection;
