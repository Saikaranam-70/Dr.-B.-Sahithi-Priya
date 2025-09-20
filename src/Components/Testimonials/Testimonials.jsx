import React from "react";
import './Testimonials.css'

const testimonials = [
  {
    name: "Lakshmi Priya",
    feedback:
      "Dr. B. Sahithi Priya was extremely supportive throughout my treatment journey. She patiently explained every step of the process and gave me the confidence to face my surgery without fear. Her kind words and professional care made a huge difference in my recovery.",
  },
  {
    name: "Karthik Reddy",
    feedback:
      "I consulted Dr. Sahithi Priya for my mother’s breast care treatment. From the first consultation, she made us feel at ease by clarifying every doubt we had. Her compassionate nature and expertise gave us immense confidence.",
  },
  {
    name: "Sujatha Nair",
    feedback:
      "I had a very positive experience with Dr. Sahithi Priya. She combines great knowledge with empathy, ensuring her patients never feel alone during treatment. Her dedication to patient well-being is truly remarkable.",
  },
  {
    name: "Ramesh Babu",
    feedback:
      "Dr. Sahithi Priya is one of the most approachable doctors I’ve met. She took the time to understand my health condition, explained all treatment options in detail, and ensured I was comfortable throughout. Her care and compassion are unmatched.",
  },
  {
    name: "Meena Kumari",
    feedback:
      "When I was anxious about my diagnosis, Dr. Sahithi Priya was a constant source of reassurance. She explained everything in simple language and treated me with great kindness. I am deeply thankful for her guidance and treatment.",
  },
  {
    name: "Anil Kumar",
    feedback:
      "Her ability to balance professionalism with compassion is outstanding. She never rushed through consultations and always made sure I understood the treatment plan. I felt very well cared for under her supervision.",
  },
  {
    name: "Deepa Raj",
    feedback:
      "Dr. Sahithi Priya gave me confidence and strength at a time when I felt most vulnerable. Her warm approach, clear communication, and exceptional medical expertise helped me recover faster than I expected. She truly treats patients like family.",
  },
  {
    name: "Venkatesh Iyer",
    feedback:
      "She is not just a brilliant surgeon but also a wonderful human being. Her thorough explanations and compassionate care made the entire treatment process much less stressful. I would highly recommend her to anyone in need.",
  },
  {
    name: "Priyanka Varma",
    feedback:
      "I am extremely grateful to Dr. Sahithi Priya for the care and dedication she showed. She personally followed up on my progress and ensured I felt comfortable at every step. Her patient-first attitude is truly inspiring.",
  },
  {
    name: "Arun Prasad",
    feedback:
      "Her calm nature and professionalism helped me overcome my fear of surgery. She reassured me and guided me through the entire treatment with patience. I will always be thankful for her support and care.",
  },
  {
    name: "Sandhya Menon",
    feedback:
      "Dr. Sahithi Priya is one of the kindest doctors I’ve ever met. She listens carefully, understands patient concerns, and offers treatment with compassion. Her positive attitude gave me a lot of courage during my treatment.",
  },
  {
    name: "Srinivas Reddy",
    feedback:
      "From my very first visit, I felt comfortable discussing my health issues with her. She never dismissed my concerns and always took the time to explain things clearly. Her approach is holistic and very reassuring.",
  },
  {
    name: "Radha Krishna",
    feedback:
      "Dr. Sahithi Priya made a huge difference in my healing process. She was always approachable and ready to clarify even the smallest of doubts. Her dedication and patience are qualities every doctor should have.",
  },
  {
    name: "Gayathri Suresh",
    feedback:
      "She truly cares about her patients’ physical and emotional well-being. Her treatment approach is modern and effective, and she ensures her patients are never left anxious. I am grateful to have been treated by her.",
  },
  {
    name: "Naveen Kumar",
    feedback:
      "Her knowledge in breast and endocrine surgery is excellent, but what impressed me most was her gentle approach with patients. She gave me confidence that I was in the right hands. Her dedication is truly commendable.",
  },
  {
    name: "Bhavani Shankar",
    feedback:
      "I found Dr. Sahithi Priya to be extremely approachable and trustworthy. She gave me all the information I needed and reassured me when I was doubtful. Her combination of expertise and empathy is what sets her apart.",
  },
  {
    name: "Harini Devi",
    feedback:
      "Her ability to connect with patients is amazing. I felt supported every step of the way, and she went out of her way to ensure I was comfortable. She is one of the best doctors I’ve ever met.",
  },
  {
    name: "Sathya Narayanan",
    feedback:
      "I was nervous about undergoing surgery, but her calm demeanor gave me courage. She explained the procedure in detail and checked on me regularly during recovery. She is truly dedicated to her patients’ well-being.",
  },
  {
    name: "Chitra Lakshmi",
    feedback:
      "I felt cared for not only as a patient but also as a person. She treats her patients with genuine compassion and never makes them feel rushed. I am forever grateful for her kind approach and medical expertise.",
  },
  {
    name: "Mohan Reddy",
    feedback:
      "Her professionalism and patience stood out to me the most. She always had time for my questions and gave me confidence about my treatment. Her positive attitude was a huge comfort during my recovery.",
  },
  {
    name: "Revathi Srinivasan",
    feedback:
      "Dr. Sahithi Priya is very detail-oriented and ensures patients are fully aware of their treatment plan. She checked in on my progress regularly and was always available when I needed advice. I felt completely supported throughout.",
  },
  {
    name: "Ajay Kumar",
    feedback:
      "She is highly knowledgeable, but what impressed me most was her personal care for patients. She treated me with respect and kindness, which gave me the courage to face my surgery. I would highly recommend her.",
  },
  {
    name: "Padmaja Rao",
    feedback:
      "Her warm smile and kind words always put me at ease. She treated me like a family member and gave me the confidence to trust the process. I will always be thankful for her support and expertise.",
  },
  {
    name: "Gopalakrishnan",
    feedback:
      "I was fortunate to be treated by Dr. Sahithi Priya. Her professionalism, combined with her ability to empathize with patients, makes her stand out. She ensured my recovery was smooth and stress-free.",
  },
  {
    name: "Malathi Iyer",
    feedback:
      "She not only treated me with care but also gave my family members confidence about my treatment. Her clear communication and gentle approach were a huge relief to us. She is an outstanding doctor.",
  },
  {
    name: "Ravi Teja",
    feedback:
      "Dr. Sahithi Priya’s approach is very patient-centered. She explained all the procedures thoroughly, ensured I was comfortable, and gave me strength during recovery. Her dedication is admirable.",
  },
  {
    name: "Keerthi Ramesh",
    feedback:
      "I had complete trust in her from the first consultation itself. She is approachable, knowledgeable, and very compassionate. Her treatment and encouragement played a big role in my recovery.",
  },
  {
    name: "Madhavi Krishnan",
    feedback:
      "Her dedication to patient care is truly inspiring. She treats her patients like family, offering both medical support and emotional reassurance. I am deeply grateful for her guidance and care.",
  },
  {
    name: "Vishnu Vardhan",
    feedback:
      "She is not only an excellent doctor but also a wonderful human being. Her constant encouragement and professional approach gave me a lot of strength during treatment. I highly recommend her to others.",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2>What Our Patients Say</h2>
      <div className="testimonial-list">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <p className="feedback">“{t.feedback}”</p>
            <h4 className="patient">- {t.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
