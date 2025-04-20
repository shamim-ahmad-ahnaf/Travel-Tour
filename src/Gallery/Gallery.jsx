import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";

const allImages = [
  {
    url: "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Beach",
    description: "Cox's Bazar Sea Beach, Cox's Bazar, Bangladesh"
  },
  {
    url: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Beach",
    description: "Patenga Beach, Chattogram, Bangladesh"
  },
  {
    url: "https://images.pexels.com/photos/9394645/pexels-photo-9394645.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    category: "Beach",
    description: "Inani Beach, Ukhiya, Cox's Bazar, Bangladesh"
  },
  {
    url: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Mountain",
    description: "Nilgiri Hills, Bandarban, Bangladesh"
  },
  {
    url: "https://images.pexels.com/photos/12779583/pexels-photo-12779583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Mountain",
    description: "Sajek Valley, Rangamati, Bangladesh"
  },
  {
    url: "https://images.pexels.com/photos/12784538/pexels-photo-12784538.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Mountain",
    description: "Chimbuk Hill, Bandarban, Bangladesh"
  },
  {
    url: "https://images.pexels.com/photos/1314509/pexels-photo-1314509.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Forest",
    description: "Lawachara Rain Forest, Moulvibazar, Sylhet, Bangladesh"
  },
  {
    url: "https://images.pexels.com/photos/2086263/pexels-photo-2086263.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Forest",
    description: "Ratargul Swamp Forest, Gowainghat, Sylhet, Bangladesh"
  },
  {
    url: "https://images.pexels.com/photos/106606/pexels-photo-106606.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Desert",
    description: "Thar Desert, Rajasthan, India"
  },
  {
    url: "https://images.pexels.com/photos/1001435/pexels-photo-1001435.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Desert",
    description: "Sahara Desert, North Africa"
  },
  {
    url: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "City",
    description: "Dhaka City Skyline, Bangladesh"
  },
  {
    url: "https://images.pexels.com/photos/8589656/pexels-photo-8589656.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "All",
    description: "Nature & Urban Blend, Mixed View"
  }
];


const categories = ["All", "Beach", "Mountain", "Forest", "Desert", "City"];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const filteredImages = filter === "All"
    ? allImages
    : allImages.filter(img => img.category === filter);

  const openModal = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setPhotoIndex((prevIndex) => (prevIndex + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setPhotoIndex((prevIndex) => (prevIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <section className="py-12" id="gallery">
      <div className="max-w-6xl px-4 mx-auto">
        <h2 className="mb-6 text-5xl font-bold text-center">
          Travel <span className="text-amber-400">Gallery</span>
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full border text-sm ${filter === cat
                ? "bg-yellow-500 text-white"
                : "bg-yellow-500"
                } hover:bg-yellow-400 transition`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {filteredImages.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img
                src={img.url}
                loading="lazy"
                alt={`Gallery ${index}`}
                className="object-cover w-full h-64 transition-transform duration-300 border-3 border-amber-400 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-lg">
            <div className="relative w-full max-w-3xl p-4 rounded-lg shadow-lg bg-sky-200 max-h-[90vh] overflow-y-auto border-amber-600 border">

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute z-50 p-2 transition-all duration-200 bg-red-500 rounded-full top-2 right-5 hover:bg-red-600"
              >
                <FaTimes size={24} />
              </button>

              <div className="relative flex items-center justify-center mb-4">
                {/* Prev Button */}
                <button
                  onClick={prevImage}
                  className="absolute p-3 transform -translate-y-1/2 bg-white rounded-full shadow left-2 top-1/2"
                >
                  <BiSolidLeftArrow size={24} />
                </button>

                {/* Main Image */}
                <img
                  src={filteredImages[photoIndex].url}
                  alt={`Large ${photoIndex}`}
                  className="rounded-lg max-h-[80vh] max-w-full object-contain"
                />

                {/* Next Button */}
                <button
                  onClick={nextImage}
                  className="absolute p-3 transform -translate-y-1/2 bg-white rounded-full shadow right-2 top-1/2"
                >
                  <BiSolidRightArrow size={24} />
                </button>
              </div>

              {/* Description */}
              <p className="px-2 py-3 text-lg font-medium text-center text-gray-800">
                {filteredImages[photoIndex].description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
