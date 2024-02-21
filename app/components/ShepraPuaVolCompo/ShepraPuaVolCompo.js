import React from "react";
import "./sheprapuavol.css";
import Image from "next/image";

const ShepraPuaVolCompo = () => {
  return (
    <div className="sheprapuavolcompo-container">
      <div className="sheprapuavolcompo-img">
        <Image
          src="/assets/sheprapuavol.jpg"
          alt="Image"
          width={300}
          height={800}
        />
      </div>
      <div className="sheprapuavolcompo-content">
        <h2>
          ארגון שפרה ופועה <strong> קורא לך</strong>
        </h2>
        <p>
          לארגון כ-100 מתנדבות מסורות ונאמנות בגילאים שונים בזכותן ובזכות
          התרומות הכספיות הארגון פועל. חלק מהמתנדבות באופן קבוע וחלק לפי
          נוחיותן. ערבי העצמה והוקרה למתנדבות מתקיימים בין פעם לפעמיים בשנה.
          המתנדבות לוקחות חלק בבישול, בהסעת הארוחות ליולדות, בליווי הנהגות,
          באריזת המתנות, בריכוז תחומי הסיוע השונים של הארגון ועוד.. הארגון גדל
          ומתפתח ויש מקום לעוד מתנדבות בתחומים שונים.
        </p>
        <form action="">
          <input type="text" placeholder="שם" />
          <input
            type="email"
            placeholder="מספר טלפון"
            style={{ textAlign: "left" }}
          />
          <select>
            <option value="תחום התנדבות (בחרי)">תחום התנדבות (בחרי)</option>
            <option value="נהגת">נהגת</option>
            <option value="מבשלת">מבשלת</option>
            <option value="מלווה">מלווה</option>
            <option value="ריכוז תחום">ריכוז תחום</option>
            <option value="יוזמה עצמאית למען יולדות">
              יוזמה עצמאית למען יולדות
            </option>
            <option value="דברו איתי על זה">דברו איתי על זה</option>{" "}
          </select>
          <textarea rows="4" placeholder="הודעה"></textarea>

          <button>אני רוצה להתנדב</button>
        </form>
      </div>
    </div>
  );
};

export default ShepraPuaVolCompo;
