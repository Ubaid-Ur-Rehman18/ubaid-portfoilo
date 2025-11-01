"use client";

import React, { useEffect } from "react";
import Typed from "typed.js";
import Image from 'next/image';
import Header from "../../component/Header";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    const options = {
      strings: [
        "Expert in HTML",
        "Expert in CSS",
        "Expert in TypeScript",
        "Expert in JavaScript",
        "Expert in Next.Js",
        "Expert in Graphic Design",

      ],
      typeSpeed: 80,
      backSpeed: 80,
      loop: true,
    };

    const typed = new Typed(".auto-type", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <Header /> {/* HEADER ATTACHED */}
      <div className="home-main-page">
        <div className="mid-div">
          <div className="main-div">
            <div className="hello-div">Hello It&apos;s Me</div>
            <div className="name-div">Ubaid-Ur-Rehman</div>
            <div className="skills-div">
              And I&apos;m <span className="auto-type"></span>
            </div>
            <div className="intro-div">
              I am currently pursuing Software Engineering with a focus on AI. I am passionate about learning Generative AI and developing solutions using Docker, and Python.
            </div>
          </div>
          <div className="img-div">
            <Image
              className="ubaid-logo rounded-full object-cover"
              src="/ubaid.png"
              alt="ubaid's photo"
              width={3000}
              height={6000}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
