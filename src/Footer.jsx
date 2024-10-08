import React from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#F5F5F5] py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src={require("../src/assets/images/Logo (2).png")}
            alt="BaanSaat Logo"
            className="h-12 w-auto mr-4"
          />
          <span className="text-2xl font-bold text-green-500">
            {t("header.brandName")}
          </span>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <div>
            <h4 className="font-semibold mb-2">{t("footer.quickLinks")}</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-gray-600 hover:text-green-500">
                  {t("footer.links.home")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-500">
                  {t("footer.links.solutions")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-500">
                  {t("footer.links.testimonials")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{t("footer.info")}</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-gray-600 hover:text-green-500">
                  {t("footer.links.aboutUs")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-500">
                  {t("footer.links.contactUs")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{t("footer.social")}</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <Icon  icon="mdi:linkedin" className="text-primary text-2xl" />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-500">
                <Icon  icon="mdi:instagram" className="text-primary text-2xl" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-400">
                <Icon  icon="mdi:alpha-x-circle" className="text-primary text-2xl" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Icon  icon="mdi:facebook" className="text-primary text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 text-sm">
        {t("footer.rights")}
      </div>
    </footer>
  );
};

export default Footer;
