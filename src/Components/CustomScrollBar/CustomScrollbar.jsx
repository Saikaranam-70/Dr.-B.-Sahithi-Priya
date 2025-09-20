import React, { useRef, useState, useEffect } from "react";
import stethoscopeIcon from "../../assets/scope.png"; // Path to your icon
import "./CustomScrollbar.css"; // We'll style it later

const CustomScrollbar = ({ children }) => {
  const containerRef = useRef();
  const thumbRef = useRef();
  const [thumbHeight, setThumbHeight] = useState(0);

  // Calculate thumb size and handle scroll
  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      const scrollRatio = container.scrollTop / (container.scrollHeight - container.clientHeight);
      thumbRef.current.style.top = `${scrollRatio * (container.clientHeight - thumbHeight)}px`;
    };

    container.addEventListener("scroll", handleScroll);

    // Set thumb height based on visible content
    setThumbHeight((container.clientHeight / container.scrollHeight) * container.clientHeight);

    return () => container.removeEventListener("scroll", handleScroll);
  }, [thumbHeight]);

  return (
    <div className="scroll-wrapper">
      <div ref={containerRef} className="scroll-content">
        {children}
      </div>
      <div className="scrollbar-track">
        <div ref={thumbRef} className="scrollbar-thumb">
          <img src={stethoscopeIcon} alt="thumb" className="thumb-icon" />
        </div>
      </div>
    </div>
  );
};

export default CustomScrollbar;
