"use client";
import React, { useState } from "react";
import { ActivityStreets } from "../components/ActivityStreets/ActivityStreets";
import ExcitingEveryTime from "../components/ExcitingEveryTime/ExcitingEveryTime";
import "./ohelhaya.css";
import Image from "next/image";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "שיעורי תורה",
    answer:
      "למעלה מ-30 שיעורי תורה שבועיים פעילים ברחבי העיר לטובת ציבור החבדי והכללי בפרשת שבוע, הלכות, חסידות, וכו'. ומשתתפות בהם בסה\"כ מאות נשים כן ירבו.",
  },
  {
    question: "נש ק",
    answer:
      "מבצע שבו מחולקות ערכות של נרות שבת לציבור הנשים בעיר, בעיקר בימי חמישי ושישי בשבוע. אלפי ערכות שנשים מתנדבות יושבות ואורזות מדי שבוע. הן מחולקות בעיר, בגנים, בבתי אבות, בקפלן, ובעמדות שונות של מרכזי קניות וכו'.      ",
  },
  {
    question: "ביקורי בית",
    answer:
      " צוות של ארבע זוגות בממוצע בשבוע יוצאות לביקורי בית שבאמתחתן ערכות לבית היהודי. חומרי הסברה, וספרונים לילדים. הפעילות חולשת על כל  העיר לפי שכונות, רחובות, ומעבר מבית לבית.      ",
  },
  {
    question: "התוועדויות",
    answer:
      "מדי חודש מתקיימות התוועדויות קהילתיות וכלליות, בהן מתכנסות נשים לכבוד תאריכים מיוחדים וחגים סביב שולחנות ערוכים או כיבוד קל. באים מרצים מכל מיני מקומות להעשיר את המשתתפות בידע ובחוויה.    ",
  },
  {
    question: "מלווה מלכה",
    answer:
      "בחודשי חורף מדי מברכים החודש אנו מקיימות סעודת מלווה מלכה המלווה בניגונים והרצאה בהשתתפותן של למעלה מ-150 נשים כשלעומת זאת בשבתות קיץ ישנו שיעור פרקי אבות שעובר בין בתים ובו משתתפות למעלה מ-70 נשים.    ",
  },
  {
    question: "ערבי חינוך",
    answer:
      "פעם בחודש מתקיים ערב חינוך להורים בו מדבר רב הקהילה ועוד מרצה אורח, בנושאי חינוך, זוגיות ומשפחה.    ",
  },
  {
    question: "בנות חב ד",
    answer:
      "בקהילה למעלה מ-200 בנות שלהן פעילות כללית ושותפת של ערבים מיוחדים, שבתונים ויציאה למבצעים.    ",
  },
  {
    question: "ועדת ביקור חולים",
    answer:
      "ועדה שאחראית שבכל מקרה של בעיות בריאות חריגות, אישפוזים, וכו'. המשפחה תטופל, ותקבל ארוחות מסודרות, עזרה בניקיון, טיפול בילדים וכו'.    ",
  },
  {
    question: "שפרה ופועה",
    answer:
      " מדי שנה אנו עורכות דינר שנתי שכולו קדש למען היולדת. אנו צוות שלמעלה מ-60 מתנדבות התורם מעצמו ללא גבול למען היולדות המונות כ-150 בשנה כן ירבו. היולדת מקבלת שי מכובד לאם ולילוד, בייביסיטר, ניקיון, ארוחות שבת, יום החלמה, וארוחות בקר למשך שבוע ם.    ",
  },
];

const OhelHaya = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div>
      <section className="ohelhaya-container">
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
          <h3> אוהל חיה - רחובות</h3>
        </div>
      </section>
      <div className="ohelhayacontent-container">
        <p className="title">
          ארגון נשי חב"ד נוסד לפני 70 שנה בראשותו של הרבי מליובאויטש. ברחובות
          הוא פועל למעלה מ- 40 שנה. הפעילות מקיפה כר נרחב של עשיה למען ציבור
          הנשים בעיר. בקהילתנו למעלה מ- 800 משפחות ופעילות גדולה המקיפה את כל
          שכבות הגיל.
        </p>
        <div className="ohelhaya-content">
          <div className="image-ohelhaya">
            <Image
              src="/assets/ohel-chaya.jpg"
              alt="Image"
              width={350}
              height={280}
              className="ohelhaya"
            />
          </div>
          <div className="faq-content">
            <h2>:פעילויות אוהל חיה ברחובות </h2>
            {faqData.map((item, index) => (
              <div className="faq-container" key={index}>
                <h1
                  className="headingfaq"
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{item.question}</span>
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </h1>
                {activeIndex === index && (
                  <p className="decs-faq">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <ExcitingEveryTime />
      <ActivityStreets />
    </div>
  );
};

export default OhelHaya;
