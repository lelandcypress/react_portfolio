import React from "react";
import "./styles/Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";

function Footer() {
  return (
    <div className="container-fluid footer">
      <div className="row d-flex justify-content-center">
        <div className="col-6">
          <div className="row">
            <a
              href="https://www.linkedin.com/in/michael-souter-3a61953b/"
              target="_blank"
              className="col-4"
            >
              <FaLinkedin size={50} />
            </a>

            <a
              href="https://github.com/lelandcypress"
              target="_blank"
              className="col-4"
            >
              <FaGithub size={50} />
            </a>

            <a
              href="mailto: souterm1@gmail.com"
              target="_blank"
              className="col-4"
            >
              <HiOutlineMailOpen size={50} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
