"use client";
import React, { useState, useEffect } from "react";
import "./navbar.css";
import { TiHeartFullOutline } from "react-icons/ti";
import { IoMenu } from "react-icons/io5";
import Image from "next/image";
import { TiArrowSortedDown } from "react-icons/ti";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

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
    <div className={`nav-container ${isScrolled ? "scrolled" : ""}`}>
      <div className="menu-container">
        <a href="/donation" className="donation-link">
          <TiHeartFullOutline className="heart-icon" />
          לתרומה
        </a>
        <button onClick={handleToggleMenu} className="mobile-menu">
          <IoMenu className="menu-icon" />
        </button>
      </div>
      <div className="links-container">
        <ul className="links">
          <li><a href="/contact">צרו קשר</a></li>
          <li><a href="/confidentiality">חסויות</a></li>
          <li><a href="/thanks">תודות</a></li>
          <li><a href="/servicesmother">השירות ליולדת</a></li>
          <li style={{position:'relative',}} className="expandable"><a href="/about"> <TiArrowSortedDown style={{paddingTop:'.4rem' }}/>
אודותינו </a>
            <ul className="sub-links">
              <li><a href="/about" className="sub-link">שפרה ופועה רחובות</a></li>
              <li><a href="/ourvolunteers" className="sub-link">המתנדבות שלנו</a></li>
              <li><a href="/ourproduct" className="sub-link">המוצרים שלנו</a></li>
              <li><a href="/gallery" className="sub-link">גלריית תמונות</a></li>
              <li><a href="/ohelhaya " className="sub-link">אוהל חיה – רחובות</a></li>
           </ul>
          </li>
          <li><a href="/">דף הבית</a></li>
        </ul>
        <div className="">
          <a href="/">
            <Image
              src="/assets/Logo.png"
              width={150}
              height={160}
              alt="Logo"
              className="logo-image"
            />
          </a>
        </div>
        {isMenuOpen && (
          <div className="menu-toggle ">
            <ul className="links-menu">
              <li><a href="/contact">צרו קשר</a></li>
              <li><a href="/confidentiality">חסויות</a></li>
              <li><a href="/thanks">תודות</a></li>
              <li><a href="/servicesmother">השירות ליולדת</a></li>
              <li style={{position:'relative',}} className="expandable"><a href="/about"> <TiArrowSortedDown style={{paddingTop:'.4rem' }}/>
אודותינו </a>
            <ul className="sub-links">
              <li><a href="/about" className="sub-link">שפרה ופועה רחובות</a></li>
              <li><a href="/ourvolunteers" className="sub-link">המתנדבות שלנו</a></li>
              <li><a href="/ourproduct" className="sub-link">המוצרים שלנו</a></li>
              <li><a href="/gallery" className="sub-link">גלריית תמונות</a></li>
              <li><a href="/ohelhaya " className="sub-link">אוהל חיה – רחובות</a></li>
           </ul>
          </li>
              <li><a href="/">דף הבית</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
