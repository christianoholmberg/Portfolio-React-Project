import React from "react";
import portPic from "../portfolio.png";
import visualization from "../visualization.png";
//FONT AWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
//REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  //Portfolio
  const openPopupboxPortfolio = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={portPic}
          alt="Portfolio Project"
        />
        <p>My portfolio website, the website you are currently viewing</p>
        <b>Demo: </b>
        <a
          className="hyper-link"
          onClick={() => window.open("http://christianholmberg.com/", "_blank")}
        >
          http://christianholmberg.com/
        </a>
        <br />
        <b>GitHub: </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/christianoholmberg/Portfolio-React-Project",
              "_blank"
            )
          }
        >
          https://github.com/christianoholmberg/Portfolio-React-Project
        </a>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popupboxConfigPortfolio = {
    titleBar: {
      enable: true,
      text: "Portfolio Project",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  //Data Visualization
  const openPopupboxVisualization = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={visualization}
          alt="Data Visualization Project"
        />
        <p>
          A data visualization project linking Google Charts styling to
          Tabeltop.js data processing. This is a javascript project and mostly
          shows back-end skills using Tabletop.js combined with Google Charts.{" "}
        </p>
        <b>GitHub: </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/christianoholmberg/Tabletop---Google-Charts-Data-Visualization-of-COVID-19-Vaccinations-by-Country"
            )
          }
        >
          https://github.com/christianoholmberg/Tabletop---Google-Charts-Data-Visualization-of-COVID-19-Vaccinations-by-Country
        </a>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popupboxConfigVisualization = {
    titleBar: {
      enable: true,
      text: "Data Visualizaiton with Tabletop.js and Google Charts Project",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div className="portfolio-wrapper">
      <div className="contianer">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
            <img
              className="portfolio-image"
              src={portPic}
              alt="Portfolio Project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          {/*---*/}

          <div
            className="portfolio-image-box"
            onClick={openPopupboxVisualization}
          >
            <img
              className="portfolio-image"
              src={visualization}
              alt="Data Visualization Project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
        {/*---*/}
      </div>
      <PopupboxContainer {...popupboxConfigVisualization} />
      <PopupboxContainer {...popupboxConfigPortfolio} />
    </div>
  );
};

export default Portfolio;
