'use client'
import React, { useState, useEffect } from "react";
import "./activitystreets.css";
import Link from "next/link";
import { TiHeartFullOutline } from "react-icons/ti";

// CounterBox component for counter animation
const CounterBox = ({ initialValue, label, intervalDuration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => {
        const increment = Math.floor(Math.random() * 10) + 1;
        const newCount = prevCount + increment;
        return newCount < initialValue ? newCount : initialValue;
      });
    }, intervalDuration); // Use the interval duration from props

    return () => clearInterval(interval);
  }, [initialValue, intervalDuration]);

  return (
    <div className="elements-box">
      <h3>{count.toLocaleString('en-US')}</h3>
      <p>{label}</p>
    </div>
  );
};

export const ActivityStreets = () => {
  return (
    <div className="activitystreets-container">
      <div>
        <div className="elementor-shape elementor-shape-top1" data-negative="false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path
              className="elementor-shape-fill"
              d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
              c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
              c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
            ></path>
          </svg>{" "}
        </div>
      </div>
      <div className="activity-content">
        <h2>פעילות ׳שפרה ופועה׳ ברחובות בשנה החולפת:</h2>
        <div className="elements-boxes">
           <CounterBox initialValue={87} label="מתנדבות" intervalDuration={100} />
          <CounterBox initialValue={5340} label="ארוחות חולקו" intervalDuration={1} />
          <CounterBox initialValue={2423} label="שעות התנדבות" intervalDuration={1} />
          <CounterBox initialValue={178} label="יולדות בשנה" intervalDuration={80} />
        </div>

        <h3 className="elementor-headline">
          אנו מזמינים אתכם
          <span className="logo-take-part">
            <span className="take-part"> לקחת חלק </span>
          </span>
          בפעילות שלנו
        </h3>

        <div className="pages-links">
          <Link href="/donation" className="link-one">
            <TiHeartFullOutline />
            לתרומה - לחצי כאן{" "}
          </Link>
          <Link href="/sheprapuavol" className="link-two">
            <TiHeartFullOutline />
            התנדבות - לחצי כאן
          </Link>
        </div>
      </div>
    </div>
  );
};
