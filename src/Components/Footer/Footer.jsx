import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import logo from "../../assets/logo.png"; // replace with your logo path
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-about">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p>
            Dr. B. Sahithi Priya is a highly accomplished Breast and Endocrine Surgeon, 
            currently practising as a consultant Breast Oncoplasty and Endocrine Surgeon 
            in GEMS in Srikakulam.
          </p>
        </div>

        {/* Services Section */}
        <div className="footer-services">
          <h3>Services</h3>
          <ul>
            <Link to='/breast_cancer_treatment'><li>Breast Oncoplastic Surgery</li></Link>
            <Link to='/cosmetic_breast_surgeries'><li>Cosmetic Breast Surgery</li></Link>
            
            <Link to='/adrenal'><li>Adrenalectomy - Open & Laparoscopic</li></Link>
            
            <Link to='/benign_breast_disease'><li>Mastalgia and other diseases of Breast</li></Link>
            
            <Link to='/thyroid'><li>Endoscopic Thyroidectomy</li></Link>
            
            <Link to='/thyroid'><li>Thyroidectomy</li></Link>
            
            <Link to='/thyroid'><li>Neck Dissection</li></Link>
            
            <Link to='/parathyroid'><li>Parathyroid Surgery</li></Link>
            
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h3>Contact Details</h3>
          <p><strong>Dr. B. Sahithi Priya </strong></p>
          <p>Gems Hospital Srikakulam</p>
          <p><strong>Phone:</strong> (+91) 6305526212 </p>
          <p><strong>Email:</strong> sahithi.priya1239@gmail.com</p>
        </div>

        {/* Navigation Section */}
        <div className="footer-nav">
          <h3>Quick Links</h3>
          <ul>
            <Link to='/'><li>Home</li></Link>
            
            <Link to='/about'> <li>About</li></Link>
           
            <Link to='/testimonials'><li>Reviews</li></Link>
            
            <Link to='/contact'><li>Contact Us</li></Link>
            
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>Copyright ©2025 KOLORS. All Rights Reserved.</p>
        <div className="footer-socials">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
