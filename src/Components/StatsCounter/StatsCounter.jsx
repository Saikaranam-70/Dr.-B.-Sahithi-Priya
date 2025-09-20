import React from "react";
import CountUp from "react-countup";
import "./StatsCounter.css";

const StatsCounter = () => {
  const stats = [
    { number: 8, suffix: "+", label: "Years of Experience" },
    { number: 1000, suffix: "+", label: "Surgeries Done" },
    { number: 20, suffix: "+", label: "Publications" },
    { number: 15, suffix: "+", label: "Awards" },
  ];

  return (
    <div className="statsContainer">
      {stats.map((item, index) => (
        <div className="statBox" key={index}>
          <h1 className="statNumber">
            <CountUp start={1} end={item.number} duration={5} />{item.suffix}
          </h1>
          <p className="statLabel">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsCounter;
