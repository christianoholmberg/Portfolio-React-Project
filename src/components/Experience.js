import React from "react";

const Experience = () => {
  return (
    <div id="Experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>Experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2015-2016</h3>
            <p>
              I wrote my first piece of code in a class in high school using
              basic HTML5 and CSS. I immediately was grasped and thoroughly
              enjoyed the technical problem-solving.
            </p>
          </div>
        </div>
        {/*---*/}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2019-2020</h3>
            <p>
              I became much more interested in computer science and learned many
              more skills and technologies. I took a programming course at the
              University of Southern California. I started to branch into the
              freelance industry and learned Javascript and ReactJs, along with
              several other useful technologies, skills and libraries.
            </p>
          </div>
        </div>
        {/*---*/}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020-2021</h3>
            <p>
              During the pandemic, I got bored of sitting at home and decided to
              invest most of my time and energy into learning how to be a better
              devleoper and freelancer. I now am extremely comfortable with the
              necessary skills to build functional, dynamicm efficient, and
              user-friendly websites for all of my clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
