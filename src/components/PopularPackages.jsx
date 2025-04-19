import React, { useState } from "react";
import sundarban from "../../public/sundarban.jpg";
import coxs from "../../public/coxs.jpg";
import tea from "../../public/tea.jpg"; 

import { FaCreditCard } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";  
import { FaRocket } from "react-icons/fa";



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
];

const PopularPackages = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isFormValid, setIsFormValid] = useState(true); // Form validation state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  const handleBookNow = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
  };

  const handleConfirmBooking = () => {
    // Form validation
    if (name === "" || email === "") {
      setIsFormValid(false); 
    } else {
      setIsModalOpen(false);
      setIsPaymentModalOpen(true);
      setIsFormValid(true); 
    }
  };

  const closePaymentModal = () => {
    setIsPaymentModalOpen(false);
  };

  return (
    <section className="py-12">
      <div className="max-w-6xl px-4 mx-auto">
        <h2 className="mt-10 mb-10 text-5xl font-bold text-center">
          Popular <span className="text-amber-400">Packages</span>
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {Packages.map((pkg) => (
            <div
              key={pkg.id}
              className="overflow-hidden transition-shadow duration-300 shadow-md dark:text-amber-400 rounded-xl border-3 border-amber-400 hover:shadow-lg"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="object-cover w-full transition h-52 hover:scale-95"
              />
              <div className="p-5">
                <h3 className="mb-2 text-xl font-semibold">{pkg.title}</h3>
                <p className="mb-3 text-sm">{pkg.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-yellow-500">
                    {pkg.price}
                  </span>
                  <button
                    onClick={() => handleBookNow(pkg)}
                    className="px-4 py-1 text-black bg-yellow-400 rounded-md hover:bg-yellow-500"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      {isModalOpen && selectedPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center text-black bg-opacity-50 backdrop-blur-md">
          <div className="w-[90%] max-w-2xl p-6 rounded-lg shadow-lg bg-sky-100 max-h-[90vh] overflow-y-auto relative border-amber-400 border">
            <button
              onClick={closeModal}
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 mb-4 border rounded border-amber-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 mb-4 border rounded border-amber-400"
              />
              <textarea
                placeholder="Additional Notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full p-2 mb-4 border rounded border-amber-400"
              ></textarea>
              {!isFormValid && (
                <p className="mb-4 text-red-500">Please fill out all required fields.</p>
              )}
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
      {isPaymentModalOpen && (
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
                <FaCreditCard className="mr-2" /> 
                Pay with Credit/Debit Card
              </button>
              <button className="flex items-center justify-center w-full px-4 py-2 mb-4 text-white bg-blue-500 rounded-md hover:bg-blue-600">
                <FaPaypal className="mr-2" /> 
                Pay via PayPal
              </button>
              <button className="flex items-center justify-center w-full px-4 py-2 mb-4 text-white bg-pink-500 rounded-md hover:bg-pink-600">
                <FaWallet className="mr-2" /> 
                Pay via Bkash
              </button>
              <button className="flex items-center justify-center w-full px-4 py-2 mb-4 text-white bg-orange-500 rounded-md hover:bg-orange-600">
                <FaWallet className="mr-2" /> 
                Pay via Nagad
              </button>
              <button className="flex items-center justify-center w-full px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700">
                <FaRocket className="mr-2" /> 
                Pay via Rocket
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PopularPackages;
