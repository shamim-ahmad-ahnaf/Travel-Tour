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
    content: "Rolling clothes, using packing cubes, and carrying essentials smartly can save you a lot of space.Rolling clothes, using packing cubes, and carrying essentials smartly can save you a lot of space ",
    image: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    title: "Why You Should Visit Bangladesh At Least Once",
    excerpt: "From the Sundarbans to Sylhet tea gardens, discover the beauty of Bangladesh.",
    content: "Explore the Sundarbans, Cox’s Bazar, tea gardens in Sylhet, and the cultural heritage of this beautiful country.",
    image: "https://images.pexels.com/photos/14724211/pexels-photo-14724211.jpeg?auto=compress&cs=tinysrgb&w=600",
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
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 backdrop-blur-md bg-opacity-60">
          <div className="relative w-full max-w-lg p-6 bg-white border-2 rounded-lg shadow-lg border-amber-400">
            <button
              onClick={closeBlog}
              className="absolute text-2xl font-bold text-gray-500 top-2 right-2 hover:text-red-500"
            >
              &times;
            </button>
            <h3 className="mb-4 text-2xl font-bold">{selectedBlog.title}</h3>
            <img src={selectedBlog.image} alt={selectedBlog.title} className="mb-4 rounded-md border-amber-400 border-3" />
            <p className="text-gray-700">{selectedBlog.content}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogSection;
