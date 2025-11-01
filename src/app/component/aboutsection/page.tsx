"use client";

import "./About.css";
import Image from 'next/image';

const About = () => {
  return (
    <div className="about-section">
      <div className="free-div"></div>
      <div className="about-content">
        <div className="about-image">
        <Image
            className="ubaid-about-logo rounded-full object-cover"
             src="/ubaid-ab.png"
             alt="ubaid's photo"
             width={300}
            height={300}
            />
        </div>
        <div className="about-text">
          <h2 className="about-h2">
            ABOUT <span className="about-span">ME</span>
          </h2>
          <p>
            I have hands-on experience with web development tools such as HTML, CSS, JavaScript, TypeScript, and React.js. My goal is to build innovative projects and solve real-world problems through software development.
          </p>
        </div>
      </div>
      <div id="container" className="about-button">
        <button className="learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Learn More</span>
        </button>
      </div>
    </div>
  );
};

export default About;
