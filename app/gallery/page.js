"use client";
import React, { useState } from "react";
import { ActivityStreets } from "../components/ActivityStreets/ActivityStreets";
 import "./gallery.css";
import Image from "next/image";
import ImagesGallery from "../components/ImagesGallery/ImagesGallery";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <section className="gallery-container">
        <div className="overlay-container"></div>
        <div
          class="elementor-shape elementor-shape-bottom"
          data-negative="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path
              class="elementor-shape-fill"
              d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
	c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
	c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"
            ></path>
          </svg>
        </div>
        <div className="content-hero">
          <h3> גלריית תמונות</h3>
        </div>
      </section>
      <div className="gallery-content">
        <div className="gallerytabs-content">
          {/* tabs */}
          <div className="gallery-tabs">
            <button
              className={activeTab === 0 ? "active" : ""}
              onClick={() => handleTabClick(0)}
            >
              המתוקים שלנו
            </button>
            <button
              className={activeTab === 1 ? "active" : ""}
              onClick={() => handleTabClick(1)}
            >
              גלריית אירועים
            </button>
          </div>
          {/* tabs data */}
          <div className="gallery-tabs-content">
            {/* tab 1 data */}
            <div style={{ display: activeTab === 0 ? "block" : "none" }} className="tab-title tab1">
               <h1>גלריית אירועים</h1>
               <p>יעלה ב״ה בקרוב</p>
            </div>
            {/* tab 2 data */}
            <div style={{ display: activeTab === 1 ? "block" : "none" }} className="tab-title tab2">
               <h1>המתוקים שלנו</h1>
               {/* Images */}
               <div>
                 <ImagesGallery/>
               </div>
            </div>
          </div>
        </div>
      </div>
       <ActivityStreets />
    </>
  );
};

export default Gallery;
