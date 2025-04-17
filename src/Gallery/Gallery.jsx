import React, { useState } from "react";
const allImages = [
    {
      url: "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Beach"
    },
    {
        url: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=600",
        category: "Beach"
      },
      {
        url: "https://images.pexels.com/photos/9394645/pexels-photo-9394645.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        category: "Beach"
      },

    //   Mountain
    {
      url: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Mountain"
    },
    {
        url: "https://images.pexels.com/photos/12779583/pexels-photo-12779583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        category: "Mountain"
      },
    {
        url: "https://images.pexels.com/photos/12784538/pexels-photo-12784538.jpeg?auto=compress&cs=tinysrgb&w=600",
        category: "Mountain"
      },

    //   Forest
    {
      url: "https://images.pexels.com/photos/1314509/pexels-photo-1314509.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Forest"
    },
    {
        url: "https://images.pexels.com/photos/2086263/pexels-photo-2086263.jpeg?auto=compress&cs=tinysrgb&w=600",
        category: "Forest"
      },

    //   Desert
    {
      url: "https://images.pexels.com/photos/106606/pexels-photo-106606.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Desert"
    },
    {
        url: "https://images.pexels.com/photos/1001435/pexels-photo-1001435.jpeg?auto=compress&cs=tinysrgb&w=600",
        category: "Desert"
      },

    //   City
    {
      url: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "City"
    },


    {
      url: "https://images.pexels.com/photos/8589656/pexels-photo-8589656.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "All"
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

    const imageUrls = filteredImages.map(img => img.url);

    return (
        <section className="py-12" id="gallery">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-5xl font-bold text-center mb-6">Travel <span className="text-amber-400">Gallery</span></h2>

                {/* Filter Buttons */}
                <div className="flex justify-center mb-8 flex-wrap gap-3">
                    {categories.map((cat, index) => (
                        <button
                            key={index}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 rounded-full border text-sm ${filter === cat
                                    ? "bg-yellow-500 text-white"
                                    : "bg-yellow-500 "
                                } hover:bg-yellow-400 transition`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filteredImages.map((img, index) => (
                        <div key={index} className="overflow-hidden rounded-lg shadow-md cursor-pointer">
                            <img
                                src={img.url}
                                loading="lazy"
                                onClick={() => {
                                    setIsOpen(true);
                                    setPhotoIndex(index);
                                }}
                                alt={`Gallery ${index}`}
                                className="w-full h-64 object-cover border-3 border-amber-400 hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>

                {/* Lightbox */}
                {isOpen && (
                    <Lightbox
                        mainSrc={imageUrls[photoIndex]}
                        nextSrc={imageUrls[(photoIndex + 1) % imageUrls.length]}
                        prevSrc={imageUrls[(photoIndex + imageUrls.length - 1) % imageUrls.length]}
                        onCloseRequest={() => setIsOpen(false)}
                        onMovePrevRequest={() =>
                            setPhotoIndex((photoIndex + imageUrls.length - 1) % imageUrls.length)
                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex((photoIndex + 1) % imageUrls.length)
                        }
                    />
                )}
            </div>
        </section>
    );
};

export default Gallery;
