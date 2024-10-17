import React from "react";
import { useTranslation } from "react-i18next";
import Banner from "../src/assets/images/banner.png";
import { Icon } from '@iconify/react';
import { Compass, Contact, Phone } from "lucide-react";
const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative h-[calc(100vh)] sm:h-[calc(100vh-80px)]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative pt-5 container mx-auto px-6 h-full flex flex-col justify-end items-center text-center">
      <h1 className="text-6xl sm:text-8xl  font-bold text-white mb-[200px] sm-[140px] ">
          {t("heroSection.SMART")}
        </h1>
        <h1 className="text-2xl sm:text-6xl font-bold text-white mb-6 ">
          {t("heroSection.title")}
        </h1>

        <p className="text-md sm:text-xl text-white mb-10">{t("heroSection.subtitle")}</p>

        <div className="flex gap-4 flex-wrap justify-center ">
         <a href="#solutions"  >
          <button 
            className="px-8 py-3 flex-1 sm:flex-none bg-gradient-to-b from-[#4CAF50] to-[#2196F3] text-white rounded-full hover:from-[#43A047] hover:to-[#1976D2] transition-colors">
            {t("heroSection.exploreSolutions")}
          </button>
              </a>
              <a href="#contactUs" 
              // className="flex-1"
              >

          <button className="px-14 py-3 flex-1 sm:flex-none text-center justify-center bg-[#424242]/80 text-white rounded-full hover:bg-[#424242]/90 transition-colors flex">
          <span>

          <Phone className="w-5 h-5 mr-2" /> 
          </span>

          {t("heroSection.contactUs")}
          </button>
          </a>
        </div>
        <br/>
      </div>
    </section>
  );
};

export default Hero;
