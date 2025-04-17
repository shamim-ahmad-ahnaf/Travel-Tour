import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-yellow-100 py-12 px-4 mt-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 mb-6">
          Get the latest travel updates, discounts, and inspiration straight to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-md transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
