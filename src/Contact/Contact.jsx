import React from "react";

const Contact = () => {
  return (
    <section className="">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
          Get In <span className="text-yellow-500">Touch</span>
        </h2>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-yellow-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
