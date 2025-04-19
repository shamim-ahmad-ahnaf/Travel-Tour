import { useState } from "react";

import { FaCreditCard } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";  
import { FaRocket } from "react-icons/fa";




const CourseSection = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    notes: "",
  });

  const [isFormValid, setIsFormValid] = useState(true);

  const courses = [
    {
      title: "Travel Photography",
      duration: "4 Weeks",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      desc: "Learn the art of capturing beautiful travel moments through your lens.",
    },
    {
      title: "Tour Guide Training",
      duration: "6 Weeks",
      img: "https://images.pexels.com/photos/6740173/pexels-photo-6740173.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Master the skills needed to become a certified tour guide.",
    },
    {
      title: "Travel Blogging",
      duration: "3 Weeks",
      img: "https://images.pexels.com/photos/13454735/pexels-photo-13454735.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Start your journey as a travel content creator and share your adventures.",
    },
  ];

  const closeModal = () => {
    setSelectedCourse(null);
    setIsBookingConfirmed(false);
    setFormData({
      name: "",
      email: "",
      notes: "",
    });
  };

  const handleBookingConfirm = () => {
    if (formData.name && formData.email) {
      setIsBookingConfirmed(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-16" id="courses">
      <div className="max-w-6xl px-4 mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center">
          Our Travel <span className="text-amber-400">Courses</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
          {courses.map((course, index) => (
            <div
              key={index}
              className="overflow-hidden transition duration-300 shadow-md border-3 border-amber-400 rounded-xl hover:shadow-xl"
            >
              <img
                src={course.img}
                alt={course.title}
                className="object-cover w-full h-48 transition hover:scale-105"
              />
              <div className="p-5">
                <h3 className="mb-2 text-xl font-semibold">{course.title}</h3>
                <p className="mb-2 text-sm font-medium text-yellow-500">
                  {course.duration}
                </p>
                <p className="mb-4 text-sm">{course.desc}</p>
                <button
                  className="px-4 py-2 text-white transition bg-yellow-500 rounded hover:bg-yellow-600"
                  onClick={() => setSelectedCourse(course)}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Booking */}
      {selectedCourse && !isBookingConfirmed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center text-black bg-opacity-50 backdrop-blur-md">
          <div className="w-[90%] max-w-2xl p-6 rounded-lg shadow-lg bg-sky-100 max-h-[90vh] overflow-y-auto relative border-amber-400 border">
            <button
              onClick={closeModal} // Close the modal
              className="absolute text-xl font-bold text-red-500 top-2 right-4"
            >
              &times;
            </button>
            <h2 className="mb-4 text-2xl font-bold text-center text-amber-500">
              Booking Details for {selectedCourse.title}
            </h2>
            <div className="mb-4">
              <img
                src={selectedCourse.img}
                alt={selectedCourse.title}
                className="object-cover w-full h-48 border-2 rounded border-amber-400"
              />
            </div>
            <p className="mb-4 text-lg">{selectedCourse.desc}</p>
            <p className="mb-4 text-xl font-bold text-yellow-500">
              Duration: {selectedCourse.duration}
            </p>

            {/* Booking form */}
            <div>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded border-amber-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded border-amber-400"
              />
              <textarea
                placeholder="Additional Notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded border-amber-400"
              ></textarea>
              {!isFormValid && (
                <p className="mb-4 text-red-500">Please fill out all required fields.</p>
              )}
              <button
                className="w-full px-4 py-2 bg-yellow-400 rounded-md hover:bg-yellow-500"
                onClick={handleBookingConfirm} // Confirm booking
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Payment Modal after Confirming Booking */}
      {isBookingConfirmed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center text-black bg-opacity-50 backdrop-blur-md">
          <div className="w-[90%] max-w-2xl p-6 rounded-lg shadow-lg bg-sky-100 max-h-[90vh] overflow-y-auto relative border-amber-400 border">
            <button
              onClick={closeModal} // Close the modal
              className="absolute text-xl font-bold text-red-500 top-2 right-4"
            >
              &times;
            </button>
            <h2 className="mb-4 text-2xl font-bold text-center text-amber-500">
              Payment for {selectedCourse.title}
            </h2>
            <div className="mb-4">
              <img
                src={selectedCourse.img}
                alt={selectedCourse.title}
                className="object-cover w-full h-48 border-2 rounded border-amber-400"
              />
            </div>
            <p className="mb-4 text-lg">{selectedCourse.desc}</p>
            <p className="mb-4 text-xl font-bold text-yellow-500">
              Duration: {selectedCourse.duration}
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

export default CourseSection;
