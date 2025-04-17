import React from "react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Rahim Uddin",
      text: "TravelPro made my honeymoon trip to Maldives unforgettable. Everything was perfectly arranged!",
    },
    {
      name: "Nusrat Jahan",
      text: "Loved their service! The Cox's Bazar tour was amazing. Highly recommended for travel lovers.",
    },
    {
      name: "Sabbir Hossain",
      text: "Friendly guide, great hotels, smooth booking — TravelPro rocks!",
    },
  ];

  return (
    <section className=" py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          What Our <span className="text-yellow-500">Travelers Say</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-md hover:shadow-lg border border-amber-400 transition-all duration-300"
            >
              <p className=" mb-4">“{review.text}”</p>
              <h4 className="font-semibold text-yellow-500">{review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
