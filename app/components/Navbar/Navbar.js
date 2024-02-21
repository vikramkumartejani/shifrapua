"use client"
import React, { useState, useEffect } from "react";
import "./navbar.css";
 import { TiHeartFullOutline } from "react-icons/ti";
import { IoMenu } from "react-icons/io5";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav-container ${isScrolled ? 'scrolled' : ''}`}>
      <div className="menu-container">
        <a href="/donation" className="donation-link">
          <TiHeartFullOutline className="heart-icon" />
          לתרומה
        </a>
        <h1 className="mobile-menu"><IoMenu className="menu-icon" /></h1>
      </div>
      <div className="links-container">
        <ul className="links">
          <li><a href="/contact">צרו קשר</a></li>
          <li><a href="/confidentiality">חסויות</a></li>
          <li><a href="/thanks">תודות</a></li>
          <li><a href="/servicesmother">השירות ליולדת</a></li>
          <li><a href="/about">אודותינו</a></li>
          <li><a href="/">דף הבית</a></li>
        </ul>
        <div className="">
        <a href="/">
          <Image src="/assets/Logo.png" width={150} height={160} alt="Logo" className="logo-image"/>
        </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
