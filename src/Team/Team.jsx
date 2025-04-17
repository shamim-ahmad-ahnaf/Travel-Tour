const Team = () => {
    const teamMembers = [
      {
        name: "Alice Brown",
        role: "Tour Guide",
        img: "https://i.pravatar.cc/150?img=32"
      },
      {
        name: "Bob Johnson",
        role: "Sales Manager",
        img: "https://i.pravatar.cc/150?img=11"
      },
      {
        name: "Charlie Williams",
        role: "Travel Consultant",
        img: "https://i.pravatar.cc/150?img=45"
      }
    ];
  
    return (
      <section className="py-16 " id="team">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 "><span className="text-amber-400">Meet</span> Our Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className=" rounded-xl shadow-lg p-6 text-center border-2 border-amber-400 hover:shadow-xl transition">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold ">{member.name}</h3>
                <p className="text-yellow-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Team;
  