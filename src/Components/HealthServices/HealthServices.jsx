import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import mastalgia from "../../assets/icons/mastalgia.png";
import Adrenalectomy from "../../assets/icons/Adrenalectomy.png";
import breastOncoplasticSurgery from "../../assets/icons/breastOncoplasticSurgery.png";
import casmotic from "../../assets/icons/casmotic.png";
import EndoscopicThyroidectomy from "../../assets/icons/Endoscopic Thyroidectomy.png";
import Neck from "../../assets/icons/Neck.png";
import Parathyroid from "../../assets/icons/Parathyroid.png";
import Thyroidectomy from "../../assets/icons/Thyroidectomy.png";

import "./HealthServices.css";

const HealthServices = () => {
  const services = [
    {
      icon: mastalgia,
      name: "Mastalgia and other diseases of Breast",
      desc: "Mastalgia and other breast diseases require specialized diagnosis and treatment.",
      path: "/benign_breast_disease",
    },
    {
      icon: breastOncoplasticSurgery,
      name: "Breast Oncoplastic Surgery",
      desc: "Combines breast cancer removal with reconstructive surgery for optimal cosmetic results.",
      path: "/breast_cancer_treatment",
    },
    {
      icon: casmotic,
      name: "Cosmetic Breast Surgery",
      desc: "Surgical procedures aimed at enhancing the appearance of breasts, including augmentation, reduction, and lifting.",
      path: "/cosmetic_breast_surgeries",
    },
    {
      icon: Adrenalectomy,
      name: "Adrenalectomy - Open & Laparoscopic",
      desc: "A surgical procedure to remove the adrenal gland if it is cancerous and/or producing too much hormone.",
      path: "/adrenal",
    },
    {
      icon: EndoscopicThyroidectomy,
      name: "Endoscopic Thyroidectomy",
      desc: "Thyroid cancer requires comprehensive diagnosis and treatment for optimal patient outcomes.",
      path: "/thyroid",
    },
    {
      icon: Thyroidectomy,
      name: "Thyroidectomy",
      desc: "Surgical procedure involving the removal of part or all of the thyroid gland for medical reasons.",
      path: "/thyroid",
    },
    {
      icon: Neck,
      name: "Neck Dissection",
      desc: "Surgical procedure removing lymph nodes and surrounding tissue in the neck to manage and treat cancer.",
      path: "/thyroid",
    },
    {
      icon: Parathyroid,
      name: "Parathyroid Surgery",
      desc: "Surgical procedure to remove one or more parathyroid glands to treat hyperparathyroidism or related conditions.",
      path: "/parathyroid",
    },
  ];

  return (
    <div className="health-container">
      <h2 className="health-title">Our Health Services</h2>
      <div className="health-grid">
        {services.map((service, idx) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.2,
          });
          return (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={
                inView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 50, scale: 0.95 }
              }
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
            >
              <div className="health-card">
                <div className="icon-box">
                  <img src={service.icon} alt={service.name} />
                </div>
                <h3>{service.name}</h3>
                <p>{service.desc}</p>
                <Link to={service.path} className="card-button">
                  Learn More
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default HealthServices;
