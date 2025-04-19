import React, { useState } from "react";
import Fuse from "fuse.js";
import sundarban from "../../public/sundarban.jpg";
import coxs from "../../public/coxs.jpg";
import tea from "../../public/tea.jpg";


import { FaCreditCard } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";  // Used for Bkash and Nagad
import { FaRocket } from "react-icons/fa";




const allPackages = [
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
];

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPackages, setFilteredPackages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [formError, setFormError] = useState(""); // New state for error message

  const handleSearch = () => {
    const options = {
      keys: ["title", "description"],
      threshold: 0.4,
    };

    const fuse = new Fuse(allPackages, options);
    const results =
      searchTerm.trim() === ""
        ? allPackages
        : fuse.search(searchTerm).map((result) => result.item);

    setFilteredPackages(results);
    setIsModalOpen(true);
    setSearchTerm("");
  };

  const handleBookNow = (pkg) => {
    setSelectedPackage(pkg);
    setShowPayment(false);
  };

  const closeBookingModal = () => {
    setSelectedPackage(null);
    setShowPayment(false);
  };

  const closePaymentModal = () => {
    setIsPaymentModalOpen(false);
  };

  const handleConfirmBooking = () => {
    // Check if all fields are filled
    if (!name || !email) {
      setFormError("Please fill in all the fields before proceeding.");
      return;
    }
    setFormError(""); // Clear error message if form is valid
    setIsModalOpen(false);
    setIsPaymentModalOpen(true);
  };

  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 z-0 object-cover w-full h-full"
      >
        <source src="/see.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 z-10 bg-opacity-60"></div>

      <div className="relative z-20 px-4 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">
          Explore The World With Us
        </h1>
        <p className="mb-6 text-lg md:text-2xl">
          Find the best deals for your next adventure
        </p>
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <input
            type="text"
            placeholder="Search for packages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            onClick={handleSearch}
            className="px-6 py-2 font-semibold bg-yellow-400 rounded-md hover:bg-yellow-500"
          >
            Search Packages
          </button>
        </div>
      </div>

      {/* Search Results Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-md ">
          <div className="bg-sky-100 w-full max-w-2xl p-6 rounded-lg shadow-lg overflow-y-auto max-h-[80vh] relative border-2 border-amber-400">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute text-xl font-bold text-red-500 top-2 right-4"
            >
              &times;
            </button>
            <h2 className="mb-4 text-2xl font-bold text-center text-amber-500">
              Search Results
            </h2>
            {filteredPackages.length === 0 ? (
              <p className="text-center text-gray-500">No packages found.</p>
            ) : (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {filteredPackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className="p-3 transition border rounded-md shadow border-amber-400 hover:shadow-lg"
                  >
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="object-cover w-full h-40 mb-2 rounded"
                    />
                    <h3 className="text-lg font-bold">{pkg.title}</h3>
                    <p className="text-sm">{pkg.description}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-semibold text-yellow-500">
                        {pkg.price}
                      </span>
                      <button
                        onClick={() => handleBookNow(pkg)}
                        className="px-3 py-1 bg-yellow-400 rounded hover:bg-yellow-500"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {isModalOpen && selectedPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center text-black bg-opacity-50 backdrop-blur-md">
          <div className="w-[90%] max-w-2xl p-6 rounded-lg shadow-lg bg-sky-100 max-h-[90vh] overflow-y-auto relative border-amber-400 border">
            <button
              onClick={closeBookingModal}
              className="absolute text-xl font-bold text-red-500 top-2 right-4"
            >
              &times;
            </button>
            <h2 className="mb-4 text-2xl font-bold text-center text-amber-500">
              Booking Details for {selectedPackage.title}
            </h2>
            <div className="mb-4">
              <img
                src={selectedPackage.image}
                alt={selectedPackage.title}
                className="object-cover w-full h-48 border-2 rounded border-amber-400"
              />
            </div>
            <p className="mb-4 text-lg">{selectedPackage.description}</p>
            <p className="mb-4 text-xl font-bold text-yellow-500">
              Price: {selectedPackage.price}
            </p>

            {/* Booking form */}
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 mb-4 border rounded border-amber-400"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 mb-4 border rounded border-amber-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                placeholder="Additional Notes"
                className="w-full p-2 mb-4 border rounded border-amber-400"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>

              {/* Conditional error message */}
              {formError && <p className="mb-4 text-red-500">{formError}</p>}

              <button
                className="w-full px-4 py-2 bg-yellow-400 rounded-md hover:bg-yellow-500"
                onClick={handleConfirmBooking}
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      {isPaymentModalOpen && selectedPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center text-black bg-opacity-50 backdrop-blur-md">
          <div className="w-[90%] max-w-2xl p-6 rounded-lg shadow-lg bg-sky-100 max-h-[90vh] overflow-y-auto relative border-amber-400 border">
            <button
              onClick={closePaymentModal}
              className="absolute text-xl font-bold text-red-500 top-2 right-4"
            >
              &times;
            </button>
            <h2 className="mb-4 text-2xl font-bold text-center text-amber-500">
              Payment for {selectedPackage.title}
            </h2>
            <div className="mb-4">
              <img
                src={selectedPackage.image}
                alt={selectedPackage.title}
                className="object-cover w-full h-48 border-2 rounded border-amber-400"
              />
            </div>
            <p className="mb-4 text-lg">{selectedPackage.description}</p>
            <p className="mb-4 text-xl font-bold text-yellow-500">
              Price: {selectedPackage.price}
            </p>

            {/* Payment options */}
            <div className="font-bold">
              <button className="flex items-center justify-center w-full px-4 py-2 mb-4 text-white bg-green-500 rounded-md hover:bg-green-600">
                <FaCreditCard className="mr-2" /> {/* Credit/Debit Card icon */}
                Pay with Credit/Debit Card
              </button>
              <button className="flex items-center justify-center w-full px-4 py-2 mb-4 text-white bg-blue-500 rounded-md hover:bg-blue-600">
                <FaPaypal className="mr-2" /> {/* PayPal icon */}
                Pay via PayPal
              </button>
              <button className="flex items-center justify-center w-full px-4 py-2 mb-4 text-white bg-pink-500 rounded-md hover:bg-pink-600">
                <FaWallet className="mr-2" /> {/* Bkash icon */}
                Pay via Bkash
              </button>
              <button className="flex items-center justify-center w-full px-4 py-2 mb-4 text-white bg-orange-500 rounded-md hover:bg-orange-600">
                <FaWallet className="mr-2" /> {/* Nagad icon */}
                Pay via Nagad
              </button>
              <button className="flex items-center justify-center w-full px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700">
                <FaRocket className="mr-2" /> {/* Rocket icon */}
                Pay via Rocket
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
