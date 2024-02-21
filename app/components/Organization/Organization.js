import React from 'react'
import './organization.css'
import Image from 'next/image';
import  Link from 'next/link';

const Organization = () => {
  return (
    <div className='organization-container'>
    <div className='organization-content'>
        <div className='org-img-container'> 
            <Image src='/assets/organization.jpg' alt='Image' height={300} width={300} className='org-image'/>
        </div>
        <div className='org-content-container'>
            <h2>ארגון שפרה ופועה רחובות - למען היולדת</h2>
            <p>במשך השנים נשים רבות נרתמו לארגון שפרה ופועה שהקים כ"ק נשיא דורינו הרבי מליובאויטש ביום הכיפורים תשל"ז. שם הארגון "שפרה ופועה" על שם המילדות העבריות (יוכבד ומרים) שבזכות עקשנותן העמידו דור ישרים על אף הקושי של השעבוד. שפרה ופועה ברחובות הוקם לסייע ליולדות ל</p>
            <Link href='/' className='readmore' >קראו עוד</Link>
       </div>
    </div>
    </div>
  )
}

export default Organization