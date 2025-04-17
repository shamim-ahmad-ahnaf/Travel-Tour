import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // localStorage থেকে ডার্ক মোড স্টেট পড়ুন
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // ডার্ক মোড পরিবর্তন হলে localStorage আপডেট করুন
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed bottom-6 left-6 z-50 bg-gray-200 dark:bg-gray-800 text-yellow-500 p-3 rounded-full shadow-md hover:scale-105 transition"
    >
      {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
    </button>
  );
};

export default DarkModeToggle;
