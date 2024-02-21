import React from 'react'
import './sheprapuavol.css'
import Image from 'next/image';

const ShepraPuaVolCompo = () => {
  return (
    <div className='sheprapuavolcompo-container'>
      <div className='sheprapuavolcompo-img'>
        <Image src='/assets/sheprapuavol.jpg' alt='Image' width={300} height={800} />
      </div>
      <div className='sheprapuavolcompo-content'>
        <h2 >ארגון שפרה ופועה <strong> קורא לך</strong></h2>
        <p>לארגון כ-100 מתנדבות מסורות ונאמנות בגילאים שונים בזכותן ובזכות התרומות הכספיות הארגון פועל. חלק מהמתנדבות באופן קבוע וחלק לפי נוחיותן. ערבי העצמה והוקרה למתנדבות מתקיימים בין פעם לפעמיים בשנה. המתנדבות לוקחות חלק בבישול, בהסעת הארוחות ליולדות, בליווי הנהגות, באריזת המתנות, בריכוז תחומי הסיוע השונים של הארגון ועוד.. הארגון גדל ומתפתח ויש מקום לעוד מתנדבות בתחומים שונים.</p>
      </div>
    </div>
  )
}

export default ShepraPuaVolCompo;