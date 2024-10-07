import React from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import SmartCityIllustration from "../src/assets/images/smartercity.jpg";
const WhyChooseBaanSaat = () => {
  const { t } = useTranslation();
  const reasons = [
    {
      number: "1",
      title: t("whyChooseUsSection.points.point1.title"),
      description: t("whyChooseUsSection.points.point1.description"),
    },
    {
      number: "2",
      title: t("whyChooseUsSection.points.point2.title"),
      description: t("whyChooseUsSection.points.point2.description"),
    },
    {
      number: "3",
      title: t("whyChooseUsSection.points.point3.title"),
      description: t("whyChooseUsSection.points.point3.description"),
    },
    {
      number: "4",
      title: t("whyChooseUsSection.points.point4.title"),
      description: t("whyChooseUsSection.points.point4.description"),
    },
    {
      number: "5",
      title: t("whyChooseUsSection.points.point5.title"),
      description: t("whyChooseUsSection.points.point5.description"),
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
        {t("whyChooseUsSection.title")}
      </h2>
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-start text-left">
              <div className="text-7xl font-bold text-pink-200 mb-2">
                {reason.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-500 text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            src={`${SmartCityIllustration}`}
            alt="Smart City Illustration"
            className="max-w-[200px] md:max-w-[500px] lg:max-w-[600px] opacity-20 -z-30"
          />
        </div>
      </div>
      <div className="text-center mt-12">
        <a
          href="#discover-more"
          className="inline-flex items-center px-6 py-3 border border-blue-300 text-blue-500 rounded-full hover:bg-blue-50 transition duration-300"
        >
          {t("whyChooseUsSection.discoverMore")}
          <Icon icon="mdi:arrow-right" className="ml-2" />
        </a>
      </div>
    </section>
  );
};

export default WhyChooseBaanSaat;
