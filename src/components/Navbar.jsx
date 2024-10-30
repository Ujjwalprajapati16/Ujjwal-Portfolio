import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 lg:p-8">

      {/* Logo */}
      <div className="text-3xl lg:text-5xl font-bold">UP</div>

      {/* Social Icons */}
      <div className="flex items-center gap-6 text-2xl lg:text-3xl">
        <FaLinkedin className="hover:text-blue-500 transition-colors" />
        <FaGithub className="hover:text-gray-800 transition-colors" />
        <FaSquareXTwitter className="hover:text-blue-400 transition-colors" />
        <FaInstagram className="hover:text-pink-500 transition-colors" />
      </div>
    </nav>
  );
};

export default Navbar;
