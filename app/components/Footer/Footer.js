import React from "react";
import "./footer.css";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#222222", width: "100%" }}>
      <div className="footer-container">
        <div className="whatsapp-container">
          <FaWhatsapp className="whatsapp-icon" />
        </div>
        <div>
          <Link href="/" className="footer-link">
            <p>עיצוב ובניית האתר: מאסטר סייט, יצירת נוכחות באינטרנט</p>
          </Link>
        </div>  
      </div>
    </div>
  );
};

export default Footer;
