"use client";
import React, { useState } from "react";
import "./choosearoute.css";
import { TiHeartFullOutline } from "react-icons/ti";


const ChooseRoute = () => {
  const [activeTab, setActiveTab] = useState(3);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="chooseroute-container">
      <h4 className="">בחרו מסלול:</h4>
      {/* tabs */}
      <div className="donation-tabs">
      <div className={`donation-tab   ${activeTab === 1 ? 'active1' : ''}`}>
                <button className='tab-btn' onClick={() => handleTabClick(1)}>מסלול כסף</button>
            </div>
            <div className={`donation-tab ${activeTab === 2 ? 'active2' : ''}`}>
                <button className='tab-btn' onClick={() => handleTabClick(2)}>מסלול יהלום</button>
            </div>
            <div className={`donation-tab ${activeTab === 3 ? 'active3' : ''}`}>
                <button className='tab-btn' onClick={() => handleTabClick(3)}>מסלול זהב</button>
            </div>
      </div>
      {/* different tab content */}
      <div className="tabs-content-container">
        {activeTab === 1 && (
          <div  className="tab-content-container">
            <div className="tab-content-container1">
              <h3>מסלול כסף:</h3>
              <h1>100 ש״ח לחודש</h1>
               <p>ל-12 חודשים</p>
            </div>
            <div className="bottom-content">
              <h3>מקבלת במתנה:</h3>
              <p>כף כסף לעוגה</p>
 			<span class="line"></span>
             <a href="/donation" className="donation-form-link"><TiHeartFullOutline className="heart-icon" />לבחירה במסלול זה - לחצו כאן</a>
            </div>
          </div>
        )}
        {activeTab === 2 && (
            <div  className="tab-content-container">
            <div className="tab-content-container2">
              <h3>מסלול יהלום:</h3>
              <h1>260 ש״ח לחודש</h1>
               <p>ל-12 חודשים</p>
            </div>
            <div className="bottom-content">
              <h3>מקבלת במתנה:</h3>
              <p>כלי מכסף לבשמים</p>
 			<span class="line"></span>
             <a href="/donation" className="donation-form-link"><TiHeartFullOutline className="heart-icon" />לבחירה במסלול זה - לחצו כאן</a>
            </div>
          </div>
        )}
        {activeTab === 3 && (
            <div  className="tab-content-container">
            <div className="tab-content-container3">
              <h3>מסלול זהב:</h3>
              <h1>180 ש״ח לחודש</h1>
               <p>ל-12 חודשים</p>
            </div>
            <div className="bottom-content">
              <h3>מקבלת במתנה:</h3>
              <p>סיר מעוצב של ׳נעמן׳</p>
 			<span class="line"></span>
             <a href="/donation" className="donation-form-link"><TiHeartFullOutline className="heart-icon" />לבחירה במסלול זה - לחצו כאן</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChooseRoute;
