import React, { useState } from "react";
import styles from "../styles/HeroSection.module.css";
import styles1 from '../styles/Banner.module.css';
import { FaLaptopCode, FaGlobe, FaMobileAlt, FaChartBar, FaArrowRight, FaPlay } from "react-icons/fa";

const HeroSection = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className={styles.heroSection}>
      {/* Background Elements */}
      <div className={styles.bgElements}>
        <div className={styles.gradientOrb}></div>
        <div className={styles.gridPattern}></div>
      </div>

      {/* Left Content */}
      <div className={styles.leftContent}>
        <div className={styles.badge}>
          <span className={styles.pulse}></span>
          Transforming Ideas into Reality
        </div>

        <h1 className={styles.headline}>
          Elevate Your Business with
          <span className={styles.gradientText}> Innovative Solutions</span>
        </h1>

        <p className={styles.description}>
          We craft cutting-edge digital experiences that drive growth and deliver exceptional results.
        </p>

        <div className={styles.ctaGroup}>
          <button className={styles.primaryCta}>
            Start Your Journey
            <FaArrowRight className={styles.arrowIcon} />
          </button>
          <button className={styles.videoBtn}>
            <span className={styles.playIcon}>
              <FaPlay />
            </span>
            Watch Showreel
          </button>
        </div>

        <div className={styles.statsGroup}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>200+</span>
            <span className={styles.statLabel}>Projects Completed</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>98%</span>
            <span className={styles.statLabel}>Client Satisfaction</span>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className={styles.rightContent}>
        <div className={styles.servicesGrid}>
          <div 
            className={`${styles.serviceCard} ${activeService === 'software' ? styles.active : ''}`}
            onMouseEnter={() => setActiveService('software')}
            onMouseLeave={() => setActiveService(null)}
          >
            <div className={styles.serviceIcon}>
              <FaLaptopCode />
            </div>
            <h3>Software Development</h3>
            <p>Custom solutions tailored to your needs</p>
            <a href="/software-development" className={styles.serviceLink}>
              Explore <FaArrowRight />
            </a>
          </div>

          <div 
            className={`${styles.serviceCard} ${activeService === 'web' ? styles.active : ''}`}
            onMouseEnter={() => setActiveService('web')}
            onMouseLeave={() => setActiveService(null)}
          >
            <div className={styles.serviceIcon}>
              <FaGlobe />
            </div>
            <h3>Web Development</h3>
            <p>Stunning websites that convert</p>
            <a href="/web-development" className={styles.serviceLink}>
              Explore <FaArrowRight />
            </a>
          </div>

          <div 
            className={`${styles.serviceCard} ${activeService === 'app' ? styles.active : ''}`}
            onMouseEnter={() => setActiveService('app')}
            onMouseLeave={() => setActiveService(null)}
          >
            <div className={styles.serviceIcon}>
              <FaMobileAlt />
            </div>
            <h3>App Development</h3>
            <p>Mobile solutions for modern world</p>
            <a href="/app-development" className={styles.serviceLink}>
              Explore <FaArrowRight />
            </a>
          </div>

          <div 
            className={`${styles.serviceCard} ${activeService === 'marketing' ? styles.active : ''}`}
            onMouseEnter={() => setActiveService('marketing')}
            onMouseLeave={() => setActiveService(null)}
          >
            <div className={styles.serviceIcon}>
              <FaChartBar />
            </div>
            <h3>Digital Marketing</h3>
            <p>Grow your online presence</p>
            <a href="/digital-marketing" className={styles.serviceLink}>
              Explore <FaArrowRight />
            </a>
          </div>
        </div>

        {/* <div className={styles.showcase}>
          <div className={styles1.slider} style={{ '--quantity': 4 }}>
            {[...Array(4)].map((_, index) => (
              <div
                className={`${styles1.item} ${styles.showcaseItem}`}
                style={{ '--position': index + 1 }}
                key={index}
              >
                <img 
                  src={`assets/image/service${index + 0}.png`} 
                  alt={`Service ${index + 0}`}
                  className={styles.showcaseImage}
                />
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
