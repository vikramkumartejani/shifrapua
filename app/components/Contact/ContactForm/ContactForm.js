import React from "react";
import "./contactform.css";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillPencilFill } from "react-icons/bs";





const ContactForm = () => {
  return (
    <div className="contactform-container">
      <div className="form-boxes">
        <div className="form-box">
            <h2>כל הדרכים ליצור קשר</h2>
          <ul>
            <li><p>052-6540-770</p> <FaPhoneAlt className="icon-li" /></li>
            <li><p><a href = "mailto: abc@example.com">info@shifrapua.org.il</a></p> <HiOutlineMail className="icon-li" /></li>
            <li><p>שלחו לנו וואטסאפ</p> <FaWhatsapp className="icon-li" /></li>
            <li><p>למילוי משוב ליולדת</p> <BsFillPencilFill className="icon-li" /></li>
            <li><p>שבתאי 1 רחובות</p> <IoLocationSharp className="icon-li" /></li>             
          </ul>
        </div>
        <div className="form-box form-box2">
            <h1>השאירו שם וטלפון</h1>
            <h3>ונחזור בקרוב ממש</h3>
            <form className="contact-form-container">
                <input type="text" placeholder="שם" style={{textAlign:'right'}} />
                <input type="text" placeholder="מספר טלפון" />
                <textarea
                  rows={5} 
                  placeholder="הודעה"
            />
                <button>חזרו אליי בקרוב</button>
            </form>
        </div>
        <div className="form-box">
          <Image
            src="/assets/form-logo.png"
            alt="Logo"
            width={360}
            height={200}
            className="image-contact-form"
          />
        </div>
      </div>
      {/* Map */}
      <div className="map-container">
        Map Container
      </div>
    </div>
  );
};

export default ContactForm;
