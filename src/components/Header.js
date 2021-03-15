import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div id="Home" className="header-wrapper">
      <div className="main-info">
        <h1>Web Development and Search Engine Optimization</h1>
        <Typed
          className="typed-text"
          strings={[
            "Web Design",
            "Web Development",
            "User Experience",
            "Search Engine Optimization",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link
          smooth={true}
          to="Contacts"
          offset={-90}
          href="#"
          className="btn-main-offer"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Header;
