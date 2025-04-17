const CourseSection = () => {
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
  
    return (
      <section className="py-16 " id="courses">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 ">Our Travel <span className="text-amber-400"> Courses</span></h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="border-3 border-amber-400 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
              >
                <img src={course.img} alt={course.title} className="h-48 w-full object-cover transition hover:scale-105" />
                <div className="p-5">
                  <h3 className="text-xl font-semibold  mb-2">{course.title}</h3>
                  <p className="text-sm text-yellow-500 font-medium mb-2">{course.duration}</p>
                  <p className=" text-sm mb-4">{course.desc}</p>
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default CourseSection;
  