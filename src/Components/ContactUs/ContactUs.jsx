import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!", {
      position: "top-right",
      autoClose: 2000,
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        {/* Left - Contact Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Have questions or want to book a consultation with <b>Dr. B Sahithi Priya</b>? Reach us anytime.
          </p>

          <div className="contact-details">
            <p><FaPhoneAlt /> +91 6305526212</p>
            <p><FaEnvelope /> dsahithi.priya1239@gmail.com</p>
            <p><FaMapMarkerAlt /> Gems Hospital, Srikakulam, India</p>
          </div>

          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>

        {/* Right - Form */}
        <div className="contact-form">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />

            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />

            <label>Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} rows="4" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
