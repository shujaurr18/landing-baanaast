// src/components/Header.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = ({ changeLanguage }) => {
  const { t } = useTranslation();

  return (
    <header className="bg-white py-3">
      <div className="max-w-[1440px] mx-auto px-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img src={require('../src/assets/images/Logo (2).png')} alt="BaanSaat Logo" className="w-8 h-8" />
          <span className="text-[#4CAF50] text-xl">BaanSaat</span>
        </div>

        {/* Right Section */}
        <div className="flex items-center">
          {/* Language Switcher */}
          <div className="flex mr-8">
            <button 
              className="px-4 py-1 rounded-l-full bg-[#2196F3] text-white text-sm border border-[#2196F3]"
            >
              English
            </button>
            <button 
              className="px-4 py-1 rounded-r-full text-gray-600 text-sm border border-l-0 border-gray-200 bg-white"
            >
              Thai
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-8 mr-8">
            <a href="#solutions" className="text-gray-600">Solutions</a>
            <a href="#about" className="text-gray-600">About Us</a>
            <a href="#contact" className="text-gray-600">Contact Us</a>
          </nav>

          {/* Get Started Button */}
          <button 
            className="px-6 py-2 rounded-full bg-gradient-to-r from-[#4CAF50] to-[#2196F3] text-white"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;