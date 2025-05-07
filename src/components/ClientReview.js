import React from 'react';
import styles from '../styles/ClientReview.module.css';

const ClientReview = () => {
  const reviews = [
    {
      name: 'John Doe',
      position: 'CEO at Business Co.',
      photo: 'https://randomuser.me/api/portraits/men/1.jpg',
      content: 'The service was amazing! They truly helped us scale our operations and achieve our business goals.',
    },
    {
      name: 'Jane Smith',
      position: 'Marketing Head at Tech Innovators',
      photo: 'https://randomuser.me/api/portraits/women/2.jpg',
      content: 'A fantastic experience! Their strategy and execution were top-notch. Highly recommend them!',
    },
    {
      name: 'Samuel Lee',
      position: 'Founder at Startup Hub',
      photo: 'https://randomuser.me/api/portraits/men/3.jpg',
      content: 'Very professional and easy to work with. They delivered the results as promised.',
    },
    {
      name: 'Anna Walker',
      position: 'Director of Operations at Retail Group',
      photo: 'https://randomuser.me/api/portraits/women/4.jpg',
      content: 'Absolutely outstanding work! The team was dedicated and went above and beyond to meet our needs.',
    },
    {
        name: 'John Doe',
        position: 'CEO at Business Co.',
        photo: 'https://randomuser.me/api/portraits/men/1.jpg',
        content: 'The service was amazing! They truly helped us scale our operations and achieve our business goals.',
      },
      {
        name: 'Jane Smith',
        position: 'Marketing Head at Tech Innovators',
        photo: 'https://randomuser.me/api/portraits/women/2.jpg',
        content: 'A fantastic experience! Their strategy and execution were top-notch. Highly recommend them!',
      },
      {
        name: 'Samuel Lee',
        position: 'Founder at Startup Hub',
        photo: 'https://randomuser.me/api/portraits/men/3.jpg',
        content: 'Very professional and easy to work with. They delivered the results as promised.',
      },
      {
        name: 'Anna Walker',
        position: 'Director of Operations at Retail Group',
        photo: 'https://randomuser.me/api/portraits/women/4.jpg',
        content: 'Absolutely outstanding work! The team was dedicated and went above and beyond to meet our needs.',
      },
      {
        name: 'John Doe',
        position: 'CEO at Business Co.',
        photo: 'https://randomuser.me/api/portraits/men/1.jpg',
        content: 'The service was amazing! They truly helped us scale our operations and achieve our business goals.',
      },
      {
        name: 'Jane Smith',
        position: 'Marketing Head at Tech Innovators',
        photo: 'https://randomuser.me/api/portraits/women/2.jpg',
        content: 'A fantastic experience! Their strategy and execution were top-notch. Highly recommend them!',
      },
      {
        name: 'Samuel Lee',
        position: 'Founder at Startup Hub',
        photo: 'https://randomuser.me/api/portraits/men/3.jpg',
        content: 'Very professional and easy to work with. They delivered the results as promised.',
      },
      {
        name: 'Anna Walker',
        position: 'Director of Operations at Retail Group',
        photo: 'https://randomuser.me/api/portraits/women/4.jpg',
        content: 'Absolutely outstanding work! The team was dedicated and went above and beyond to meet our needs.',
      },
  ];
  
  
  
  
    return (
      <section className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
        <div className={styles.reviewContainer}>
          <div className={styles.reviewWrapper}>
            {reviews.map((review, index) => (
              <div key={index} className={styles.reviewCard}>
                <img src={review.photo} alt={review.name} className={styles.clientPhoto} />
                <div className={styles.reviewContent}>{review.content}</div>
                <div className={styles.clientName}>{review.name}</div>
                <div className={styles.clientPosition}>{review.position}</div>
              </div>
            ))}
            {/* Duplicate reviews to make the scroll seamless */}
            {reviews.map((review, index) => (
              <div key={index + reviews.length} className={styles.reviewCard}>
                <img src={review.photo} alt={review.name} className={styles.clientPhoto} />
                <div className={styles.reviewContent}>{review.content}</div>
                <div className={styles.clientName}>{review.name}</div>
                <div className={styles.clientPosition}>{review.position}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ClientReview;
  