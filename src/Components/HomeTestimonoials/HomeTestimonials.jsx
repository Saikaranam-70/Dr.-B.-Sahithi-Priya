import React from "react";
import Slider from "react-slick";
import "./HomeTestimonials.css";

const HomeTestimonials = () => {
  const testimonials = [
    {
      name: "Aarav Sharma",
      role: "Patient",
      text: "Dr. Sahithi Priya combines exceptional medical knowledge with a compassionate approach. She explained every step of the treatment clearly and made me feel comfortable throughout my journey.",
    },
    {
      name: "Meera Iyer",
      role: "Patient’s Daughter",
      text: "My mother underwent surgery under Dr. Priya’s care, and I cannot express how grateful we are. She ensured that not only my mother but also our family felt supported and reassured at every stage.",
    },
    {
      name: "Rohan Desai",
      role: "Patient",
      text: "Her expertise in breast surgery is unmatched. I had been very anxious before the procedure, but her calm and confident nature gave me the courage I needed. Recovery was smooth thanks to her guidance.",
    },
    {
      name: "Priya Menon",
      role: "Patient",
      text: "What stands out about Dr. Priya is her empathy. She listens carefully and answers even the smallest doubts with patience. I never felt rushed, and that made all the difference in my treatment journey.",
    },
    {
      name: "Siddharth Patel",
      role: "Patient’s Husband",
      text: "When my wife was diagnosed, we were extremely worried. Dr. Priya not only performed the surgery flawlessly but also supported us emotionally. She treats patients like family, which is rare to see today.",
    },
    {
      name: "Anjali Rao",
      role: "Patient",
      text: "I consulted Dr. Priya for a second opinion, and it was the best decision I made. Her detailed explanation and evidence-based approach gave me confidence to proceed with surgery under her care.",
    },
    {
      name: "Neha Kapoor",
      role: "Patient",
      text: "From consultation to post-surgery follow-up, Dr. Priya was always approachable and kind. She has a unique ability to balance professionalism with warmth, which makes patients feel safe and cared for.",
    },
    {
      name: "Vikram Joshi",
      role: "Patient’s Brother",
      text: "My sister’s treatment journey was overwhelming, but Dr. Priya made it so much easier. Her medical expertise combined with a personal touch gave our family the strength we needed during this tough time.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 992, // tablets & below
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonials">
      <h2 className="testimonialHead">What Our Patients Say</h2>
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div className="testimonialCard" key={index}>
            <p className="testimonialText">“{item.text}”</p>
            <h4 className="testimonialName">{item.name}</h4>
            <span className="testimonialRole">{item.role}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeTestimonials;
