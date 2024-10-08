import React from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const SolutionCard = ({ icon, title, description, color }) => (
  <div className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg text-center">
    <div className="text-center flex justify-center">

    <Icon
      icon={icon}
      className="text-4xl  mb-4"
      style={{
        color: color === "green" ? "#4CAF50" : "#2196F3",
      }}
      />
      </div>
    <h3
      className="text-lg font-semibold mb-2"
      style={{
        color: color === "green" ? "#4CAF50" : "#2196F3",
      }}
    >
      {title}
    </h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const OurSolutions = () => {
  const { t } = useTranslation();
  const solutions = [
    {
      icon: "mdi:trash-can-outline",
      title: t("solutionsSection.solutions.wasteManagement.title"),
      description: t("solutionsSection.solutions.wasteManagement.description"),
      // color: "green",
    },
    {
      icon: "mdi:flash-outline",
      title: t("solutionsSection.solutions.energyManagement.title"),
      description: t("solutionsSection.solutions.energyManagement.description"),
    },
    {
      icon: "mdi:train-car",
      title: t("solutionsSection.solutions.transportation.title"),
      description: t("solutionsSection.solutions.transportation.description"),
    },
    {
      icon: "mdi:shield-check-outline",
      title: t("solutionsSection.solutions.publicSafety.title"),
      description: t("solutionsSection.solutions.publicSafety.description"),
      // color: "green",
    },
  ];

  return (
    <section className="relative py-16 overflow-hidden" 
    id="exploreSolutions" >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/city-background.jpg')" }}
      >
        <img src={require('../src/assets/images/image 34 (1).png')} className="w-full" alt="" />
        <div className="absolute inset-0 bg-white opacity-90"></div>
      </div>
      <div className="relative container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          {t("solutionsSection.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {solutions.map((solution, index) => (
            <SolutionCard color={'#2196F3'} key={index} {...solution} />
          ))}
        </div>
        <div className="text-center">
       
       
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;
