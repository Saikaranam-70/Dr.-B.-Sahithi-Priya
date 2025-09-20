import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'
import logo from '../../assets/logo.png'
import './PremiumNavbar.css'

const PremiumNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [subHoveredIndex, setSubHoveredIndex] = useState(null)

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    {
      label: "Services",
      children: [
        {
          label: "Breast Care",
          children: [
            { label: "Breast Cancer Treatment", path: "/breast_cancer_treatment" },
            { label: "Benign Breast Disease", path: "/benign_breast_disease" },
            { label: "Cosmetic Breast Surgeries", path: "/cosmetic_breast_surgeries" },
          ]
        },
        {
          label: "Endocrine Care",
          children: [
            { label: "Thyroid", path: "/thyroid" },
            { label: "Parathyroid", path: "/parathyroid" },
            { label: "Adrenal", path: "/adrenal" },
          ]
        }
      ]
    },
    // { label: "Gallery", path: "/gallery" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "Contact", path: "/contact" },
  ]

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-container">
  <img src={logo} alt="Logo" className="logo-img" />
  <div className="logo-text">
    <h1 className="drname">Dr. B. Sahithi Priya</h1>
    <span className="speciality">Endocrine and Oncoplastic Breast Surgeon</span>
  </div>
</Link>

      </div>

      {/* Mobile Toggle */}
      <button className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Menu */}
      <nav className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
        <ul>
          {navItems.map((item, index) => (
            <li
              key={index}
              className="navbar-item"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => {
                setHoveredIndex(null)
                setSubHoveredIndex(null)
              }}
            >
              {item.path ? (
                <Link to={item.path} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              ) : (
                <>
                  <span className="dropdown-title">
                    {item.label} <FiChevronDown />
                  </span>
                  {item.children && hoveredIndex === index && (
                    <ul className="dropdown">
                      {item.children.map((child, childIndex) => (
                        <li
                          key={childIndex}
                          className="dropdown-item"
                          onMouseEnter={() => setSubHoveredIndex(childIndex)}
                          onMouseLeave={() => setSubHoveredIndex(null)}
                        >
                          {child.path ? (
                            <Link to={child.path}>{child.label}</Link>
                          ) : (
                            <>
                              <span className="dropdown-label">{child.label}</span>
                              {child.children && subHoveredIndex === childIndex && (
                                <ul className="dropdown2">
                                  {child.children.map((grand, gIndex) => (
                                    <li key={gIndex}>
                                      <Link to={grand.path}>{grand.label}</Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
          {/* Appointment button inside menu on small screens */}
          <li className="navbar-item mobile-cta">
            <Link to="/appointment" className="btn-appointment">Book Appointment</Link>
          </li>
        </ul>
      </nav>

      {/* Desktop Appointment Button */}
      <div className="navbar-cta">
        <Link to="/appointment" className="btn-appointment">Book Appointment</Link>
      </div>
    </header>
  )
}

export default PremiumNavbar