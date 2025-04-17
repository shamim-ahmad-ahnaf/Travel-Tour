import React from "react";

const About = () => {
  return (
    <section className=" py-16 px-4 md:px-0">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold  mb-6">
            About <span className="text-yellow-500">TravelPro</span>
          </h2>
          <p className=" text-lg mb-4">
            At TravelPro, we believe that every journey should be unforgettable. With years of experience in the travel industry, we provide personalized travel packages to stunning destinations worldwide. Our mission is to make your travel dreams come true, with comfort, safety, and excitement guaranteed.
          </p>
          <p className=" text-lg">
            Whether you're looking for an exotic beach escape or an adventurous mountain trek, our team of experts is here to guide you every step of the way. Let's explore the world together!
          </p>
        </div>

        {/* Image */}
        <div>
          <img
            src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="About TravelPro"
            className="rounded-2xl shadow-lg w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
