import React, { useEffect, useRef } from 'react';
import styles from "../styles/WhyChooseUs.module.css";


const WhyChooseUs = () => {
  const reasons = [
    { title: 'Expertise & Experience', description: 'With years of experience, we bring unmatched expertise to every project.', icon: '🎓' },
    { title: 'Tailored Solutions', description: 'We provide customized strategies that align with your unique business needs.', icon: '🔧' },
    { title: 'Proven Results', description: 'Our work speaks for itself with measurable outcomes and tangible success.', icon: '📈' },
    { title: 'Innovative Approach', description: 'We use the latest technologies and methods to drive your business forward.', icon: '💡' },
    { title: 'Dedicated Support', description: 'Our team is always available to assist you and ensure your success.', icon: '🤝' },
    { title: 'Customer-Centric', description: 'Your satisfaction is our priority; we focus on delivering value at every step.', icon: '❤️' },
    { title: 'Continuous Improvement', description: 'We are committed to constant evolution and staying ahead of industry trends.', icon: '🔄' },
    { title: 'Transparent Communication', description: 'Clear and consistent communication ensures that you’re always in the loop.', icon: '📞' },
  ];

  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
      <div className={styles.sliderContainer}>
        <div className={styles.sliderWrapper}>
          {reasons.map((reason, index) => (
            <div key={index} className={styles.reasonCard}>
              <div className={styles.icon}>{reason.icon}</div>
              <h3 className={styles.cardTitle}>{reason.title}</h3>
              <p className={styles.cardDescription}>{reason.description}</p>
              <button className={styles.btn}>Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
