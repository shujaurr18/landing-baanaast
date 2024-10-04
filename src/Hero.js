import React from "react";
import { useTranslation } from "react-i18next";
import Banner from "../src/assets/images/banner.png";
const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative h-[calc(100vh-80px)]">
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

      <div className="relative container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-6xl font-bold text-white mb-6 max-w-[1000px]">
          {t("heroSection.title")}
        </h1>

        <p className="text-xl text-white mb-10">{t("heroSection.subtitle")}</p>

        <div className="flex gap-4">
          <button className="px-8 py-3 bg-gradient-to-r from-[#4CAF50] to-[#2196F3] text-white rounded-full hover:from-[#43A047] hover:to-[#1976D2] transition-colors">
            {t("heroSection.exploreSolutions")}
          </button>

          <button className="px-8 py-3 bg-[#424242]/80 text-white rounded-full hover:bg-[#424242]/90 transition-colors">
            {t("heroSection.contactUs")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
