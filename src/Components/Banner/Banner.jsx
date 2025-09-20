import React from 'react'
import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'
import banner4 from '../../assets/banner4.jpg'
import banner5 from '../../assets/banner5.jpg'

import './Banner.css'

const images = [banner1, banner2, banner3, banner4, banner5]

const Banner = () => {
  return (
    <div className="banner-grid">
      {images.map((img, index) => (
        <div key={index} className="banner-item">
          <img src={img} alt={`Banner ${index + 1}`} />
        </div>
      ))}
    </div>
  )
}

export default Banner
