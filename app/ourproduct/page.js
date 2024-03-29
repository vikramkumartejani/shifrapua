"use client";
import React, { useState } from "react";
import "./ourproduct.css";
import { ActivityStreets } from "../components/ActivityStreets/ActivityStreets";
import ExcitingEveryTime from "../components/ExcitingEveryTime/ExcitingEveryTime";

const OurProduct = () => {
  const [hoveredBox, setHoveredBox] = useState(null);

  const handleMouseEnter = (boxNumber) => {
    setHoveredBox(boxNumber);
  };

  const handleMouseLeave = () => {
    setHoveredBox(null);
  };
  return (
    <div>
      <section className="ourproducts-container">
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
          <h3>המוצרים שלנו</h3>
        </div>
      </section>
      <div className="ourproucts-content">
        <h2>אנו שמחות להציג את המוצרים הדיגיטליים של שפרה ופועה ברחובות:</h2>
        <div className="box-ourproduct ">
          <div
            className={`image-box-ourproduct  ${
              hoveredBox === 1 ? "hovered" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="overlay"></div>
            <div className="contentbox">
              <p>להורדת חוברת המתכונים</p>
              {hoveredBox === 1 && <h6>לחצי כאן</h6>}
            </div>
          </div>
          <div className="para">
            <h2>שפרה ופועה רחובות –</h2>
            <h3>חוברת המתכונים</h3>
            <p>
              חוברת המתכונים של שפרה ופועה ברחובות. לחצי על התמונה של החוברת –
              לצפייה והורדה.
            </p>
          </div>
        </div>
      </div>
      <ExcitingEveryTime />
      <ActivityStreets />
    </div>
  );
};

export default OurProduct;
