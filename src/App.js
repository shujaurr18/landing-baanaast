import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import OurValues from './OurValues';
import SmartCitiesBanner from './SmartCitiesBanner';
import WhyChooseBaanSaat from './WhyChooseBaanSaat';
import OurSolutions from './OurSolutions';
import ContactSection from './ContactSection';
import Footer from './Footer';
import CookiePopup from './CookiePopup';

function App() {
  const [showCookiePopup, setShowCookiePopup] = useState(false);

  useEffect(() => {
    // Check if user has seen the popup before
    const hasSeenCookiePopup = localStorage.getItem('hasSeenCookiePopup');
    
    if (!hasSeenCookiePopup) {
      setShowCookiePopup(true);
    }
  }, []);

  const handleCloseCookiePopup = () => {
    setShowCookiePopup(false);
    // Set flag in localStorage
    localStorage.setItem('hasSeenCookiePopup', 'true');
  };

  return (
    <>
      <Header/>
      <Hero/>
      <OurValues/>
      <SmartCitiesBanner/>
      <WhyChooseBaanSaat/>
      <OurSolutions/>
      <ContactSection/>
      <Footer/>
      {showCookiePopup && <CookiePopup onClose={handleCloseCookiePopup} />}
    </>
  );
}

export default App;