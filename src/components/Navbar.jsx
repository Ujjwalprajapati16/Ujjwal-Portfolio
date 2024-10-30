import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center space-x-2">
        <svg
          width="306.40999603271484"
          height="35.45913788750726"
          viewBox="0 0 369.7027027027027 42.78365354346853"
          className="looka-1j8o68f"
        >
          <g
            id="SvgjsG1160"
            featurekey="PG4fjM-0"
            transform="matrix(0.4729729729729729,0,0,0.4729729729729729,0,9)"
            fill="#e99b9b"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M57,51v1c0,0.553-0.447,1-1,1H44c-0.553,0-1-0.447-1-1v-1H0v2c0,0,0,3,3,3h94c3,0,3-3,3-3v-2H57z"
            ></path>
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M85,0H15c-1.658,0-3,1.343-3,3v1v41c0,1.657,1.342,3,3,3h1h68h1c1.656,0,3-1.343,3-3V4V3C88,1.343,86.657,0,85,0z M84,44H16 V4h68V44z"
            ></path>
          </g>
        </svg>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaSquareXTwitter />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;
