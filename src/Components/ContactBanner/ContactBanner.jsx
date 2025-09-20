import React from "react";
// import bannerImage from '../../assets/surgery.jpeg'
import "./ContactBanner.css";
import { Link } from "react-router-dom";

const ContactBanner = () => {
  return (
    <div className="bannerComponent">
      <div className="left">
        <h1 className="bannerComponentDesc">
          Prepared to provide expert breast and <br /> endocrine surgical care!
        </h1>
      </div>
      <div className="right">
        <h1 className="phone">
          {" "}
          Call on <span className="number">6305526212 </span>
        </h1>
        <Link to="/appointment">
          <button className="bannerComponentButton">Book Appointment</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactBanner;
