import React from "react";
// import Navbar from "./Components/Navbar/Navbar";
import AnimatedBackground from "./Components/Background/AnimatedBackground";
import Home from "./Components/Home/Home";
import HealthServices from "./Components/HealthServices/HealthServices";
import ContactBanner from "./Components/ContactBanner/ContactBanner";
import AboutHome from "./Components/AboutHome/AboutHome";
import StatsCounter from "./Components/StatsCounter/StatsCounter";
import HomeAppointment from "./Components/HomeAppointment/HomeAppointment";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import HomeTestimonials from "./Components/HomeTestimonoials/HomeTestimonials";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
// import UpdatedNavbar from "./Components/UpdatedNavbar/UpdatedNavbar";
import PremiumNavbar from "./Components/UpdatedNavbar/PremiumNavbar";
import CustomScrollbar from "./Components/CustomScrollBar/CustomScrollbar";

const App = () => {
  return (
    <div>

      <AnimatedBackground>
        <Home />
      </AnimatedBackground>
      <HealthServices />
      <ContactBanner />
      <AboutHome />
      <StatsCounter />
      <HomeAppointment />
      <HomeTestimonials />
      <Banner />

    </div>
  );
};

export default App;
