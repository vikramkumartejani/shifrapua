"use client";
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
        <div
          className={activeTab === 0 ? "tabs-content active" : "tabs-content"}
        >
          <h2>ארוחות בוקר</h2>
          <div className="details">
            <div className="detail1-one detail">
              <h2>צוות המתנדבות</h2>
              <ul>
                <li>
                  פרויקט ארוחות הבוקר ליולדות מתאפשר בזכות צוות המתנדבות הפועל
                  במסירות ובעקביות, תוך חשיבה על כל הפרטים,
                </li>
                <li>
                  החל מקניית הכלים והאביזרים, דרך שמירה על כשרות מהודרת והכנה
                  אסתטית ועד להסעת הארוחה בביטחה עד לפתח ביתה של היולדת.
                </li>
                <li>
                  הארגון ממן את עלויות הכלים והאריזות שונות ופועל בהשגת גיבוי
                  למתנדבות במקרים לא צפויים.
                </li>
              </ul>
              <h2
                style={{
                  marginTop: "1rem",
                  fontSize: "17px",
                  fontWeight: "700",
                }}
              >
                אחראיות:
              </h2>
              <ul>
                <li>אורנית ביטקין – 052-6540770 </li>
                <li>רבקה לוין – 052-7707421</li>
                <li>לשליחת הודעת וואטסאפ - לחצי כאן</li>
              </ul>
            </div>
            <div className="detail1-two detail">
              <h2>אפילו הקינוח בפנים</h2>
              <ul>
                <li>
                  בשבועיים שלאחר הלידה בכל בוקר היולדת מקבלת עד לפתח ביתה ארוחת
                  בוקר טעימה, מזינה ומפנקת.
                </li>
                <li>
                  הארוחה מוגשת תוך חשיבה על כל פרט עד לרמת הקינוח, בכל יום מימות
                  החול, כולל ערבי שבתות וחגים.
                </li>
                <li>
                  בלידות מורכבות יותר כגון לידת תאומים או לידה בניתוח, היולדת
                  נהנית מארוחות בוקר לתקופה ארוכה יותר.
                </li>
                <li>
                  כל יולדת מצפה לארוחה הראשונה של הבוקר ומעידה שארוחה זו נותנת
                  לה את הכוח ליום רגוע ומוצלח יותר.
                </li>
              </ul>
            </div>
          </div>
          <button className="button1">לקראת לידה? לרישום - לחצי כאן</button>
          <div className="images-container">
            <div className="image-container">
              <Image
                src="/assets/image1.jpg"
                alt="image"
                className="images"
                width={535}
                height={350}
              />
            </div>
            <div className="image-container">
              <Image
                src="/assets/image2.jpg"
                alt="image"
                className="images"
                width={178}
                height={350}
              />
            </div>
            <div className="image-container">
              <Image
                src="/assets/image3.jpg"
                alt="image"
                className="images"
                width={178}
                height={350}
              />
            </div>
          </div>
          <button className="button2">בחזרה לתפריט הפעילויות שלנו</button>
        </div>
        {/* tabs2 data */}
        <div
          className={activeTab === 1 ? "tabs-content active" : "tabs-content"}
        >
          <h2>בית החלמה</h2>
          <div className="details">
            <div className="detail1-one detail">
              <h2
                style={{
                  marginTop: "1rem",
                  fontSize: "17px",
                  fontWeight: "700",
                }}
              >
                אשת הקשר
              </h2>
              <ul>
                <li>הני בלומשטיין 050-6338770</li>
                <li>לשליחת הודעת וואטסאפ - לחצי כאן</li>
              </ul>
            </div>
            <div className="detail1-two detail">
              <h2>השתתפות במימון בית החלמה</h2>
              <ul>
                <li>
                  ארגון שפרה ופועה משתתף במימון בית החלמה ליולדת מלידה רביעית
                  ואילך. ההשתתפות ניתנת למול חשבונית מבית ההחלמה
                </li>
              </ul>
            </div>
          </div>
          <button className="button1">לקראת לידה? לרישום - לחצי כאן</button>
          <div className="images-container">
            <div className="image-container">
              <Image
                src="/assets/image4.jpg"
                alt="image"
                className="images"
                width={535}
                height={350}
              />
            </div>
            <div className="image-container">
              <Image
                src="/assets/image5.jpg"
                alt="image"
                className="images"
                width={178}
                height={350}
              />
            </div>
            <div className="image-container">
              <Image
                src="/assets/image6.jpg"
                alt="image"
                className="images"
                width={178}
                height={350}
              />
            </div>
          </div>
          <button className="button2">בחזרה לתפריט הפעילויות שלנו</button>
        </div>
        {/* tabs3 data */}
        <div
          className={activeTab === 2 ? "tabs-content active" : "tabs-content"}
        >
          <h2>סעודת שבת</h2>
          <div className="details">
            <div className="detail1-one detail">
              <h2
                style={{
                  marginTop: "1rem",
                  fontSize: "17px",
                  fontWeight: "700",
                }}
              >
                אחראיות:
              </h2>
              <ul>
                <li>חנה מלכה גרוס – 054-9457703</li>
                <li>ציפי אסרף – 054-2433172</li>
                <li>לשליחת הודעת וואטסאפ - לחצי כאן</li>
              </ul>
            </div>
            <div className="detail1-two detail">
              <h2>ארוחה מוכנה לשבת</h2>
              <ul>
                <li>היולדת ומשפחתה זכאים להנות משובר לרכישת אוכל מוכן לשבת.</li>
                <li>ניתן לממש את השובר בחודשיים הסמוכים ללידה.</li>
              </ul>
            </div>
          </div>
          <button className="button1">לקראת לידה? לרישום - לחצי כאן</button>
          <div className="images-container">
            <Image
              src="/assets/image7.jpg"
              alt="image"
              className="images"
              width={535}
              height={450}
            />
          </div>
          <button className="button2">בחזרה לתפריט הפעילויות שלנו</button>
        </div>
        {/* tabs4 data */}
        <div
          className={activeTab === 3 ? "tabs-content active" : "tabs-content"}
        >
          <h2> גמ״ח</h2>
          <div className="details">
            <div className="detail1-one detail">
              <h2
                style={{
                  marginTop: "1rem",
                  fontSize: "17px",
                  fontWeight: "700",
                }}
              >
                עם מי יוצרים קשר{" "}
              </h2>
              <ul>
                <li>גמ"ח כרית וחליפה לברית – ענת רויטמן 054-7702105</li>
                <li>גמ"ח מוצצים – ענת רויטמן 054-7702105</li>
                <li>גמ"ח ספרים לברית – מיטל שעיבי 050-9525255</li>
                <li>גמ"ח משאבות הנקה – רחלי פרץ 052-3597441</li>
                <li>
                  גמ"ח תרופות- למקרה שנתקעים בשבת או בלילה. כגון: אקמול
                  לתינוקות, רח' מגיני הגליל 51 דירה 16 0523604866 נאוה יוספשוילי
                </li>
              </ul>
            </div>
            <div className="detail1-two detail">
              <h2> גמילות חסדים </h2>
              <ul>
                <li>
                  ארגון שפרה ופועה מציע ליולדות להעזר בשירותי גמ"ח שונים הפועלים
                  למען היולדות בעיר.
                </li>
                <li>השירות ניתן ע"י נשות הקשר ובאחריותן הבלעדית.</li>
                <li>ניתן ליצור קשר במקרה הצורך עם האחראיות השונות.</li>
              </ul>
            </div>
          </div>
          <div className="images-container">
            <Image
              src="/assets/image8.jpg"
              alt="image"
              className="images"
              width={535}
              height={450}
            />
          </div>
          <button className="button2">בחזרה לתפריט הפעילויות שלנו</button>
        </div>
        {/* tabs5 data */}
        <div
          className={activeTab === 4 ? "tabs-content active" : "tabs-content"}
        >
          <h2> עזרה בניקיון</h2>
          <div className="details">
            <div className="detail1-one detail">
              <h2
                style={{
                  marginTop: "1rem",
                  fontSize: "17px",
                  fontWeight: "700",
                }}
              >
                {" "}
                אחראית:{" "}
              </h2>
              <ul>
                <li>ציפי חרמץ 054-590-3770</li>
                <li>לשליחת הודעת וואטסאפ - לחצי כאן</li>
              </ul>
            </div>
            <div className="detail1-two detail">
              <h2> שירותי עזרה בנקיון הבית </h2>
              <ul>
                <li>
                  יולדת מקבלת מהארגון סיוע במספר שעות של ניקיון הבית ויצירת
                  אוירה נעימה בבית. העזרה מגיעה בסמוך ללידה בתקופה שבה היולדת
                  מתאוששת מהלידה כדי שהיולדת תהיה רגועה ובריאה יותר. העזרה ניתנת
                  בתיאום מראש מול האחראית.
                </li>
              </ul>
            </div>
          </div>
          <button className="button1">לשליחת הודעת וואטסאפ - לחצי כאן</button>
          <div className="images-container">
            <Image
              src="/assets/imge9.jpg"
              alt="image"
              className="images"
              width={535}
              height={450}
            />
          </div>
          <button className="button2">בחזרה לתפריט הפעילויות שלנו</button>
        </div>
        {/* tabs6 data */}
        <div
          className={activeTab === 5 ? "tabs-content active" : "tabs-content"}
        >
          <h2> אוזן קשבת</h2>
          <div className="details">
            <div className="detail1-one detail">
              <h2
                style={{
                  marginTop: "1rem",
                  fontSize: "17px",
                  fontWeight: "700",
                }}
              >
                {" "}
                אחראיות:
              </h2>
              <ul>
                <li>אורנית ביטקין – 052-6540770</li>
                <li>רבקה לוין – 052-7707421</li>
                <li>לשליחת הודעת וואטסאפ - לחצי כאן</li>
              </ul>
            </div>
            <div className="detail1-two detail">
              <h2> קשר אישי עם המתנדבות </h2>
              <ul>
                <li>
                  {" "}
                  בתוך מספר ימים מהלידה המתנדבות המסורות יוצרות קשר טלפוני עם
                  היולדת. המתנדבת מתעניינת בשלומה של היולדת, מאזינה לצרכיה
                  וקשובה לרגשותיה, גם מעבר למילים.{" "}
                </li>
                <li>
                  המתנדבת מעדכנת את היולדת בסיוע ובפינוקים אותם היא זכאית לקבל
                  מטעם הארגון. משלב יצירת הקשר נוצר ערוץ תקשורת פתוח דרכו היולדת
                  יכולה לפנות שוב ולקבל מענה בהתאם לצרכיה.
                </li>
              </ul>
            </div>
          </div>
          <button className="button1"> לקראת לידה? לרישום - לחצי כאן </button>
        </div>
        {/* tabs7 data */}
        <div
          className={activeTab === 6 ? "tabs-content active" : "tabs-content"}
        >
          <h2> שרותי שמרטפות – חדש!</h2>
          <div className="details">
            <div className="detail1-one detail">
              <h2
                style={{
                  marginTop: "1rem",
                  fontSize: "17px",
                  fontWeight: "700",
                }}
              >
                עוד בתכנון:
              </h2>
              <ul>
                <li>
                  בעתיד בכוונתנו להעצים את כוחה של הנתינה וההתנדבות בקרב נערות
                  מהקהילה ולקשר בינן לבין היולדות לצורך עזרה וסיוע עם הילדים
                  בבית.
                </li>
              </ul>
              <h2
                style={{
                  marginTop: "1rem",
                  fontSize: "17px",
                  fontWeight: "700",
                }}
              >
                {" "}
                אחראית
              </h2>
              <ul>
                <li>אחראית: אסתר שפרלינג – 054-3238158</li>
                <li>לשליחת הודעת וואטסאפ - לחצי כאן</li>
              </ul>
            </div>
            <div className="detail1-two detail">
              <h2>כל מה שניתן לעשות כדי להקל על האמא </h2>
              <ul>
                <li>
                  כל יולדת זכאית להשתתפות בתשלום לשמרטפית למספר שעות בחודשיים
                  שלאחר הלידה.
                </li>
                <li>
                  היולדת תיצור קשר עם שמרטפית המוכרת לילדיה ותזמין אותה לסייע
                  ולשמור על הילדים הבוגרים של הרך הנולד, כדי לאפשר לאם מנוחה
                  והקלה.{" "}
                </li>
              </ul>
            </div>
          </div>
          <button className="button1"> לקראת לידה? לרישום - לחצי כאן </button>
          <div className="images-container">
            <Image
              src="/assets/image10.jpg"
              alt="image"
              className="images"
              width={535}
              height={450}
            />
          </div>
          <button className="button2">בחזרה לתפריט הפעילויות שלנו</button>
        </div>
      </div>
      {/* tabs */}
      <div className="tabs">
        <ul>
          <li
            onClick={() => handleTabClick(0)}
            className={activeTab === 0 ? "active" : ""}
          >
            ארוחות בוקר
          </li>
          <li
            onClick={() => handleTabClick(1)}
            className={activeTab === 1 ? "active" : ""}
          >
            בית החלמה
          </li>
          <li
            onClick={() => handleTabClick(2)}
            className={activeTab === 2 ? "active" : ""}
          >
            סעודת שבת{" "}
          </li>
          <li
            onClick={() => handleTabClick(3)}
            className={activeTab === 3 ? "active" : ""}
          >
            גמ״ח
          </li>
          <li
            onClick={() => handleTabClick(4)}
            className={activeTab === 4 ? "active" : ""}
          >
            עזרה בניקיון
          </li>
          <li
            onClick={() => handleTabClick(5)}
            className={activeTab === 5 ? "active" : ""}
          >
            אוזן קשבת
          </li>
          <li
            onClick={() => handleTabClick(6)}
            className={activeTab === 6 ? "active" : ""}
          >
            שמרטפות
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServicesMotherContent;
