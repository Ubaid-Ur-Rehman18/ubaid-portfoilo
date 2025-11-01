"use client";

import Header from "../component/Header"; 
import Image from "next/image";

const ServicePage = () => {
  return (
    <>
      <Header /> {/* Sticky header */}
      <div className="service-section">
        <h2 className="service-h2">OUR SERVICES</h2>
        <div className="service-cards">
          <div className="service-card">
            <Image src="/wab-dev.jpg" alt="Graphic Design" width={150} height={150} />
            <h3>Web Development</h3>
            <p>Build modern, responsive websites with Next.js, React, HTML, CSS, and JavaScript.</p>
          </div>
          <div className="service-card">
            <Image src="/ui-ux.jpg" alt="UI/UX Design" width={150} height={150} />
            <h3>UI/UX Design</h3>
            <p>Design user-friendly and visually appealing interfaces for web applications.</p>
          </div>
          <div className="service-card">
            <Image src="/ai.jpg" alt="AI Solutions" width={150} height={150} />
            <h3>AI Solutions</h3>
            <p>Develop AI-powered solutions using Python, Generative AI, and machine learning models.</p>
          </div>
          <div className="service-card">
            <Image src="/graphic.jpg" alt="Graphic Design" width={150} height={150} />
            <h3>Graphic Design</h3>
            <p>Create visually stunning graphics, logos, and marketing materials using modern design tools.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;
