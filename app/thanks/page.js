import React from "react";
import { ActivityStreets } from "../components/ActivityStreets/ActivityStreets";
import ExcitingEveryTime from "../components/ExcitingEveryTime/ExcitingEveryTime";
import "./thanks.css";
import Image from "next/image";

const Thanks = () => {
  return (
    <div>
      <div className="thanks-container">
        <div className="overlay-container"></div>
        <div className="content-hero">
          <h3>יולדות מודות</h3>
        </div>
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
      </div>
      <div className="thanks-content-container">
        <div className="images-content">
        <div style={{ display:'flex', flexDirection: 'column', gap:'1.5rem'}}>
            <Image src="/assets/chat1.jpeg" width={230} height={120} alt="Image" className="galleryimage"/>
            <Image src="/assets/chat4.jpeg" width={230} height={380} alt="Image" className="galleryimage"/>
            <Image src="/assets/chat6.jpg" width={230} height={160} alt="Image" className="galleryimage"/>
            <Image src="/assets/chat8.jpeg" width={230} height={320} alt="Image" className="galleryimage"/>
        </div>
        <div  style={{ display:'flex', flexDirection: 'column', gap:'1.5rem'}}>
            <Image src="/assets/chat2.jpeg" width={230} height={120} alt="Image" className="galleryimage"/>
            <Image src="/assets/chat5.jpeg" width={230} height={300} alt="Image" className="galleryimage"/>
            <Image src="/assets/chat7.jpg"  width={230} height={330} alt="Image" className="galleryimage"/>
            <Image src="/assets/chat10.png" width={230} height={100} alt="Image" className="galleryimage"/>
        </div>
        <div  style={{ display:'flex', flexDirection: 'column', gap:'1.5rem'}}>
          <Image src="/assets/chat3.jpeg" width={230} height={420} alt="Image" className="galleryimage"/>
          <Image src="/assets/chat11.jpg"  width={230} height={140} alt="Image" className="galleryimage"/> 
          <Image src="/assets/chat3.jpeg"  width={230} height={410} alt="Image" className="galleryimage"/> 

        </div>
        </div>
        <div className="text-content">
            <h1>זה מרגש כל פעם מחדש</h1>
            <h3>לקבל תודות, מילים טובות וחיבוק חם מהיולדות... ריכזנו עבורכם כאן טעימה קטנה מתוך אינספור מכתבי תודה שקיבלנו בעמותת שפרה ופועה רחובות...</h3>
        </div>
      </div>
      <ExcitingEveryTime/>
      <ActivityStreets />
    </div>
  );
};

export default Thanks;
