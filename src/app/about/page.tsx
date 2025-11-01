"use client";

import "./aabout.css";
import Image from 'next/image';
import Header from "../component/Header"; // path adjust: app/about/page.tsx se components folder

const page = () => {
  return (
    <>
      <Header />  {/* HEADER ATTACHED */}
      <div className="about-section">
        <div className="free-div"></div>
        <div className="about-content">
          <div className="about-image">
            <Image
              className="ubaid-about-logo"
              src="/ubaid-ab.png"
              alt="Ubaid photo"
              width={1000}
              height={1000}
            />
          </div>
          <div className="about-text">
            <h2 className="about-h2">
              ABOUT <span className="about-span">ME</span>
            </h2>
            <p>
              I am a passionate Web Developer with hands-on experience in HTML, CSS, JavaScript, TypeScript, and Next.js. Alongside web development, I also specialize in Graphic Design and UI/UX Design, creating visually appealing and user-friendly interfaces. My goal is to build innovative projects that solve real-world problems and deliver seamless digital experiences.
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
    </>
  );
};

export default page;
