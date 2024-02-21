import React from "react";
import "./goldenpathform.css";

const GoldenPathForm = () => {
  return (
    <div className="goldenpathform-container">
      <div className="goldenpathform-content">
        <div className="additional-donation-optional">
          <h2>אפשרויות תרומה נוספות:</h2>
          <div className="additional-donation-boxes">
            <div className="additional-donation-box">
              <h2>בכרטיס אשראי - בטלפון</h2>
              <p>ניתן להתקשר גם לבירורים</p>
              <p className="para">לחנה לבל: 052-7707131</p>
              <a href="">להשארת פרטים</a>
            </div>
            <div className="additional-donation-box">
              <h2>מזומן / שיק:</h2>
              <p>ניתן לתאם עם</p>
              <p className="para">נחמה שחר 054-6638770</p>
              <a href="">להשארת פרטים</a>
            </div>
            <div className="additional-donation-box">
              <h2>העברה בנקאית</h2>
              <p>לחשבון - בנק פאגי 52</p>
              <p>סניף 174</p>
              <p>חשבון 034266</p>
              <p>לפקודת "אוהל חיה"</p>
              <h6>
                (יש לשמור צילום מסך של ההעברה ולהעביר בואטסאפ ל-0509525255)
              </h6>
            </div>
          </div>
        </div>
        <div className="credit-card-donation">
          <h2>תרומה בכרטיס אשראי:</h2>
          <p>סה״כ: 100 ש״ח ל-12 חודשים</p>
          {/* Personal Information */}
          <h3>פרטים אישיים</h3>
          <div className="personal-info">
            <div className="personal-input">
              <label>טלפון</label>
              <input type="text" />
            </div>
            <div className="personal-input">
              <label>שם מלא</label>
              <input type="text" />
            </div>
          </div>
          {/* Methods of Payment */}
          <h3>אמצעי תשלום</h3>
          <div className="personal-info">
            <div className="personal-input">
              <label>מספר זהות</label>
              <input type="text" />
            </div>
            <div className="personal-input">
              <label>שם מחזיק הכרטיס</label>
              <input type="text" />
            </div>
          </div>

          <div className="personal-info payment">
            <div className="personal-input">
              <label>מספר כרטיס</label>
              <input type="text" />
            </div>
            <div className="personal-input">
              <label>סוג כרטיס</label>
              <select id="dropdown">
                <option value="">בחרו סוג כרטיס</option>
                <option value="option1">ויזה</option>
                <option value="option2">ישראכרט</option>
                <option value="option3">מאסטר-קארד</option>
                <option value="option4">אמריקן אקספרס</option>
              </select>
            </div>
          </div>

          <div className="personal-info payment">
            <div className="personal-input">
              <label>תוקף - שנה</label>
              <select id="dropdown">
                <option value=""> בחרו שנה</option>
                <option value="option1">2018</option>
                <option value="option2">2019</option>
                <option value="option3">2020</option>
                <option value="option4">2021</option>
                <option value="option5">2022</option>
              </select>
            </div>
            <div className="personal-input">
              <label> תוקף - חודש</label>
              <select id="dropdown">
                <option value="">בחרו חודש</option>
                <option value="option1">01</option>
                <option value="option2">02</option>
                <option value="option3">03</option>
                <option value="option4">04</option>
                <option value="option5">05</option>
                <option value="option6">06</option>
              </select>
            </div>
          </div>

          <div className="personal-info payment">
            <div className="personal-input">
              <label>דוא״ל למשלוח החשבונית</label>
              <input type="text" />
            </div>
            <div className="personal-input">
              <label>קוד ביטחון</label>
              <input
                type="number"
                placeholder="שלוש ספרות מאחור בגב הכרטיס"
                required
                min=""
                max=""
              />
            </div>
          </div>

          <div className="personal-info payment">
          <div className="personal-input">
            <label>הערות</label>
            <textarea rows="4"></textarea>
          </div>
          </div>
          
          <button>אני רוצה לקחת חלק</button>
        </div>
      </div>
    </div>
  );
};

export default GoldenPathForm;
