"use client";
import React, { useState } from "react";
import "./ourvolunteers.css";
import { ActivityStreets } from "../components/ActivityStreets/ActivityStreets";
import ExcitingEveryTime from "../components/ExcitingEveryTime/ExcitingEveryTime";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

const OurVolunteers = () => {
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);

  const handleClick1 = () => {
    setShowMore1(!showMore1);
  };

  const handleClick2 = () => {
    setShowMore2(!showMore2);
  };

  const sliderData = [
    { name: "אורלי טויטו    " },
    { name: "אורלי לוי" },
    { name: "אירס רוזנפלד " },
    { name: "אליטל הרמ " },
    { name: "אסנת לנצנר" },
    { name: "אסתר שפרלינג    " },
    { name: "בת חיל שמש    " },
    { name: "בת חן אהרון    " },
    { name: "בתיה קסטל     " },
    { name: "בתיה קפלן    " },
    { name: "  גלי גבאי    " },
    { name: "גליה אשרוב    " },
    { name: "דינה אהרון  " },
    { name: "הרבנית גלוכובסקי " },
  ];
  return (
    <div>
      <section className="ourvolunteers-container">
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
      <div className="ourvolunteers-content-container">
        <h2>אנו מזמינים אתכם להכיר את המתנדבות של שפרה ופועה ברחובות</h2>

        <div className="sliders-container">
          <h2>הכרת הטוב (המתנדבות שלנו) </h2>
          <div className="slider-content">
            <div className="slider-wrapper">
              {sliderData.map((item, index) => (
                <div key={index} className="slider-item">
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="donation-link-page">
          <Link href="/sheprapuavol" className="link-dontaion-page">
            רוצה להיות מתנדבת? לחצי כאן
          </Link>
        </div>
        <div className="volunteers-boxes">
          <div className="volunteers-box">
            <div className="">
              <Image
                src="/assets/ourvolunteers1.jpg"
                alt="Image"
                className="image-child"
                width={500}
                height={429}
              />
            </div>
            <div className="box-content">
              <h5>הכירו את המתנדבת:</h5>
              <h3>אורנית ביטקין</h3>
              <div className="lines">
                <span className="line"></span>
              </div>
              <h2>ב"ה זכיתי להכנס לארגון שפרה ופועה לפני כ10 שנים, </h2>
              <p className="marginB">
                רות בן שמש עיניינה אותי בהתרגשות בפרוייקט החדש שעומד על הפרק-
                "ארוחות בוקר ליולדות" וניכנסתי כאחת המבשלות הראשונות. הכנתי
                ארוחות בוקר במשך כ 4-5 שנים (עם חופשות לידה מידי פעם ב"ה).
              </p>
              {showMore1 && (
                <>
                  <p className="marginB">
                    {" "}
                    היום אני מנהלת את תחום ארוחות הבוקר יחד עם רבקה לוין, אני
                    רואה את החלק שלי בארגון כזכות גדולה מאוד שנפלה עלי מכמה
                    הבטים:{" "}
                  </p>
                  <p className="marginB">
                    {" "}
                    זכות ליהיות חלק ממפעל של הרבי' ומפעל כזה שהרבי' ייחס לו כזו
                    חשיבות רבה!{" "}
                  </p>
                  <p className="marginB">
                    {" "}
                    זכות להמשיך את מעשה אדמוה"ז בדאגה ליולדות ונתינת כוח
                    להתאוששות מהירה יותר וחזרה לשליחות המרכזית – גידול ילדים.{" "}
                  </p>
                  <p className="marginB">
                    {" "}
                    זכות שאני שייכת לארגון שמתעסק בטוב הנראה והניגלה ממש –
                    יולדות, תינוקות רכים.{" "}
                  </p>
                </>
              )}
              {showMore1 ? (
                <div className="readmore-btn">
                  <button onClick={handleClick1}>קראו עוד </button>
                </div>
              ) : (
                <div className="readmore-btn">
                  <button onClick={handleClick1}>קראו עוד </button>
                </div>
              )}
            </div>
          </div>
          <div className="volunteers-box">
            <div className="box-content">
              <h5>הכירו את המתנדבת:</h5>
              <h3 className="paraghra">רבקה לוין</h3>
              <div className="lines">
                <span className="line"></span>
              </div>
              <p>
                לארגון 'שפרה ופועה' הגעתי בהשגחה פרטית, אחראיות הארגון חיפשו
                מתנדבת להכנת ארוחת בוקר ליולדות ואני התנדבתי ונהנתי מעצם העשייה
                ומהרגשת הסיפוק מההתנדבות.{" "}
              </p>
              <p>
                בהמשך פנו אלי שוב לתרום מזמני ולהתנדב רציתי מאוד אך לא הסתדר.
                לאחר מס' פניות לצרפני למעגל המתנדבות והרגשה לא נעימה שלי, חשבתי
                לעצמי איך אוכל להתנדב בצורה המתאימה עבורי.{" "}
              </p>
              {showMore2 && (
                <>
                  <p>
                    באותו זמן עבדתי בגני חב"ד נס ציונה ואחד התחומים שעליהם הייתי
                    אחראית היה לדאוג למילוי מקום לצוות הגננות והסייעות. תחום
                    דומה ישנו בארגון ארוחות הבוקר של 'שפרה ופועה' .. למצוא
                    מבשלות/ נוהגות/ מחליפות. הצעתי את עצמי לעזור בתחום זה.{" "}
                  </p>
                  <p>
                    בהשגחה פרטית מופלאה באותו הזמן אחת האחראיות (רות בן שמש)
                    עברה לעיר אחרת. היא פנתה אלי בהצעה להחליף – קיבלתי את ההצעה
                    בשמחה.{" "}
                  </p>
                  <p>
                    מאז אני בארגון מנהלת מידי יום את תחום ארוחות הבוקר ליולדות
                    יחד עם אורנית ביטקין האחראית והמסורה (חוץ מחופשות הלידה 😉
                    בהן אני מקבלת חזרה).
                  </p>
                  <p>
                    זו זכות גדולה בעבורי לקחת חלק בארגון שהאדמור הזקן הקים והרבי
                    ייסד, ארגון שפועל בכל עיר ובכל העולם ודואג לרווחת היולדת.{" "}
                  </p>
                  <p>
                    אני רואה את ההתנדבות הזו כשליחות של הרבי ממש ושואבת ממנה
                    הרבה כוח, סיפוק ושמחה.{" "}
                  </p>
                  <p className="marginB">
                    להיות שליחה של הרבי זו זכות ובארגון 'שפרה ופועה' הזכות גדולה
                    עוד יותר. והזכייה היא שלי!!!
                  </p>
                </>
              )}
              {showMore2 ? (
                <div className="readmore-btn">
                  <button onClick={handleClick2}>קראו עוד </button>
                </div>
              ) : (
                <div className="readmore-btn">
                  <button onClick={handleClick2}>קראו עוד </button>
                </div>
              )}
            </div>
            <Image
              src="/assets/ourvolunteers.jpg"
              alt="Image"
              className="image-child"
              width={500}
              height={429}
            />
          </div>
        </div>
      </div>
      <ExcitingEveryTime />
      <ActivityStreets />
    </div>
  );
};

export default OurVolunteers;
