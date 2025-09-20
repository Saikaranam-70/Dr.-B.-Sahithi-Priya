// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import './Navbar.css'
// import logo from '../../assets/logo.png'

// const Navbar = () => {
//   const [hovered, setHovered] = useState(null)
//   const [subHovered, setSubHovered] = useState(null)

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     {
//       name: "Specialities",
//       subLinks: [
//         {
//           name: "Comprehensive Breast Cancer",
//           subLinks2: [
//             { name: "Breast Cancer Treatment", path: "/breast_cancer_treatment" },
//             { name: "Benign Breast Disease", path: "/benign_breast_cancer_disease" },
//             { name: "Cosmetic Breast Surgeries", path: "/cosmetic_breast_surgeries" },
//           ]
//         },
//         {
//           name: "Endocrine Disease Management",
//           subLinks2: [
//             { name: "Thyroid", path: "/thyroid" },
//             { name: "Parathyroid", path: "/parathyroid" },
//             { name: "Adrenal", path: "/adrenal" },
//           ]
//         },
//       ]
//     },
//     { name: "Gallery", path: "/gallery" },
//     { name: "Testimonials", path: "/testimonials" },
//     { name: "Contact Us", path: "/contactus" },
//   ]

//   return (
//     <div className="parent">

//       <div className="div1">
//         <img src={logo} alt="LOGO" />
//       </div>

//       <div className="div2">
//         <ul className="nav-list">
//           {navLinks.map((link, index) => (
//             <li
//               key={index}
//               className="nav-item"
//               onMouseEnter={() => setHovered(index)}
//               onMouseLeave={() => {
//                 setHovered(null)
//                 setSubHovered(null)
//               }}
//             >
//               {link.path ? (
//                 <Link to={link.path}>{link.name}</Link>
//               ) : (
//                 <span className="nav-title">{link.name}</span>
//               )}


//               {link.subLinks && hovered === index && (
//                 <ul className="dropdown">
//                   {link.subLinks.map((sub, subIndex) => (
//                     <li
//                       key={subIndex}
//                       className="dropdown-item"
//                       onMouseEnter={() => setSubHovered(subIndex)}
//                       onMouseLeave={() => setSubHovered(null)}
//                     >
//                       <span>{sub.name}</span>


//                       {sub.subLinks2 && subHovered === subIndex && (
//                         <ul className="dropdown2">
//                           {sub.subLinks2.map((sublink2, i) => (
//                             <li key={i}>
//                               <Link to={sublink2.path}>{sublink2.name}</Link>
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>


//       <div className="div3">
//         <Link to="/appointment" className="btn-appointment">
//           Book Appointment
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default Navbar
