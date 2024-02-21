import React from "react";
import "./activitystreets.css";
import Link from "next/link";
import { TiHeartFullOutline } from "react-icons/ti";

export const ActivityStreets = () => {
  return (
    <div className="activitystreets-container">
      <div>
        <div class="elementor-shape elementor-shape-top1" data-negative="false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path
              class="elementor-shape-fill"
              d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
            ></path>
          </svg>{" "}
        </div>
      </div>
      <div className="activity-content">
        <h2>פעילות ׳שפרה ופועה׳ ברחובות בשנה החולפת:</h2>
        <div className="elements-boxes">
          <div className="elements-box">
            <h3>87</h3>
            <p>מתנדבות</p>
          </div>
          <div className="elements-box">
            <h3>5,340</h3>
            <p>ארוחות חולקו</p>
          </div>
          <div className="elements-box">
            <h3>2,423</h3>
            <p>שעות התנדבות</p>
          </div>
          <div className="elements-box">
            <h3>178</h3>
            <p>יולדות בשנה</p>
          </div>
        </div>

        <h3 class="elementor-headline">
          אנו מזמינים אתכם
          <span class="logo-take-part">
            <span class="take-part"> לקחת חלק </span>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
                  fill="red"
            >
              <path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path>
            </svg> */}
          </span>
          בפעילות שלנו
        </h3>

        <div className="pages-links">
          <Link href="/" className="link-one">
            <TiHeartFullOutline />
            לתרומה - לחצי כאן{" "}
          </Link>
          <Link href="/" className="link-two">
            <TiHeartFullOutline />
            התנדבות - לחצי כאן
          </Link>
        </div>
      </div>
    </div>
  );
};
