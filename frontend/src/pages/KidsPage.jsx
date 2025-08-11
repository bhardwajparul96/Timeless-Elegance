import React from 'react';
import kidsBg from '../assets/kids-bg.jpeg';


const KidsPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white pt-24 px-6 pb-10"
      style={{ backgroundImage: `url(${kidsBg})` }}
    >
      {/* Overlay for readability */}
      <div className=" bg-opacity-60 p-6 rounded-lg">
        {/* Sticky Header */}
        <div className="sticky top-16 bg-opacity-80  z-30 pb-4">
          <h1 className="text-2xl font-bold tracking-wide mb-1 text-black">Kids' Watches</h1>
          <p className="text-sm text-black">Explore the fun & colorful collection for young trendsetters</p>
        </div>

        {/* Coming Soon Message */}
        <div className="mt-10 text-left">
          <p className="text-black text-lg italic">
            Kids' watch collection coming soon!
          </p>
        </div>
      </div>
    </div>
  );
};

export default KidsPage;
