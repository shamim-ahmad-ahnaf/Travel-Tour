import React from "react";
import sundarban from "../../public/sundarban.jpg";
import coxs from "../../public/coxs.jpg";
import tea from "../../public/tea.jpg"; // Assuming you have an image for Sylhet

const Packages = [
  {
    id: 1,
    title: "Sundarbans Adventure",
    price: "$250",
    description: "Explore the largest mangrove forest in the world.",
    image: sundarban,
  },
  {
    id: 2,
    title: "Cox’s Bazar Beach Tour",
    price: "$300",
    description: "Relax on the world's longest natural sea beach.",
    image: coxs,
  },
  {
    id: 3,
    title: "Sylhet Tea Garden Escape",
    price: "$220",
    description: "Enjoy the beauty of tea gardens and hills.",
    image: tea,
  },

  {
    id: 3,
    title: "Sylhet Tea Garden Escape",
    price: "$220",
    description: "Enjoy the beauty of tea gardens and hills.",
    image: tea,
  },

  {
    id: 3,
    title: "Sylhet Tea Garden Escape",
    price: "$220",
    description: "Enjoy the beauty of tea gardens and hills.",
    image: tea,
  },
];

const PopularPackages = () => {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-10 mt-10">Popular <span className="text-amber-400">Packages</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Packages.map((pkg) => (
            <div key={pkg.id} className=" dark:text-amber-400 shadow-md rounded-xl overflow-hidden border-3 border-amber-400  hover:shadow-lg transition-shadow duration-300">
              <img src={pkg.image} alt={pkg.title} className="w-full h-52 object-cover transition hover:scale-95" />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                <p className="text-sm mb-3">{pkg.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-yellow-500">{pkg.price}</span>
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-1 rounded-md">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularPackages;
