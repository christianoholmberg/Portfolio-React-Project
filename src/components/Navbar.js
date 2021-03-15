import React from "react";
import logo from "../logo.png";
import { Link } from "react-scroll";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} className="logo" alt="Navbar Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link smooth={true} to="Home" className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="AboutMe"
                offset={-90}
                className="nav-link"
                href="#"
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="Services"
                offset={-90}
                className="nav-link"
                href="#"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="Experience"
                offset={-90}
                className="nav-link"
                href="#"
              >
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="Portfolio"
                offset={-90}
                className="nav-link"
                href="#"
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="Contacts"
                offset={-90}
                className="nav-link"
                href="#"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
