import React from "react";

const blogs = [
  {
    id: 1,
    title: "Top 10 Destinations to Visit in 2025",
    excerpt: "Explore the best places to travel this year. From beaches to mountains, we've got you covered!",
    image: "https://images.pexels.com/photos/106606/pexels-photo-106606.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    title: "How to Pack Smart for Your Next Adventure",
    excerpt: "Smart packing tips to make your travel easier and lighter.",
    image: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    title: "Why You Should Visit Bangladesh At Least Once",
    excerpt: "From the Sundarbans to Sylhet tea gardens, discover the beauty of Bangladesh.",
    image: "https://images.pexels.com/photos/14724211/pexels-photo-14724211.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const BlogSection = () => {
  return (
    <section className="py-12 " id="blogs">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center  mb-10">Latest <span className="text-amber-400">Blogs</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className=" shadow-lg rounded-lg overflow-hidden border-2 border-amber-400 hover:shadow-xl transition-shadow duration-300">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover transition hover:scale-105" />
              <div className="p-5">
                <h3 className="text-xl font-semibold  mb-2">{blog.title}</h3>
                <p className=" text-sm">{blog.excerpt}</p>
                <button className="mt-4 text-yellow-500 hover:text-yellow-600 text-sm font-medium">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
