import { motion } from "framer-motion";
import React from "react";
import "./AnimatedBackground.css";

const AnimatedBackground = ({ children }) => {
  const particles = Array.from({ length: 25 });

  return (
    <div className="background-container">
      {/* Gradient Animation */}
      <motion.div
        className="gradient-overlay"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating Particles */}
      {particles.map((_, i) => (
        <motion.span
          key={i}
          className="particle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Page Content */}
      <div className="content">{children}</div>
    </div>
  );
};

export default AnimatedBackground;
