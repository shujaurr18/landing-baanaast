import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState("en");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    setActiveLanguage(lng);
    i18n.changeLanguage(lng);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white py-3">
      <div className="max-w-[1440px] mx-auto px-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">

          <img
            src={require("../src/assets/images/Logo (2).png")}
            alt="BaanSaat Logo"
            className="w-8 h-8"
          />
          <span className="text-[#4CAF50] text-xl">
            {t("header.brandName")}
          </span>
          </div>
               {/* Language Switcher */}
               <div className="flex mr-8">
            <button
              onClick={() => changeLanguage("en")}
              className={`px-4 py-1 rounded-l-full ${
                activeLanguage === "en"
                  ? "bg-gradient-to-b from-[#4CAF50] to-[#2196F3] text-white"
                  : "border"
              }  text-gray-600 text-sm `}
            >
              English
            </button>
            <button
              onClick={() => changeLanguage("thai")}
              className={`px-4 py-1 rounded-r-full ${
                activeLanguage === "thai"
                  ? "bg-gradient-to-b from-[#4CAF50] to-[#2196F3] text-white"
                  : "border"
              }  text-gray-600 text-sm `}
            >
              {t("header.thai")}
            </button>
          </div>

        </div>

        {/* Language Switcher for Mobile (Visible only on mobile) */}
        <div className="md:hidden flex items-center">
          <div className="flex">
            <button
              onClick={() => changeLanguage("en")}
              className={`px-4 py-1 rounded-l-full ${
                activeLanguage === "en"
                  ? "bg-gradient-to-b from-[#4CAF50] to-[#2196F3] text-white"
                  : "border"
              }  text-gray-600 text-sm `}
            >
              English
            </button>
            <button
              onClick={() => changeLanguage("thai")}
              className={`px-4 py-1 rounded-r-full ${
                activeLanguage === "thai"
                  ? "bg-gradient-to-b from-[#4CAF50] to-[#2196F3] text-white"
                  : "border"
              }  text-gray-600 text-sm `}
            >
              {t("header.thai")}
            </button>
          </div>
        </div>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center">
     
          {/* Navigation Links */}
          <nav className="flex items-center gap-8 mr-8">
            <a href="#solutions" className="text-gray-600">
              {t("header.solutions")}
            </a>
            <a href="#about" className="text-gray-600">
              {t("header.aboutUs")}
            </a>
            <a href="#contact" className="text-gray-600">
              {t("header.contactUs")}
            </a>
          </nav>

          {/* Get Started Button */}
          <button className="px-6 py-2 rounded-full bg-gradient-to-b from-[#4CAF50] to-[#2196F3] text-white">
            {t("header.getStarted")}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 focus:outline-none"
          >
            <Icon icon="mdi:menu" className="text-3xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white fixed inset-0 z-50 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-gray-600 focus:outline-none"
        >
          <Icon icon="mdi:close" className="text-3xl" />
        </button>

        {/* Mobile Navigation Links */}
        <nav className="flex flex-col items-center gap-8">
          <a
            href="#solutions"
            onClick={toggleMenu}
            className="text-gray-600 text-lg"
          >
            {t("header.solutions")}
          </a>
          <a
            href="#about"
            onClick={toggleMenu}
            className="text-gray-600 text-lg"
          >
            {t("header.aboutUs")}
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="text-gray-600 text-lg"
          >
            {t("header.contactUs")}
          </a>

          {/* Get Started Button */}
          <button className="mt-4 px-6 py-2 rounded-full bg-gradient-to-b from-[#4CAF50] to-[#2196F3] text-white">
            {t("header.getStarted")}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
