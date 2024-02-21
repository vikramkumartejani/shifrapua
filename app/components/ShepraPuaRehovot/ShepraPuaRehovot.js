import React from "react";
import "./sheprapuarehovot.css";
import Image from "next/image";
import Link from "next/link";
import { RiDoubleQuotesL } from "react-icons/ri";

const ShepraPuaRehovot = () => {
  return (
    <>
      {/* הכירו את שפרה ופועה רחובות */}
      <section className="sheprapuarehovot-container">
        <h2 className="heading-sheprapuarehovot">הכירו את שפרה ופועה רחובות</h2>
        <div className="boxes-container">
          <div className="box-container">
            <Image
              src="/assets/sheprapuarehovotImage.png"
              alt="Logo"
              width={99}
              height={110}
            />
            <h3>ארגון האם: אוהל חיה</h3>
            <p>
              ארגון ׳שפרה ופועה׳ ברחובות קם מתוך ארגון ׳אוהל חיה׳ - נשות חב״ד
              רחובות. ארגון האם עוסק בפעילויות מבורכות רבות, החל משיעורי תורה
              והתוועדויות ועד ועדת ביקור חולים.
            </p>
            <Link href="/" className="link-page">
              קראו עוד
            </Link>
          </div>
          <div className="box-container">
            <Image
              src="/assets/sheprapuarehovotImage.png"
              alt="Logo"
              width={99}
              height={110}
            />
            <h3>87 מתנדבות מסביב לשעון </h3>
            <p>
              המתנדבות מגיעות מתוך הקהילה. הן מכינות אוכל, מסיעות אותו, מגייסות
              תרומות וממש מעניקות את הלב והנשמה. אנו מזמינות אתכם להכיר אותן.
            </p>
            <Link href="/" className="link-page">
              קראו עוד
            </Link>
          </div>
          <div className="box-container">
            <Image
              src="/assets/sheprapuarehovotImage.png"
              alt="Logo"
              width={99}
              height={110}
            />
            <h3>שירות מלא אהבה ליולדת</h3>
            <p>
              ארוחות בוקר וצהריים, סעודות שבת, סיוע בבית עם הילדים כולל שירות
              בייביסיטר, אוזן קשבת, משחקייה ועוד! אנחנו כאן בשביל היולדות.
            </p>
            <Link href="/" className="link-page">
              קראו עוד
            </Link>
          </div>
        </div>
      </section>
      {/* אין בן דוד בא עד שיכלו כל נשמות שבגוף */}
      <section className="sheprapuarehovot-container2">
        <div className="overlay-container"></div>
        <div class="elementor-shape elementor-shape-top" data-negative="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path
              class="elementor-shape-fill"
              fill="white"
              d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
	c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
	c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"
            ></path>
          </svg>
        </div>
        <div
          class="elementor-shape elementor-shape-bottom"
          data-negative="false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path
              class="elementor-shape-fill" fill="white"
              d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
            ></path>
          </svg> 
        </div>
        <div className="content-sheprapuarehovot">
          <h3>
            <RiDoubleQuotesL style={{ color: "#e6e9ec" }} />
          </h3>
          <p>"אין בן דוד בא עד שיכלו כל נשמות שבגוף"</p>
          <h4>מסכת יבמות</h4>
        </div>
      </section>
    </>
  );
};

export default ShepraPuaRehovot;
