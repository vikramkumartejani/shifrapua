"use client";
import React, { useState } from "react";
import "./aboutcontent.css";
import Image from "next/image";
import { MdArrowBackIos } from "react-icons/md";

const AboutContent = () => {
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);

  const handleClick1 = () => {
    setShowMore1(!showMore1);
  };

  const handleClick2 = () => {
    setShowMore2(!showMore2);
  };
  const handleClick3 = () => {
    setShowMore3(!showMore3);
  };

  return (
    <div className="aboutcontent-container">
      <div className="aboutcontent-boxes">
        <div className="aboutcontent-box">
          <div className="imageabout">
            <Image
              src="/assets/aboutcontent1.jpg"
              alt="Image"
              height={350}
              width={380}
            />
          </div>
          <div className="box-content">
            <h3>
              <strong>אודות –</strong> שפרה ופועה למען היולדות ברחובות
            </h3>
            <p>
              במשך השנים נשים רבות נרתמו לארגון שפרה ופועה שהקים כ"ק נשיא דורינו
              הרבי מליובאויטש ביום הכיפורים תשל"ז. שם הארגון "שפרה ופועה" על שם
              המילדות העבריות (יוכבד ומרים) שבזכות עקשנותן העמידו דור ישרים על
              אף הקושי של השעבוד. שפרה ופועה ברחובות הוקם לסייע ליולדות להתאושש
              מהלידה ולהיטב עם היולדות בתקופה המאתגרת שבסמוך ללידה. כשהיולדת
              מקבלת את העזרה המתאימה היא יכולה למלא תפקידה כאמא שמחה ורגועה יותר
              אשר משרה אוירה רגועה בביתה.
            </p>
            {showMore1 && (
              <>
                <p>
                  ברחובות הארגון פועל למעלה מ-40 שנה, הארגון מתחדש וגדל בכמות
                  ואיכות לפי הצרכים המשתנים של היולדות.(בשנים האחרונות גדלו מספר
                  הלידות ואיתם מערך הפעילות) לאחרונה הארגון תומך בכ-200 יולדות
                  בשנה. השנה נערך סקר גדול ומקיף בקרב יולדות במטרה לתת מענה
                  מדוייק ליולדת ומשפחתה. לאור הסקר נוספו שירותים אטרקטיביים
                  נוספים ובקרוב יתווספו שירותים נוספים.
                </p>
                <p>
                  לארגון כ-100 מתנדבות מסורות ונאמנות בגילאים שונים בזכותן
                  הארגון פועל. חלק מהמתנדבות באופן קבוע וחלק לפי נוחיותן. ערבי
                  העצמה והוקרה למתנדבות מתקיימים בין פעם לפעמיים בשנה.
                </p>
              </>
            )}
            {showMore1 ? (
              <div className="readmore-btn">
                <button onClick={handleClick1}>קראו פחות</button>
              </div>
            ) : (
              <div className="readmore-btn">
                <button onClick={handleClick1}>קראו עוד</button>
              </div>
            )}
          </div>
        </div>

        <div className="aboutcontent-box">
          <div className="box-content">
            <h3>
              <strong>כבר 42 שנה</strong> שפרה ופועה
            </h3>
            <p>
              בארגון שפרה ופועה הוקם על ידי הרבי בעיצומו של יום הכיפורים, לפני
              42 שנה. מאז ועד היום הוקמו עשרות ואף מאות סניפים של הארגון, שמטרתו
              היא מתן עזרה וסיוע ליולדת. גם אצלינו ברחובות זכינו, ולפני שנים
              רבות הקמנו את ארגון שפרה ופועה למען היולדת בקהילה. הפעילות שלנו
              כוללת מתן ארוחות מזינות יומיות עד לפתח ביתה של היולדת, הטבות
              ייחודיות משתנות, שירותי נקיון ומתן סיוע כספי לטובת שעות שמרטפות
              שיקלו על היולדת ויתנו לה מעט שעות מנוחה שהיא כל כך זקוקה להם.
            </p>
            {showMore2 && (
              <>
                <p>
                  בכל זה מתקיים הודות לעשרות המתנדבות ותורמים רבים רחבי לב.
                  השותפות בארגון היא זכות גדולה, שכן היא מעודדת את רוחה של
                  היולדת ומשפיעה רבות על עידוד הילודה.
                </p>
                <p>
                  אני מודה ומברכת כל אחד ואחת הלוקחים חלק במפעל המבורך הזה,
                  ובעזרת ה' יזכו לרב ברכות בבני, חיי ומזוני, והכל ברוויחי.
                </p>
                <p>הרבנית גלוכובסקי</p>
              </>
            )}
            {showMore2 ? (
              <div className="readmore-btn">
                <button onClick={handleClick2}>קראו פחות</button>
              </div>
            ) : (
              <div className="readmore-btn">
                <button onClick={handleClick2}>קראו עוד</button>
              </div>
            )}
          </div>
          <div className="imageabout">
            <Image
              src="/assets/aboutcontent2.jpg"
              alt="Image"
              height={350}
              width={380}
            />
          </div>
        </div>

        <div className="aboutcontent-box">
          <div className="imageabout">
            <Image
              src="/assets/aboutcontent3.jpg"
              alt="Image"
              height={350}
              width={380}
            />
          </div>
          <div className="box-content">
            <h3>
              <strong> דבר יו"ר הארגון</strong> דבר
            </h3>
            <p>
              בהגמרא במסכת יבמות אומרת: "אין בן דוד בא עד שיכלו כל נשמות שבגוף".
              ביום כיפור התשל"ז ייסד הרבי מליובאוויטש את הארגון למען היולדת,
              ונתן לו את השם "שפרה ופועה".
              <br /> ארגון שמטרתו ללוות, לתמוך, ולהקל על היולדת בימיה הראשונים
              לאחר השיבה מבית היולדות,ע"י ימי החלמה, עזרה בשמרטפיות,
            </p>

            {showMore3 && (
              <>
                <p>
                  ניקיון, ארוחות בקר, מתנה לתינוק, ותמיכה כללית.
                  <br />
                  בזכות תרומתכם נוכל להרחיב את פעולותינו הברוכות לעידוד הילודה
                  שהיא המסירות נפש שלנו מאז גאולת מצרים,
                  <br />
                  שכידוע מדברי הרבי שנשות ישראל שהביאו לגאולה הראשונה הרי הן ,
                  "אנו", "כל אחת מאיתנו", המובילות לגאולה
                  <br />
                  השלימה עכשיו ממש נאו.
                  <br />
                  ……."ובכללות-ע"י ההנהגה באופן האמור, זוכים להמשכת ברכותיו של
                  הקב"ה באופן של פריצת גדר, ועד שזוכים לפריצת גדרי הגלות כדאיתא
                  בגמרא שכאשר יכלו כל הנשמות שבגוף אזי "בן דוד בא".(משיחת אחרון
                  של פסח התשד"מ).
                </p>
                <p style={{ fontWeight: "bolder" }}>
                  בברכת כפליים לתושיה
                  <br />
                  רות מיפעי
                  <br />
                  יו"ר ארגון נשי ובנות חב"ד רחובות
                </p>
              </>
            )}
            {showMore3 ? (
              <div className="readmore-btn">
                <button onClick={handleClick3}>קראו פחות</button>
              </div>
            ) : (
              <div className="readmore-btn">
                <button onClick={handleClick3}>קראו עוד</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
