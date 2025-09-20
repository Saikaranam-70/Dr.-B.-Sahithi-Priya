import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./Appointment.css";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // fake delay to simulate booking API call
    setTimeout(() => {
      toast.success("🎉 Your appointment has been booked successfully!");
      setFormData({ name: "", email: "", date: "", time: "" });
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="appointment-wrapper">
      {/* toaster root - add once at the top level */}
      <Toaster position="top-center" reverseOrder={false} />

      <form className="appointment-card" onSubmit={handleSubmit}>
        <h2 className="appointment-title">Book Appointment</h2>
        <p className="appointment-subtitle">
          Schedule your visit with ease and confidence
        </p>

        <label htmlFor="name" className="appointment-label">Full Name</label>
        <input
          className="appointment-input"
          type="text"
          id="name"
          name="name"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email" className="appointment-label">Email</label>
        <input
          className="appointment-input"
          type="email"
          id="email"
          name="email"
          placeholder="email@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="date" className="appointment-label">Date</label>
        <input
          className="appointment-input"
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label htmlFor="time" className="appointment-label">Time</label>
        <input
          className="appointment-input"
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="appointment-button"
          disabled={submitting}
        >
          {submitting ? "Booking..." : "Confirm Booking"}
        </button>
      </form>
    </div>
  );
};

export default Appointment;
