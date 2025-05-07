import React from 'react';
import HeroSection from '../components/HeroSection';
import Navbar from "../components/NavBar";
import WhyChooseUs from "../components/WhyChooseUs";
import CustomerJourney from "../components/CustomerJourney";
import ClientReview from "../components/ClientReview";

function HomePage() {
  return (
    <div style={{ background: "linear-gradient(135deg, #0a192f, #7b61ff)" }}>
      <Navbar />
      <HeroSection />
      <CustomerJourney />
      <ClientReview />
      <WhyChooseUs />
    </div>
  );
}

export default HomePage;

