import React, { useState } from "react";

const blogs = [
  {
    id: 1,
    title: "Top 10 Destinations to Visit in 2025",
    excerpt: "Explore the best places to travel this year. From beaches to mountains, we've got you covered!",
    content: "Here's the full content for Top 10 Destinations. You can visit Bali, Switzerland, Maldives, and many more!",
    image: "https://images.pexels.com/photos/106606/pexels-photo-106606.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    title: "How to Pack Smart for Your Next Adventure",
    excerpt: "Smart packing tips to make your travel easier and lighter.",
    content: "Rolling clothes, using packing cubes,  and carrying essentials smartly can save you a lot of space Rolling clothes, using packing cubes, and carrying essentials smartly can save you a lot of space.Rolling clothes, using packing cubes, and carrying essentials smartly can save you a lot of space ",
    image: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    title: "Why You Should Visit Bangladesh At Least Once",
    excerpt: "From the Sundarbans to Sylhet tea gardens, discover the beauty of Bangladesh.",
    content: "Explore the Sundarbans, Cox’s Bazar, tea gardens in Sylhet, and the cultural heritage of this beautiful country.",
    image: "https://images.pexels.com/photos/14724211/pexels-photo-14724211.jpeg?auto=compress&cs=tinysrgb&w=600",
  },

  {
    id: 2,
    title: "How to Pack Smart for Your Next Adventure",
    excerpt: "Smart packing tips to make your travel easier and lighter.",
    content: "Rolling clothes, using packing cubes,  and carrying essentials smartly can save you a lot of space Rolling clothes, using packing cubes, and carrying essentials smartly can save you a lot of space.Rolling clothes, using packing cubes, and carrying essentials smartly can save you a lot of space ",
    image: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const BlogSection = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const openBlog = (blog) => {
    setSelectedBlog(blog);
  };

  const closeBlog = () => {
    setSelectedBlog(null);
  };

  return (
    <section className="py-12" id="blogs">
      <div className="max-w-6xl px-4 mx-auto">
        <h2 className="mb-10 text-5xl font-bold text-center">
          Latest <span className="text-amber-400">Blogs</span>
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {blogs.map((blog) => (
            <div key={blog.id} className="overflow-hidden transition-shadow duration-300 border-2 rounded-lg shadow-lg border-amber-400 hover:shadow-xl">
              <img src={blog.image} alt={blog.title} className="object-cover w-full h-48 transition hover:scale-105" />
              <div className="p-5">
                <h3 className="mb-2 text-xl font-semibold">{blog.title}</h3>
                <p className="text-sm">{blog.excerpt}</p>
                <button
                  onClick={() => openBlog(blog)}
                  className="mt-4 text-sm font-medium text-yellow-500 hover:text-yellow-600"
                >
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-60 backdrop-blur-lg">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.25)] overflow-hidden animate-fade-in border border-amber-400">
            <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-amber-400 to-yellow-300">
              <h3 className="text-xl font-bold text-white">{selectedBlog.title}</h3>
              <button
                onClick={closeBlog}
                className="text-2xl font-bold text-white transition hover:text-red-600"
                aria-label="Close"
              >
                &times;
              </button>
            </div>

            {/* Modal content */}
            <div className="px-6 py-5 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-amber-300 scrollbar-track-gray-100">
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="object-cover w-full h-64 mb-5 border-2 rounded-lg shadow-md border-amber-300"
              />
              <p className="text-base leading-relaxed text-gray-700 whitespace-pre-line">
                {selectedBlog.content}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogSection;
