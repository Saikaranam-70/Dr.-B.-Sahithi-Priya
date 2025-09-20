import React, { useState } from "react"
import "./About.css"
import doctor from '../../assets/doctor.jpg'

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="about-container">
      {/* Doctor Header */}
      <div className="doctor-header">
        <img
          src={doctor} // replace with actual image path
          alt="Dr. B. Sahithi Priya"
          className="doctor-image"
        />
        <div className="doctor-info">
          <h1>Dr. B. Sahithi Priya</h1>
          <h2>Endocrine and Oncoplastic Breast Surgeon</h2>
          <p>
            MS General Surgery (SV Medical College) | MCh Endocrine Surgery
            (Madras Medical College)
          </p>
          <p className="highlight">Double Gold Medalist</p>
        </div>
      </div>

      {/* About Section */}
      <div className="about-text">
        <p>
          Dr. B. Sahithi Priya is a distinguished{" "}
          <strong>Endocrine and Oncoplastic Breast Surgeon</strong> who has
          dedicated her career to advancing the surgical management of endocrine
          disorders and breast health. With a strong academic foundation, she
          completed her <strong>MS in General Surgery at SV Medical College</strong>, 
          followed by her <strong>MCh in Endocrine Surgery at the prestigious Madras Medical College</strong>, 
          where she emerged as a <strong>double gold medalist</strong> for her outstanding performance. 
          This combination of rigorous training and academic excellence has placed her among the finest specialists in her field.
        </p>

        <p>
          Over the years, Dr. Priya has developed wide-ranging expertise in
          managing complex surgical cases. Her skills include the treatment of{" "}
          <strong>
            benign and malignant thyroid swellings, re-operative thyroid
            surgeries, and retrosternal goitres
          </strong>
          . She is particularly recognized for her proficiency in{" "}
          <strong>minimally invasive parathyroid surgeries</strong>, which allow
          patients faster recovery and reduced surgical trauma. In addition, she
          has vast experience in performing{" "}
          <strong>open and laparoscopic adrenal surgeries</strong> for adrenal
          tumors, ensuring patients receive precise, safe, and modern surgical
          care.
        </p>

        <p>
          Dr. Priya’s practice extends beyond endocrine surgery into the
          specialized field of breast surgery. She offers{" "}
          <strong>holistic management for all stages of breast cancer</strong>,
          combining clinical expertise with compassion and patient-centered
          care. She is skilled in advanced{" "}
          <strong>oncoplastic techniques</strong>, including flap-based breast
          reconstruction, which allow women to maintain both their health and
          confidence. Her work also covers{" "}
          <strong>cosmetic breast surgeries</strong> such as breast reduction,
          augmentation, and correction of inverted nipples, addressing both
          functional and aesthetic needs with equal dedication. Additionally,
          she provides comprehensive care for{" "}
          <strong>benign breast diseases</strong>, ensuring early diagnosis,
          effective treatment, and reassurance for her patients.
        </p>

        <p>
          Her expertise further includes the management of{" "}
          <strong>neuroendocrine tumors of the pancreas</strong>, which require
          precise surgical judgment and multidisciplinary collaboration. By
          keeping herself updated with the latest global advancements in
          surgery, Dr. Priya ensures her patients benefit from evidence-based
          treatments and state-of-the-art techniques. She strongly believes in
          offering <strong>personalized treatment plans</strong> that consider
          not only the disease but also the overall well-being and lifestyle of
          her patients.
        </p>

        <p>
          Widely admired for her dedication, Dr. B. Sahithi Priya stands out not
          only as a surgeon but also as a compassionate caregiver. She blends
          her deep medical knowledge, surgical precision, and empathetic
          approach to deliver the best possible outcomes. For patients seeking
          trusted care in the areas of endocrine and breast surgery, Dr. Priya
          represents a perfect balance of{" "}
          <strong>professional expertise and human touch</strong>.
        </p>
      </div>

      {/* Accordion Section */}
      <div className="accordion">
        {[
          {
            title: "🏆 Awards",
            content: [
              "Gold Medal in General Surgery – SV Medical College",
              "Gold Medal in Endocrine Surgery – Madras Medical College",
              "Recognized for excellence in Endocrine and Oncoplastic Breast Surgeries",
            ],
          },
          {
            title: "📑 Publications",
            content: [
              "Research papers on Thyroid and Parathyroid surgical outcomes",
              "Case study publications on Oncoplastic Breast Surgeries",
              "Articles in reputed surgical and oncology journals",
            ],
          },
          {
            title: "✨ Achievements",
            content: [
              "Successfully performed numerous complex endocrine surgeries",
              "Pioneer in integrating cosmetic techniques with cancer breast surgeries",
              "Invited speaker at national and international surgical conferences",
            ],
          },
        ].map((item, index) => (
          <div key={index} className="accordion-item">
            <button
              className={`accordion-header ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
              <span className="arrow">{activeIndex === index ? "−" : "+"}</span>
            </button>
            <div
              className={`accordion-content ${
                activeIndex === index ? "open" : ""
              }`}
            >
              <ul>
                {item.content.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About;
