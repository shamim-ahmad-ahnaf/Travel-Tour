import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Team = () => {
  const teamMembers = [
    {
      name: "Alice Brown",
      role: "Tour Guide",
      img: "https://i.pravatar.cc/150?img=32",
      bio: "Alice is a seasoned tour guide with over 10 years of experience exploring hidden gems around the world.",
      experience: "10+ years",
      languages: ["English", "French", "Spanish"],
      hobbies: ["Hiking", "Photography", "Cultural Exploration"],
      joined: "2014",
      email: "alice.brown@example.com",
      location: "Paris, France",
    },
    {
      name: "Bob Johnson",
      role: "Sales Manager",
      img: "https://i.pravatar.cc/150?img=11",
      bio: "Bob has been managing travel packages for top-tier clients for 7 years.",
      experience: "7 years",
      languages: ["English", "German"],
      hobbies: ["Golf", "Reading Business Books"],
      joined: "2016",
      email: "bob.johnson@example.com",
      location: "Berlin, Germany",
    },
    {
      name: "Charlie Williams",
      role: "Travel Consultant",
      img: "https://i.pravatar.cc/150?img=45",
      bio: "Charlie specializes in planning custom travel experiences for families and corporate clients.",
      experience: "8 years",
      languages: ["English", "Italian", "Japanese"],
      hobbies: ["Cooking", "Language Learning"],
      joined: "2015",
      email: "charlie.williams@example.com",
      location: "Rome, Italy",
    },
    
  ];

  const [selectedMember, setSelectedMember] = useState(null);
  const [showContact, setShowContact] = useState(false);

  return (
    <section className="py-16" id="team">
      <div className="max-w-6xl px-4 mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center">
          <span className="text-amber-400">Meet</span> Our Team
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="p-6 text-center transition border-2 shadow-lg cursor-pointer rounded-xl border-amber-400 hover:shadow-xl"
              onClick={() => {
                setSelectedMember(member);
                setShowContact(false);
              }}
            >
              <img
                src={member.img}
                alt={member.name}
                className="object-cover mx-auto mb-4 rounded-full w-28 h-28"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-yellow-500">{member.role}</p>
              <p className="mt-1 text-sm text-gray-500">Click to view details</p>

            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-opacity-50 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl p-8 border-2 shadow-2xl bg-gradient-to-br from-sky-100 via-white to-amber-50 rounded-2xl border-amber-300 max-h-[98vh] overflow-y-auto">
            <button
              className="absolute text-2xl text-gray-700 transition top-3 right-3 hover:text-red-500"
              onClick={() => setSelectedMember(null)}
            >
              ✖
            </button>

            {!showContact ? (
              <>
                {/* Profile Image & Info */}
                <div className="flex flex-col items-center mb-4">
                  <div className="overflow-hidden border-4 rounded-full shadow-lg border-amber-400 w-28 h-28">
                    <img
                      src={selectedMember.img}
                      alt={selectedMember.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-gray-800">
                    {selectedMember.name}
                  </h3>
                  <p className="font-medium text-amber-600">
                    {selectedMember.role}
                  </p>
                </div>

                {/* Bio */}
                <p className="mb-6 italic leading-relaxed text-center text-gray-700">
                  {selectedMember.bio}
                </p>

                {/* Info List */}
                <div className="grid grid-cols-1 gap-2 mb-6 text-sm text-gray-700">
                  <div>
                    <strong>📧 Email:</strong> {selectedMember.email}
                  </div>
                  <div>
                    <strong>📍 Location:</strong> {selectedMember.location}
                  </div>
                  <div>
                    <strong>🗓️ Joined:</strong> {selectedMember.joined}
                  </div>
                  <div>
                    <strong>⭐ Experience:</strong> {selectedMember.experience}
                  </div>
                  <div>
                    <strong>🗣️ Languages:</strong>{" "}
                    {selectedMember.languages.join(", ")}
                  </div>
                  <div>
                    <strong>🎯 Hobbies:</strong>{" "}
                    {selectedMember.hobbies.join(", ")}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center mb-6 space-x-4 text-xl text-gray-600">
                  <a href="#" className="transition hover:text-blue-600" title="Facebook">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="transition hover:text-sky-500" title="Twitter">
                    <FaTwitter />
                  </a>
                  <a href="#" className="transition hover:text-pink-500" title="Instagram">
                    <FaInstagram />
                  </a>
                  <a href="#" className="transition hover:text-blue-800" title="LinkedIn">
                    <FaLinkedinIn />
                  </a>
                </div>

                {/* Contact Button */}
                <div className="flex justify-center">
                  <button
                    onClick={() => setShowContact(true)}
                    className="px-6 py-2 font-semibold text-white transition rounded-full shadow-md bg-amber-400 hover:bg-amber-500"
                  >
                    Contact Now
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Contact Form */}
                <h3 className="mb-4 text-2xl font-bold text-center text-gray-800">
                  Contact {selectedMember.name}
                </h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                  <textarea
                    placeholder="Your Message"
                    className="w-full px-4 py-2 border rounded-lg"
                    rows="4"
                  ></textarea>
                  <button
                    type="submit"
                    className="px-6 py-2 font-semibold text-white rounded-full bg-amber-500 hover:bg-amber-600"
                  >
                    Send Message
                  </button>
                </form>

                {/* Back Button */}
                <div className="flex justify-center mt-4">
                  <button
                    onClick={() => setShowContact(false)}
                    className="px-6 py-2 font-semibold text-gray-700 transition bg-gray-200 rounded-full hover:bg-gray-300"
                  >
                    ← Back
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;

export const metadata = {
  title: "Team",
  description: "Meet our dedicated team of travel experts.",
};

export const dynamic = "force-dynamic";
