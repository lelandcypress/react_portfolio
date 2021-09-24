import React from "react";
import "./styles/Header.css";
import "./styles/responsive.css";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <div className="w-100 ">
      <ul className="nav d-flex justify-content-around">
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange("Home")}
            className="navcss"
          >
            Home
          </a>
        </li>

        <li className="nav-item">
          <a
            href="#aboutme"
            onClick={() => handlePageChange("About")}
            className="navcss"
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#projects"
            onClick={() => handlePageChange("Projects")}
            className="navcss"
          >
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className="navcss"
          >
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
