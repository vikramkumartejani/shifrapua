'use client'
import React, { useState }  from "react";
import "./excitingeverytime.css";

const ExcitingEveryTime = () => {
    const [hoveredBox, setHoveredBox] = useState(null);

  const handleMouseEnter = (boxNumber) => {
    setHoveredBox(boxNumber);
  };

  const handleMouseLeave = () => {
    setHoveredBox(null);
  };
  return (
    <div className="excitingeverytime-container">
      <h2> :נושאים נוספים שיכולים לעניין אותך</h2>
      <div className="excitingeverytime-boxes">
      <a 
        className={`excitingeverytime-box1 excitingeverytime-box ${hoveredBox === 1 ? 'hovered' : ''}`}
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="overlay"></div>
        <div className="content">
          <p>השירות ליולדת</p>
          {hoveredBox === 1 && <h6>למעבר לעמוד - לחצו כאן</h6>}
        </div>
      </a>
      <a
        className={`excitingeverytime-box2 excitingeverytime-box ${hoveredBox === 2 ? 'hovered' : ''}`}
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="overlay"></div>
        <div className="content">
          <p>השירות ליולדת</p>
          {hoveredBox === 2 && <h6>למעבר לעמוד - לחצו כאן</h6>}
        </div>
      </a>
      <a href="/thanks"
        className={`excitingeverytime-box3 excitingeverytime-box ${hoveredBox === 3 ? 'hovered' : ''}`}
        onMouseEnter={() => handleMouseEnter(3)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="overlay"></div>
        <div className="content">
          <p>השירות ליולדת</p>
          {hoveredBox === 3 && <h6>למעבר לעמוד - לחצו כאן</h6>}
        </div>
      </a>
      <a
        className={`excitingeverytime-box4 excitingeverytime-box ${hoveredBox === 4 ? 'hovered' : ''}`}
        onMouseEnter={() => handleMouseEnter(4)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="overlay"></div>
        <div className="content">
          <p>השירות ליולדת</p>
          {hoveredBox === 4 && <h6>למעבר לעמוד - לחצו כאן</h6>}
        </div>
      </a>
    </div>
    </div>
  );
};

export default ExcitingEveryTime;
