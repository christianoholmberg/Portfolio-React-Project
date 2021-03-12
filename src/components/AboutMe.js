import React from "react";
import author from "../me.jpg";

export const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="Author Picture" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About Me</h1>
          <p>
            Hello! My name is Christian. I'm a Full-Stack Web Developer. I make
            ReactJS websites for my clients. <br />
            <br />
            I create responsive websites that are displayed on all devices.
            <br />
            <br />
            I am ready to do this for you! Beforewe start developing your
            website, we will discuss all the details of your niche. Together, we
            will provide a user experience to your customers that greatly
            out-performs the websites of the your various competitors. <br />
            <br />I will also optimize your website for the various search
            engines (Google, Bing, etc.). Thus, your website will appear higher
            on the search results of potential clients, therefore bringing more
            traffic to your website!
            <br />
            <br />
            My goal is to connect people to businesses they are searching for
            and to help businesses find customers who need them. The best way to
            do this is with a well-optimized website that is designed for the
            best user experience in terms of ease-of-use and clean design.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
