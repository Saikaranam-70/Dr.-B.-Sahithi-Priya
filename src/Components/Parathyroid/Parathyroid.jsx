import React from "react";
import Hyperparathyroidism from "../../assets/Parathyroid/Hyperparathyroidism.png";
import Parathyroid_Adenoma from "../../assets/Parathyroid/Parathyroid Adenoma.png";
import Parathyroid_Cysts from "../../assets/Parathyroid/Parathyroid Cysts.png";
import Parathyroid_Hyperplasia from "../../assets/Parathyroid/Parathyroid Hyperplasia.png";
import "../BreastCareTreatments/BreastCareTreatments.css";
import { Link } from "react-router-dom";

const Parathyroid = () => {
  return (
    <div className="breastCancerTreatmentPage">
      <h1 className="header">Parathyroid</h1>
      <div className="section">
        <div className="left">
          <img src={Hyperparathyroidism} alt="" className="sectionImage" />
        </div>
        <div className="right">
          <h1 className="name">Hyperparathyroidism</h1>
          <div className="desc">
            Hyperparathyroidism is a condition where overactive parathyroid
            glands secrete excessive parathyroid hormone, leading to high
            calcium levels in the blood. Symptoms include bone pain, kidney
            stones, fatigue, depression, and digestive issues. Causes include
            parathyroid adenoma, hyperplasia, or carcinoma. Diagnosis involves
            blood tests for calcium and PTH levels, and imaging studies.
            Treatment options include surgical removal of the overactive glands
            or medication to manage symptoms and control calcium levels.
          </div>
          <Link to="/appointment">
            <div className="btn">Book Appointment</div>
          </Link>
        </div>
      </div>
      <div className="section">
        <div className="left">
          <h1 className="name">Parathyroid Adenoma</h1>
          <div className="desc">
            Parathyroid adenoma is a benign tumor of the parathyroid gland
            causing overproduction of parathyroid hormone (PTH). This leads to
            hypercalcemia, with symptoms like bone pain, kidney stones, fatigue,
            and abdominal pain. Diagnosis involves blood tests for elevated
            calcium and PTH levels, along with imaging studies. Treatment
            typically involves surgical removal of the adenoma, which usually
            resolves symptoms and normalizes calcium levels. Early detection and
            treatment are crucial to prevent complications and maintain health.
          </div>
          <Link to="/appointment">
            <div className="btn">Book Appointment</div>
          </Link>
        </div>
        <div className="right">
          <img src={Parathyroid_Adenoma} alt="" className="sectionImage" />
        </div>
      </div>
      <div className="section">
        <div className="left">
          <img src={Parathyroid_Cysts} alt="" className="sectionImage" />
        </div>
        <div className="right">
          <h1 className="name">Parathyroid Cysts</h1>
          <div className="desc">
            Parathyroid cysts are rare, fluid-filled sacs in the parathyroid
            glands. They can cause neck swelling and may affect hormone levels,
            leading to hyperparathyroidism. Diagnosis involves blood tests,
            ultrasound, and fine-needle aspiration. Most cysts are benign and
            asymptomatic, requiring monitoring. Symptomatic or large cysts may
            need surgical removal to prevent complications and normalize hormone
            levels.
          </div>
          <Link to="/appointment">
            <div className="btn">Book Appointment</div>
          </Link>
        </div>
      </div>
      <div className="section">
        <div className="left">
          <h1 className="name">Parathyroid Hyperplasia</h1>
          <div className="desc">
            Parathyroid hyperplasia is the enlargement of all four parathyroid
            glands, leading to excess parathyroid hormone production and
            hypercalcemia. This can result in symptoms such as bone pain, kidney
            stones, fatigue, and digestive issues. It is often associated with
            genetic conditions like multiple endocrine neoplasia (MEN)
            syndromes. Diagnosis involves blood tests for elevated calcium and
            PTH levels, and imaging studies. Treatment typically includes
            surgical removal of most or all of the hyperplastic glands to
            normalize hormone levels and prevent complications.
          </div>
          <Link to="/appointment">
            <div className="btn">Book Appointment</div>
          </Link>
        </div>
        <div className="right">
          <img src={Parathyroid_Hyperplasia} alt="" className="sectionImage" />
        </div>
      </div>
    </div>
  );
};

export default Parathyroid;
