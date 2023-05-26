import React from "react";
import { Link } from "react-scroll";
import Logo from "../assets/logo.png";
import Download from "../assets/download.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark py-4 position-fixed">
      <div className="container">
        <Link
          to="intro"
          smooth={true}
          offset={-70}
          duration={500}
          className="navbar-brand"
        >
          <img src={Logo} width="200" alt="Eng. Khalil Saab" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="intro"
                smooth={true}
                className="nav-link"
              >
                Introduction
              </Link>
            </li>

            <li className="nav-item">
              <Link to="#about" smooth={true} className="nav-link">
                About Me
              </Link>
            </li>

            <li className="nav-item">
              <Link
                activeClass="active"
                to="contact"
                smooth={true}
                className="nav-link"
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="mt-lg-0 mt-2 mb-3 mb-lg-0">
            <Link
              to="intro"
            >
              <img src={Download} width="170" alt="Eng. Khalil Saab" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
