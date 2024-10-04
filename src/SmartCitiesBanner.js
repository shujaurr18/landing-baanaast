import React from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import Sustainable from "../src/assets/images/sustainable.png";
const SmartCitiesBanner = () => {
  const { t } = useTranslation();
  return (
    <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${Sustainable})` }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
      <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center px-4">
        <div className="flex items-center mb-4">
          <Icon
            icon="mdi:format-quote-open"
            className="text-white text-4xl mr-2 opacity-50"
          />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight">
          {t("quoteSection.quote")}
        </h2>
        <div className="flex items-center mt-2">
          <Icon
            icon="mdi:format-quote-close"
            className="text-white text-4xl ml-2 opacity-50"
          />
        </div>
        <a
          href="#learn-more"
          className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-opacity-20 hover:bg-opacity-30 backdrop-filter backdrop-blur-sm transition duration-300"
        >
          {t("quoteSection.learnMore")}
          <Icon icon="mdi:arrow-right" className="ml-2 text-xl" />
        </a>
      </div>
    </section>
  );
};

export default SmartCitiesBanner;
