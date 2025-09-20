import React from 'react'
import logo from '../../assets/logo.png'

import './Loader.css'

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="logos">
        <img src={logo} alt="Loading..." className="loader-svg" />
      </div>
      <div className="name">
        <p>Dr. B. Sahithi Priya</p>
        <p>Endocrine and Oncoplastic Breast Surgeon</p>
      </div>
    </div>
  )
}

export default Loader