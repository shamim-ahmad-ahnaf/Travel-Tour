import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-black overflow-hidden">
      {/* Local Video Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
         <source src="/see.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Explore The World With Us
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Find the best deals for your next adventure
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="text"
            placeholder="Search destination"
            className="px-4 py-2 rounded-md w-64 text-black"
          />
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-md font-semibold">
            Search Packages
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
