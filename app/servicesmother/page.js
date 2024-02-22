import React from "react";
import ExcitingEveryTime from "../components/ExcitingEveryTime/ExcitingEveryTime";
import { ActivityStreets } from "../components/ActivityStreets/ActivityStreets";
import "./servicesmother.css";
import ServicesMotherContent from "../components/ServicesMotherContent/ServicesMotherContent";

const ServicesMother = () => {
  return (
    <div>
      <section className="servicemother-container">
        <div className="overlay-container"></div>
        <div
          class="elementor-shape elementor-shape-bottom"
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
          <h3>השירות ליולדת</h3>
          <p>מאת שפרה ופועה - רחובות</p>
        </div>
      </section>
      <div className="content-servicemother">
        <p>שפרה ופועה ברחובות פועל למעלה מ-40 שנה במטרה לסייע ליולדות להתאושש מהלידה ולהיטב עם היולדות בתקופה המאתגרת שבסמוך ללידה. לאור סקר גדול ומקיף שנערך לאחרונה בקרב יולדות נוספו שירותים אטרקטיביים נוספים לבקשת היולדות היקרות שלנו. כשהיולדת מקבלת את העזרה המתאימה היא יכולה למלא תפקידה כאמא שמחה ורגועה יותר אשר משרה אוירה רגועה בביתה.</p>
      </div>
      <ServicesMotherContent/>
      <div style={{padding: '2rem 0'}}>
        <ExcitingEveryTime />
      </div>
      <ActivityStreets />
    </div>
  );
};

export default ServicesMother;
