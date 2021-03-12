import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
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
        <a href="#" className="btn-main-offer">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Header;
