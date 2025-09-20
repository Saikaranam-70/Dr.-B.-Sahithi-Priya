import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BreastCareTreatments from './Components/BreastCareTreatments/BreastCareTreatments.jsx'
import App from './App.jsx'
import PremiumNavbar from './Components/UpdatedNavbar/PremiumNavbar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import BenignBreastDiseases from './Components/BenignBreastDiseases/BenignBreastDiseases.jsx'
import CosmeticBreastSurgeries from './Components/CosmeticBreastSurgeries/CosmeticBreastSurgeries.jsx'
import Testimonials from './Components/Testimonials/Testimonials'
import ContactUs from './Components/ContactUs/ContactUs.jsx'
import Thyroid from './Components/Thyroid/Thyroid.jsx'
import Parathyroid from './Components/Parathyroid/Parathyroid.jsx'
import Adrenal from './Components/Adrenal/Adrenal.jsx'
import About from './Components/About/About.jsx'
import Appointment from './Components/Appointment/Appointment.jsx'

const All = () => {
  return (
    <div>
      <PremiumNavbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/breast_cancer_treatment' element={<BreastCareTreatments />} />
        <Route path='/benign_breast_disease' element={<BenignBreastDiseases />} />
        <Route path='/cosmetic_breast_surgeries' element={<CosmeticBreastSurgeries />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/thyroid' element={<Thyroid />} />
        <Route path='/parathyroid' element={<Parathyroid />} />
        <Route path='/adrenal' element={<Adrenal />} />
        <Route path='/about' element={<About />} />
        <Route path='/appointment' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default All
