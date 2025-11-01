"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">Portfolio.</div>

        {/* Desktop nav */}
        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/service">Service</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/projects">Projects</Link></li>
          </ul>
        </nav>

        {/* Hamburger */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? "change" : ""}`}></div>
          <div className={`bar ${isOpen ? "change" : ""}`}></div>
          <div className={`bar ${isOpen ? "change" : ""}`}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
