import React from "react";
import Pain_in_the_Breast from "../../assets/BenignBreastDiseases/Pain in the Breast.png";
import Nipple_Discharge from "../../assets/BenignBreastDiseases/Nipple Discharge.png";
import Breast_Infection from "../../assets/BenignBreastDiseases/Breast Infection.png";
import Lactation_Breast_Ailments from "../../assets/BenignBreastDiseases/Lactation Breast Ailments.png";
import Fibroadenoma_Treatment from "../../assets/BenignBreastDiseases/Fibroadenoma Treatment.png";
import Breast_Cyst from "../../assets/BenignBreastDiseases/Breast Cyst.png";
import Nipple_Adenoma_Other_Diseases from "../../assets/BenignBreastDiseases/Nipple Adenoma Other Diseases.png";
import "../BreastCareTreatments/BreastCareTreatments.css";
import { Link } from "react-router-dom";

const BenignBreastDiseases = () => {
  return (
    <div className="breastCancerTreatmentPage">
      <h1 className="header">Benign Breast Diseases</h1>
      <div className="section">
        <div className="left">
          <img src={Pain_in_the_Breast} alt="" className="sectionImage" />
        </div>
        <div className="right">
          <h1 className="name">Pain in the Breast</h1>
          <div className="desc">
            Breast pain, or mastalgia, is a common condition that can affect
            women of all ages. It can be cyclic, linked to the menstrual cycle,
            or non-cyclic, unrelated to hormonal changes. Causes range from
            hormonal fluctuations, fibrocystic breast changes, and stress to
            more serious conditions like infections or, rarely, breast cancer.
            Symptoms can include tenderness, sharp pain, or a dull ache.
            Diagnosis often involves a physical exam, imaging, and sometimes
            biopsy to rule out serious conditions. Treatment varies based on the
            cause.
          </div>
          <Link to='/appointment'>
          <div className="btn">Book Appointment</div>
          </Link>
        </div>
      </div>
      <div className="section">
        <div className="left">
          <h1 className="name">Nipple Discharge</h1>
          <div className="desc">
            Nipple discharge is the release of fluid from one or both nipples,
            which can vary in color and consistency. It can be caused by
            hormonal changes, infections, benign growths like papillomas, or
            more serious conditions like breast cancer. While often benign,
            especially if it occurs in both breasts, persistent or bloody
            discharge warrants medical evaluation. Diagnosis typically involves
            a physical exam, imaging, and sometimes lab tests of the discharge.
            Treatment depends on the underlying cause and may include medication
            or surgery.
          </div>
          <Link to='/appointment'>
          <div className="btn">Book Appointment</div>
          </Link>
        </div>
        <div className="right">
          <img src={Nipple_Discharge} alt="" className="sectionImage" />
        </div>
      </div>
      <div className="section">
        <div className="left">
          <img src={Breast_Infection} alt="" className="sectionImage" />
        </div>
        <div className="right">
          <h1 className="name">Breast Infection</h1>
          <div className="desc">
            Breast infection, or mastitis, is an inflammation typically
            occurring in breastfeeding women due to blocked milk ducts or
            bacterial entry through nipple cracks. Symptoms include breast pain,
            swelling, redness, warmth, and fever. Diagnosis is based on physical
            examination and sometimes imaging. Treatment involves antibiotics,
            pain relief, and continued breastfeeding or pumping to clear the
            infection. In severe cases, abscess formation may require drainage.
            Prompt treatment is essential to prevent complications and ensure
            the well-being of both mother and child.
          </div>
          <Link to='/appointment'>
          <div className="btn">Book Appointment</div>
          </Link>
        </div>
      </div>
      <div className="section">
        <div className="left">
          <h1 className="name">Lactation Breast Ailments</h1>
          <div className="desc">
            Lactation breast ailments include conditions like mastitis, clogged
            milk ducts, and nipple pain or damage. Mastitis is an infection
            causing breast pain, redness, and flu-like symptoms, treated with
            antibiotics and continued breastfeeding. Clogged ducts result in
            tender, lumpy areas, relieved by frequent feeding and massage.
            Nipple pain, often from improper latching, can lead to cracking and
            infections, addressed by correcting the latch and using soothing
            treatments. Prompt attention to these issues ensures effective
            breastfeeding and maternal comfort.
          </div>
          <Link to='/appointment'>
          <div className="btn">Book Appointment</div>
          </Link>
        </div>
        <div className="right">
          <img
            src={Lactation_Breast_Ailments}
            alt=""
            className="sectionImage"
          />
        </div>
      </div>
      <div className="section">
        <div className="left">
          <img src={Fibroadenoma_Treatment} alt="" className="sectionImage" />
        </div>
        <div className="right">
          <h1 className="name">Fibroadenoma Treatment</h1>
          <div className="desc">
            Fibroadenoma treatment typically involves monitoring through regular
            check-ups and imaging, as these benign breast tumors often do not
            require intervention. If the fibroadenoma is large, painful, or
            causing anxiety, options include surgical removal via lumpectomy or
            minimally invasive procedures like cryoablation, which uses extreme
            cold to destroy the tissue. Treatment decisions depend on the size,
            growth rate, and symptoms, as well as patient preference. Regular
            follow-up ensures any changes are detected early, maintaining breast
            health.
          </div>
          <Link to='/appointment'>
          <div className="btn">Book Appointment</div>
          </Link>
        </div>
      </div>
      <div className="section">
        <div className="left">
          <h1 className="name">Breast Cyst</h1>
          <div className="desc">
            A breast cyst is a fluid-filled sac within the breast, common and
            usually benign. They can vary in size and may be tender or painful,
            particularly before menstruation. Diagnosis typically involves a
            physical exam, ultrasound, or mammogram. Fine-needle aspiration can
            confirm the diagnosis and relieve symptoms by draining the fluid.
            Treatment is generally unnecessary unless the cyst is large or
            symptomatic. Regular monitoring ensures any changes are addressed
            promptly, providing reassurance and maintaining breast health.
          </div>
          <Link to='/appointment'>
          <div className="btn">Book Appointment</div>
          </Link>
        </div>
        <div className="right">
          <img src={Breast_Cyst} alt="" className="sectionImage" />
        </div>
      </div>
      <div className="section">
        <div className="left">
          <img
            src={Nipple_Adenoma_Other_Diseases}
            alt=""
            className="sectionImage"
          />
        </div>
        <div className="right">
          <h1 className="name">Nipple Adenoma & Other Diseases</h1>
          <div className="desc">
            Nipple adenoma is a rare, benign tumor of the nipple, presenting as
            a lump or discharge. It can mimic more serious conditions like
            Paget's disease, necessitating biopsy for accurate diagnosis. Other
            breast diseases include fibrocystic changes, characterized by lumpy,
            tender breasts; mastitis, an infection causing pain and redness; and
            breast cancer, marked by persistent lumps, skin changes, or unusual
            discharge. Early detection through self-exams, imaging, and medical
            evaluation is crucial for effective treatment and management of
            these conditions.
          </div>
          <Link to='/appointment'>
          <div className="btn">Book Appointment</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BenignBreastDiseases;
