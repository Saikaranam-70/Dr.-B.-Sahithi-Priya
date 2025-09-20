import React from "react";
import Adrenal_Tumours from "../../assets/Adernal/Adrenal Tumours.png";
import Pheochromocytoma from "../../assets/Adernal/Pheochromocytoma.png";
import Conns_Syndrome from "../../assets/Adernal/Conns Syndrome.png";
import Adrenal_Cysts from "../../assets/Adernal/Adrenal Cysts.png";
import Angiomyolipoma from "../../assets/Adernal/Angiomyolipoma.png";
import Adrenocortical_Cancer from "../../assets/Adernal/Adrenocortical Cancer.png";
import "../BreastCareTreatments/BreastCareTreatments.css";
import { Link } from "react-router-dom";

const Adrenal = () => {
  return (
    <div className="breastCancerTreatmentPage">
      <h1 className="header">Adrenal</h1>
      <div className="section">
        <div className="left">
          <img src={Adrenal_Tumours} alt="" className="sectionImage" />
        </div>
        <div className="right">
          <h1 className="name">Adrenal Tumours</h1>
          <div className="desc">
            Adrenal tumors are growths in the adrenal glands, which may be
            benign (adenomas) or malignant (adrenocortical carcinoma). Symptoms
            vary depending on hormone production and can include high blood
            pressure, weight gain, and fatigue. Diagnosis involves blood and
            imaging tests. Treatment options include surgical removal,
            medication to manage hormone levels, and sometimes chemotherapy or
            radiation for malignant tumors. Early detection is key for effective
            management and improved outcomes.
          </div>
          <Link to="/appointment">
            <div className="btn">Book Appointment</div>
          </Link>
        </div>
      </div>
      <div className="section">
        <div className="left">
          <h1 className="name">Pheochromocytoma</h1>
          <div className="desc">
            Pheochromocytoma is a rare, usually benign tumor of the adrenal
            glands that overproduces adrenaline. Symptoms include high blood
            pressure, headaches, sweating, rapid heartbeat, and anxiety.
            Diagnosis involves blood and urine tests for elevated catecholamines
            and imaging studies like CT or MRI scans. Treatment primarily
            involves surgical removal of the tumor. If left untreated, it can
            cause severe cardiovascular complications. Early diagnosis and
            management are crucial for preventing potentially life-threatening
            issues and ensuring recovery.
          </div>
          <Link to="/appointment">
            <div className="btn">Book Appointment</div>
          </Link>
        </div>
        <div className="right">
          <img src={Pheochromocytoma} alt="" className="sectionImage" />
        </div>
      </div>
      <div className="section">
        <div className="left">
          <img src={Conns_Syndrome} alt="" className="sectionImage" />
        </div>
        <div className="right">
          <h1 className="name">Conns Syndrome</h1>
          <div className="desc">
            Conn's syndrome, or primary hyperaldosteronism, is a condition where
            the adrenal glands produce too much aldosterone, leading to high
            blood pressure and low potassium levels. Symptoms include muscle
            weakness, fatigue, and headaches. Diagnosis involves blood tests and
            imaging. Treatment options include medication, lifestyle changes, or
            surgical removal of the overactive adrenal gland for definitive
            management.
          </div>
          <Link to="/appointment">
            <div className="btn">Book Appointment</div>
          </Link>
        </div>
      </div>
      <div className="section">
        <div className="left">
          <h1 className="name">Adrenal Cysts</h1>
          <div className="desc">
            Adrenal cysts are fluid-filled sacs in the adrenal glands, often
            discovered incidentally during imaging for other conditions. They
            are usually benign and asymptomatic but can sometimes cause symptoms
            like abdominal pain or hormonal imbalances if they grow large.
            Diagnosis involves imaging studies, such as ultrasound or CT scans.
            Most cysts require no treatment, but symptomatic or large cysts may
            need surgical removal or monitoring to ensure they do not cause
            complications.
          </div>
          <Link to="/appointment">
            <div className="btn">Book Appointment</div>
          </Link>
        </div>
        <div className="right">
          <img src={Adrenal_Cysts} alt="" className="sectionImage" />
        </div>
      </div>
      <div className="section">
        <div className="left">
          <img src={Angiomyolipoma} alt="" className="sectionImage" />
        </div>
        <div className="right">
          <h1 className="name">Angiomyolipoma</h1>
          <div className="desc">
            Angiomyolipoma is a benign tumor composed of blood vessels, smooth
            muscle, and fat, typically found in the kidneys. It often causes no
            symptoms but may lead to abdominal pain or bleeding if large.
            Diagnosis is via imaging studies like ultrasound or CT scans.
            Treatment is usually observational, but surgical removal may be
            necessary for symptomatic or large tumors.
          </div>
          <Link to="/appointment">
            <div className="btn">Book Appointment</div>
          </Link>
        </div>
      </div>
      <div className="section">
        <div className="left">
          <h1 className="name">Adrenocortical Cancer</h1>
          <div className="desc">
            Adrenocortical cancer is a rare, aggressive cancer originating in
            the adrenal cortex. It can cause excess hormone production, leading
            to symptoms like weight gain, high blood pressure, and abdominal
            pain. Diagnosis involves imaging tests (CT or MRI), blood tests, and
            biopsy. Treatment often includes surgery to remove the tumor, and
            may also involve chemotherapy or radiation for advanced cases. Early
            detection is crucial for improving outcomes.
          </div>
          <Link to="/appointment">
            <div className="btn">Book Appointment</div>
          </Link>
        </div>
        <div className="right">
          <img src={Adrenocortical_Cancer} alt="" className="sectionImage" />
        </div>
      </div>
    </div>
  );
};

export default Adrenal;
