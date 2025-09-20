import React from "react";
import Breast_Augmentation from "../../assets/Cosmetic Breast Surgeries/Breast Augmentation.png";
import Breast_Reduction from "../../assets/Cosmetic Breast Surgeries/Breast Reduction.png";
import Breast_Lifting from "../../assets/Cosmetic Breast Surgeries/Breast Lifting.png";
import Breast_Surgery_for_Gender_Reassignment from "../../assets/Cosmetic Breast Surgeries/Breast Surgery for Gender Reassignment.png";
import "../BreastCareTreatments/BreastCareTreatments.css";
import { Link } from "react-router-dom";
const CosmeticBreastSurgeries = () => {
  return (
    <div className="breastCancerTreatmentPage">
      <h1 className="header">Cosmetic Breast Surgeries</h1>
      <div className="section">
        <div className="left">
          <img src={Breast_Reduction} alt="" className="sectionImage" />
        </div>
        <div className="right">
          <h1 className="name">Breast Reduction</h1>
          <div className="desc">
            Breast reduction is a surgical procedure to remove excess breast
            tissue, fat, and skin to achieve a breast size proportionate to the
            body. It alleviates discomfort from overly large breasts, such as
            back, neck, and shoulder pain. The surgery involves making
            incisions, removing tissue, and repositioning the nipple. Recovery
            typically includes wearing a support bra and avoiding strenuous
            activities for several weeks, resulting in improved comfort,
            posture, and body confidence.
          </div>
          <Link to="/appointment">
            <div className="btn">Book Appointment</div>
          </Link>
        </div>
      </div>
      <div className="section">
        <div className="left">
          <h1 className="name">Breast Lifting - for sagging breasts</h1>
          <div className="desc">
            Breast lifting, or mastopexy, is a surgical procedure designed to
            raise and firm sagging breasts. It involves removing excess skin and
            tightening surrounding tissue to reshape and support the new breast
            contour. This procedure can also reposition the nipple and areola
            for a more youthful appearance. Ideal for women experiencing sagging
            due to aging, pregnancy, or weight loss, breast lifting enhances
            breast shape and firmness. Recovery typically includes wearing a
            support bra and avoiding strenuous activities for several weeks.
          </div>
          <Link to="/appointment">
            <div className="btn">Book Appointment</div>
          </Link>
        </div>
        <div className="right">
          <img src={Breast_Lifting} alt="" className="sectionImage" />
        </div>
      </div>
      <div className="section">
        <div className="left">
          <img
            src={Breast_Surgery_for_Gender_Reassignment}
            alt=""
            className="sectionImage"
          />
        </div>
        <div className="right">
          <h1 className="name">Breast Surgery for Gender Reassignment</h1>
          <div className="desc">
            A full mastectomy can be done to remove breast tissue and
            aesthetically design the chest. Alternatively, for male to female
            reassignment, a one-stage breast augmentation using implants.
          </div>
          <Link to="/appointment">
            <div className="btn">Book Appointment</div>
          </Link>
        </div>
      </div>
      <div className="section">
        <div className="left">
          <h1 className="name">Breast Augmentation</h1>
          <div className="desc">
            Breast augmentation involves the use of implants to enhance breast
            size and shape. It's a popular cosmetic procedure for women seeking
            aesthetic improvements or post-mastectomy reconstruction to restore
            breast appearance after cancer surgery. Implants, either silicone or
            saline, are placed under the chest muscles or breast tissue. The
            procedure can also improve symmetry and boost self-confidence.
            Recovery varies, with initial swelling and discomfort subsiding
            within weeks, allowing patients to resume normal activities
            gradually.
          </div>
          <Link to="/appointment">
            <div className="btn">Book Appointment</div>
          </Link>
        </div>
        <div className="right">
          <img src={Breast_Augmentation} alt="" className="sectionImage" />
        </div>
      </div>
    </div>
  );
};

export default CosmeticBreastSurgeries;
