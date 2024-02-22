'use client'
import React, { useState } from "react";
import "./servicesmothercontent.css";
import Image from "next/image";

const ServicesMotherContent = () => {
  const [activeTab, setActiveTab] = useState(0); // State to manage active tab

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="servicesmothercontent-container">
      {/* Tabs data */}
      <div className="tabs-content-container">
        {/* tabs1 data  */}
        <div className={activeTab === 0 ? "tabs-content active" : "tabs-content"}>
            <h2>ארוחות בוקר</h2>
          <div className="details">
            <div className="detail1-one detail">
                <h2>צוות המתנדבות</h2>
                <ul>
                    <li>פרויקט ארוחות הבוקר ליולדות מתאפשר בזכות צוות המתנדבות הפועל במסירות ובעקביות, תוך חשיבה על כל הפרטים,</li>
                    <li>החל מקניית הכלים והאביזרים, דרך שמירה על כשרות מהודרת והכנה אסתטית ועד להסעת הארוחה בביטחה עד לפתח ביתה של היולדת.</li>
                    <li>הארגון ממן את עלויות הכלים והאריזות שונות ופועל בהשגת גיבוי למתנדבות במקרים לא צפויים.</li>
                </ul>
                <h2 style={{marginTop: '1rem', fontSize: '17px', fontWeight:'700'}}>אחראיות:</h2>
                <ul>
                    <li>אורנית ביטקין – 052-6540770 </li>
                    <li>רבקה לוין – 052-7707421</li>
                    <li>לשליחת הודעת וואטסאפ - לחצי כאן</li>
                </ul>
            </div> 
            <div className="detail1-two detail">
                <h2>אפילו הקינוח בפנים</h2>
                <ul>
                    <li>בשבועיים שלאחר הלידה בכל בוקר היולדת מקבלת עד לפתח ביתה ארוחת בוקר טעימה, מזינה ומפנקת.</li>
                    <li>הארוחה מוגשת תוך חשיבה על כל פרט עד לרמת הקינוח, בכל יום מימות החול, כולל ערבי שבתות וחגים.</li>
                    <li>בלידות מורכבות יותר כגון לידת תאומים או לידה בניתוח, היולדת נהנית מארוחות בוקר לתקופה ארוכה יותר.</li>
                    <li>כל יולדת מצפה לארוחה הראשונה של הבוקר ומעידה שארוחה זו נותנת לה את הכוח ליום רגוע ומוצלח יותר.</li>
                </ul>
            </div>
          </div>
          <button className="button1">לקראת לידה? לרישום - לחצי כאן</button>
          <div className="images-container">
            <div className="image-container">
                <Image src='/assets/image1.jpg' alt="image" className='images' width={535} height={350}/>
            </div>
            <div className="image-container">
                <Image src='/assets/image2.jpg' alt="image" className='images'  width={178} height={350}/>
            </div>
            <div className="image-container">
                <Image src='/assets/image3.jpg' alt="image" className='images'  width={178} height={350}/>
            </div>
          </div>
          <button className='button2'>בחזרה לתפריט הפעילויות שלנו</button>
        </div>
        {/* tabs2 data */}
        <div className={activeTab === 1 ? "tabs-content active" : "tabs-content"}>
          <div>Content for tab 2</div>
          <div>Additional content for tab 2</div>
        </div>
        {/* tabs3 data */}
        <div className={activeTab === 2 ? "tabs-content active" : "tabs-content"}>
          <div>Content for tab 3</div>
          <div>Additional content for tab 3</div>
        </div>
        {/* tabs4 data */}
        <div className={activeTab === 3 ? "tabs-content active" : "tabs-content"}>
          <div>Content for tab 4</div>
          <div>Additional content for tab 4</div>
        </div>
      </div>
      {/* tabs */}
      <div className="tabs">
        <ul>
          <li onClick={() => handleTabClick(0)} className={activeTab === 0 ? "active" : ""}>ארוחות בוקר</li>
          <li onClick={() => handleTabClick(1)} className={activeTab === 1 ? "active" : ""}>בית החלמה</li>
          <li onClick={() => handleTabClick(2)} className={activeTab === 2 ? "active" : ""}>סעודת שבת </li>
          <li onClick={() => handleTabClick(3)} className={activeTab === 3 ? "active" : ""}>גמ״ח</li>
        </ul>
      </div>
    </div>
  );
};

export default ServicesMotherContent;
