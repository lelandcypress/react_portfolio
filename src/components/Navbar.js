import React from "react";
import "./Header.css";
import "./responsive.css";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <div className="w-100 ">
      <ul className="nav d-flex justify-content-around">
        <li className="nav-item">
          <a href="/" className="navcss">
            Home
          </a>
        </li>

        <li className="nav-item">
          <a href="/about" className="navcss">
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a href="/projects" className="navcss">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="navcss">
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
