import React from 'react'
import image from '../../assets/ONE.jpg'
import './HomeAppointment.css'

const HomeAppointment = () => {
  return (
    <div className='homeAppointment'>
      <div className="homeAppointmentImage">
        <img src={image} alt="AppointmentImage" className="image" />
      </div>
      <div className="appointmentForm">
        <span className="head">Our Appointment Now</span>
        <h1 className="bookAppointment">Schedule An Appointment</h1>
        <div className="form">
            <input type="text" name="" id="" placeholder='Enter Your Name'/>
            <input type="email" name="" id="" placeholder='Enter Your Email'/>
            <input type="number" name="" id="" placeholder='Enter Your Phone Number'/>
            <textarea name="" id="" placeholder='Enter Your Message'></textarea>
            <button className="appointmentBtn">Submit Form</button>
        </div>
      </div>
    </div>
  )
}

export default HomeAppointment
