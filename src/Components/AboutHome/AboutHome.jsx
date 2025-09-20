import React from "react";
import doctor from "../../assets/doctor.jpg";
import "./AboutHome.css";
import { Link } from "react-router-dom";

const AboutHome = () => {
  return (
    <div className="homeAbout">
      <div className="homeAboutLeft">
        <img src={doctor} className="homeAboutDoctorImage" alt="Doctor Image" />
      </div>
      <div className="homeAboutRight">
        <span className="aboutDoctor">About Doctor</span>
        <h1 className="name">Dr.B.Sahithi Priya</h1>
        <span className="speciality"> Breast Cancer Surgeon in Srikakulam</span>
        <p className="desc">
          Dr. B. Sahithi Priya is a highly accomplished Endocrine and
          Oncoplastic Breast Surgeon, practicing with a strong focus on both
          endocrine surgery and breast oncoplasty. She holds an MS in General
          Surgery from SV Medical College and an M.Ch in Endocrine Surgery from
          Madras Medical College, where she was recognized as a double gold
          medalist. Dr. Sahithi Priya has extensive expertise in managing
          complex thyroid and parathyroid disorders, adrenal tumors, benign
          breast diseases, and holistic breast cancer care, including advanced
          oncoplastic and cosmetic breast surgeries. Known for her compassionate
          approach and commitment to excellence, she ensures that patient care
          and satisfaction always remain her top priority.
        </p>
        <Link to='/about'>
        <button className="homeAboutBtn">About More</button></Link>
      </div>
    </div>
  );
};

export default AboutHome;
