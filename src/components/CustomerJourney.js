import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/CustomerJourney.module.css";

const CustomerJourney = () => {
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const topPosition = timelineRef.current.getBoundingClientRect().top;
        if (topPosition < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const steps = [
    { title: "Understanding Your Business Needs", description: "We analyze your business to understand your objectives and challenges.", icon: "📊" },
    { title: "Strategy & Growth Plan", description: "Develop a strategic plan tailored to your business growth.", icon: "📈" },
    { title: "Review & Approval", description: "We review the plan together and make necessary adjustments.", icon: "✅" },
    { title: "Development & Execution", description: "We begin developing and executing the strategy.", icon: "💻" },
    { title: "Testing & Quality Assurance", description: "We thoroughly test and ensure everything is functioning as expected.", icon: "🔍" },
    { title: "Launch & Deployment", description: "Launch your business solution and deploy it for public use.", icon: "🚀" },
    { title: "Optimization & Growth", description: "Analyze results, optimize, and scale your business.", icon: "📊" },
    { title: "Celebrate Success!", description: "Celebrate the success and look forward to continued growth.", icon: "🥳" },
  ];

  return (
    <div ref={timelineRef} className={`${styles.journeyContainer} ${isVisible ? styles.visible : ""}`}>
      <h1 className={styles.header}>Customer Journey</h1>
      <div className={styles.timeline}>
        {steps.map((step, index) => (
          <div key={index} className={`${styles.step} ${index % 2 === 0 ? styles.leftStep : styles.rightStep}`}>
            {index > 0 && <div className={styles.connector}></div>}
            <div className={styles.stepContent}>
              <div className={styles.icon}>{step.icon}</div>
              <h2 className={styles.stepTitle}>{step.title}</h2>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerJourney;