import React from "react";
import { useTranslation } from "react-i18next";
const ValueCard = ({ icon, title, description }) => (
  <div className="bg-[#F5F5F5] p-8 rounded-2xl shadow-sm text-center">
    
    <div className="flex justify-center">


    {icon}

    </div>
    <h3 className="text-xl mt-6 mb-4">
      <span className="text-[#4CAF50] text-2xl font-semibold text-center">{title}</span>
      {/* <span className="text-[#2196F3]">{title.slice(-3)}</span> */}
    </h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const OurValues = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-3xl font-medium text-center mb-8">
          {t("valuesSection.ourValues")}
        </h2>

        {/* Description Card */}
        <div className="bg-[#F5F5F5] rounded-2xl shadow-sm p-8 mb-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <img
              src={require("../src/assets/images/Logo (2).png")}
              alt="BaanSaat Logo"
              className="w-10 h-10"
            />
            <span className="text-2xl">
              <span className="text-[#4CAF50]">Baan</span>
              <span className="text-[#2196F3]">{t("header.brandName").slice(-4)}</span> 
            </span>
          </div>
          <p className="text-center text-gray-600 max-w-4xl mx-auto">
            {t("valuesSection.description")}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ValueCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
              <path d="M20.4932 51.2411C41.7064 63.969 58.6768 46.9983 56.5557 15.1787C24.7364 13.0573 7.76661 30.0284 20.4932 51.2411ZM20.4932 51.2411C20.4929 51.2406 20.4934 51.2415 20.4932 51.2411ZM20.4932 51.2411L15.0059 56.7264M20.4932 51.2411L31.9764 39.7558" stroke="url(#paint0_linear_34011_1466)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              <defs>
              <linearGradient id="paint0_linear_34011_1466" x1="35.8705" y1="14.9993" x2="35.8705" y2="56.7264" gradientUnits="userSpaceOnUse">
              <stop stop-color="#4CAF50"/>
              <stop offset="1" stop-color="#2196F3"/>
              </linearGradient>
              </defs>
              </svg>
            }
            title={t("valuesSection.values.sustainability.title")}
            description={t("valuesSection.values.sustainability.description")}
          />
          <ValueCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
              <g clip-path="url(#clip0_34011_1507)">
              <path d="M46.6559 18.0637L46.8931 18.2757C48.4732 19.7432 49.7409 21.516 50.6188 23.488C51.5401 25.5574 52.0111 27.7989 52.0007 30.064C51.9964 31.0005 51.9098 31.9322 51.7433 32.8486C51.9093 31.9335 51.9956 31.0032 51.9999 30.0681C52.0103 27.8025 51.539 25.5606 50.6172 23.491C49.6962 21.4229 48.3463 19.574 46.6571 18.0668C46.5477 17.9684 46.4372 17.8717 46.3255 17.7766C46.4368 17.8707 46.5469 17.9664 46.6559 18.0637ZM42.0128 50.0003L42.3233 48.8816C42.1265 49.7329 42.0179 50.6046 42.0007 51.4832L42.0003 51.5027V50.0003H42.0128ZM30.4298 14.9951C32.6293 14.1789 34.9747 13.8588 37.2994 14.0488C36.8737 14.0154 36.4454 13.9991 36.0156 14.0003C35.3891 14.0003 34.7631 14.0351 34.1405 14.1046L34.1405 14.1046L34.1278 14.1061C31.0964 14.4641 28.2306 15.6818 25.8687 17.6155C23.5068 19.5492 21.7474 22.1181 20.798 25.0192C19.8486 27.9203 19.7488 31.0324 20.5106 33.9883C21.2573 36.8861 22.8014 39.5152 24.9659 41.578C23.1552 39.8682 21.7715 37.7557 20.9276 35.4109C20.0641 33.0113 19.7913 30.4391 20.1324 27.9118L20.1332 27.9055C20.5133 25.0207 21.6729 22.2941 23.4872 20.0193C25.3015 17.7444 27.7018 16.0073 30.4298 14.9951ZM29.9786 51.7315C29.914 50.6326 29.7248 49.5464 29.4158 48.4936C29.4246 48.5222 29.4334 48.5508 29.442 48.5794L29.8719 50.0003H29.9439L29.9786 51.7315ZM36.9181 31.8936L36.0003 32.218L35.0826 31.8936C35.381 31.9639 35.6888 32.0003 36.0003 32.0003C36.3119 32.0003 36.6197 31.9639 36.9181 31.8936Z" fill="#333333" stroke="url(#paint0_linear_34011_1507)" stroke-width="4"/>
              </g>
              <defs>
              <linearGradient id="paint0_linear_34011_1507" x1="35.9953" y1="11.9956" x2="35.9953" y2="60.0003" gradientUnits="userSpaceOnUse">
              <stop stop-color="#4CAF50"/>
              <stop offset="1" stop-color="#2196F3"/>
              </linearGradient>
              <clipPath id="clip0_34011_1507">
              <rect width="48" height="48" fill="white" transform="translate(12 12)"/>
              </clipPath>
              </defs>
              </svg>
            }
            title={t("valuesSection.values.innovation.title")}
            description={t("valuesSection.values.innovation.description")}
          />
          <ValueCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
              <path d="M43 23.25C43 27.116 39.866 30.25 36 30.25V34.25C42.0751 34.25 47 29.3251 47 23.25H43ZM36 30.25C32.134 30.25 29 27.116 29 23.25H25C25 29.3251 29.9249 34.25 36 34.25V30.25ZM29 23.25C29 19.384 32.134 16.25 36 16.25V12.25C29.9249 12.25 25 17.1749 25 23.25H29ZM36 16.25C39.866 16.25 43 19.384 43 23.25H47C47 17.1749 42.0751 12.25 36 12.25V16.25ZM27 43.25H45V39.25H27V43.25ZM45 57.25H27V61.25H45V57.25ZM27 57.25C23.134 57.25 20 54.116 20 50.25H16C16 56.3251 20.9249 61.25 27 61.25V57.25ZM52 50.25C52 54.116 48.866 57.25 45 57.25V61.25C51.0751 61.25 56 56.3251 56 50.25H52ZM45 43.25C48.866 43.25 52 46.384 52 50.25H56C56 44.1749 51.0751 39.25 45 39.25V43.25ZM27 39.25C20.9249 39.25 16 44.1749 16 50.25H20C20 46.384 23.134 43.25 27 43.25V39.25Z" fill="url(#paint0_linear_34011_1511)"/>
              <path d="M23.2564 31.166C22.7832 30.4058 21.8954 30 21 30C17.2721 30 14.25 26.9779 14.25 23.25C14.25 19.5221 17.2721 16.5 21 16.5C21.8954 16.5 22.7832 16.0942 23.2564 15.334C23.2773 15.3004 23.2984 15.2669 23.3196 15.2335C24.1074 13.9899 23.7082 12.2292 22.245 12.0681C21.8362 12.0231 21.4208 12 21 12C14.7868 12 9.75 17.0368 9.75 23.25C9.75 29.4632 14.7868 34.5 21 34.5C21.4208 34.5 21.8362 34.4769 22.245 34.4319C23.7082 34.2708 24.1074 32.5101 23.3196 31.2666C23.2984 31.2331 23.2773 31.1996 23.2564 31.166Z" fill="url(#paint1_linear_34011_1511)"/>
              <path d="M14.1249 54.9506C13.7843 54.3824 13.1832 54 12.5208 54H12C8.27208 54 5.25 50.9779 5.25 47.25C5.25 43.5221 8.27208 40.5 12 40.5H12.5208C13.1832 40.5 13.7843 40.1176 14.1249 39.5494C14.9562 38.1625 14.0541 36 12.4371 36H12C5.7868 36 0.75 41.0368 0.75 47.25C0.75 53.4632 5.7868 58.5 12 58.5H12.4371C14.0541 58.5 14.9562 56.3375 14.1249 54.9506Z" fill="url(#paint2_linear_34011_1511)"/>
              <path d="M48.6804 31.2666C47.8926 32.5101 48.2918 34.2708 49.755 34.4319C50.1638 34.4769 50.5792 34.5 51 34.5C57.2132 34.5 62.25 29.4632 62.25 23.25C62.25 17.0368 57.2132 12 51 12C50.5792 12 50.1638 12.0231 49.755 12.0681C48.2918 12.2292 47.8926 13.9899 48.6804 15.2334C48.7016 15.2669 48.7226 15.3004 48.7436 15.334C49.2168 16.0942 50.1046 16.5 51 16.5C54.7279 16.5 57.75 19.5221 57.75 23.25C57.75 26.9779 54.7279 30 51 30C50.1046 30 49.2168 30.4058 48.7436 31.166C48.7226 31.1996 48.7016 31.2331 48.6804 31.2666Z" fill="url(#paint3_linear_34011_1511)"/>
              <path d="M57.8751 54.9506C57.0438 56.3375 57.9459 58.5 59.5629 58.5H60C66.2132 58.5 71.25 53.4632 71.25 47.25C71.25 41.0368 66.2132 36 60 36H59.5629C57.9459 36 57.0438 38.1625 57.8751 39.5494C58.2157 40.1176 58.8168 40.5 59.4792 40.5H60C63.7279 40.5 66.75 43.5221 66.75 47.25C66.75 50.9779 63.7279 54 60 54H59.4792C58.8168 54 58.2157 54.3824 57.8751 54.9506Z" fill="url(#paint4_linear_34011_1511)"/>
              <defs>
              <linearGradient id="paint0_linear_34011_1511" x1="36" y1="14.25" x2="36" y2="59.25" gradientUnits="userSpaceOnUse">
              <stop stop-color="#4CAF50"/>
              <stop offset="1" stop-color="#2196F3"/>
              </linearGradient>
              <linearGradient id="paint1_linear_34011_1511" x1="36" y1="12" x2="36" y2="58.5" gradientUnits="userSpaceOnUse">
              <stop stop-color="#4CAF50"/>
              <stop offset="1" stop-color="#2196F3"/>
              </linearGradient>
              <linearGradient id="paint2_linear_34011_1511" x1="36" y1="12" x2="36" y2="58.5" gradientUnits="userSpaceOnUse">
              <stop stop-color="#4CAF50"/>
              <stop offset="1" stop-color="#2196F3"/>
              </linearGradient>
              <linearGradient id="paint3_linear_34011_1511" x1="36" y1="12" x2="36" y2="58.5" gradientUnits="userSpaceOnUse">
              <stop stop-color="#4CAF50"/>
              <stop offset="1" stop-color="#2196F3"/>
              </linearGradient>
              <linearGradient id="paint4_linear_34011_1511" x1="36" y1="12" x2="36" y2="58.5" gradientUnits="userSpaceOnUse">
              <stop stop-color="#4CAF50"/>
              <stop offset="1" stop-color="#2196F3"/>
              </linearGradient>
              </defs>
              </svg>
            }
            title={t("valuesSection.values.community.title")}
            description={t("valuesSection.values.community.description")}
          />
          <ValueCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
              <g clip-path="url(#clip0_34011_1518)">
              <path d="M22.8385 16.2812C20.8463 16.943 19.1133 18.2157 17.8858 19.9186C16.6582 21.6215 15.9986 23.668 16.0005 25.7672V36.0012C16.0005 51.1272 34.4005 59.4812 35.1885 59.8292L22.8385 16.2812ZM22.8385 16.2812L22.8385 16.2812L22.8385 16.2812ZM22.8385 16.2812L35.3685 12.1032L22.8385 16.2812ZM52.4896 21.089C51.5632 19.8041 50.2775 18.8249 48.7974 18.2726C50.279 18.8234 51.566 19.8025 52.4928 21.0882C53.4745 22.45 54.002 24.0866 54.0005 25.7654C54 24.0867 53.4714 22.4507 52.4896 21.089ZM36.0005 14.0007L41.185 15.7295L36.633 14.2119L36.0005 14.001L35.3679 14.2119L30.8133 15.7304L36.0005 14.0007ZM19.5082 21.0882C20.4356 19.8016 21.7238 18.8221 23.2066 18.2715C21.7252 18.8236 20.4384 19.8032 19.5113 21.089C18.5295 22.4507 18.001 24.0867 18.0005 25.7654C17.999 24.0866 18.5265 22.45 19.5082 21.0882ZM56.0005 36.0012V25.7672L36.8125 59.8292C37.6005 59.4812 56.0005 51.1272 56.0005 36.0012ZM35.0963 57.5632L35.5025 57.769C34.1529 57.1178 30.338 55.1383 26.5997 51.9377C22.0925 48.0788 18.0197 42.7304 18.0006 36.0484C18.0186 42.2984 21.626 47.2922 25.3685 50.8096C29.1462 54.3601 33.3362 56.6711 35.0963 57.5632ZM36.5363 57.7507L36.908 57.5615C38.665 56.6668 42.8541 54.3489 46.6314 50.7964C50.382 47.2689 54.0005 42.2604 54.0005 36.0012C54.0005 42.7052 49.9191 48.0697 45.4012 51.9377C41.6974 55.1089 37.9183 57.0813 36.5363 57.7507Z" fill="url(#paint0_linear_34011_1518)" stroke="url(#paint1_linear_34011_1518)" stroke-width="4"/>
              <path d="M42.6001 28.6006L34.2241 37.0007L29.7361 32.3206C29.556 32.1237 29.3383 31.9648 29.0958 31.8533C28.8533 31.7418 28.591 31.68 28.3243 31.6715C28.0575 31.6629 27.7918 31.7079 27.5427 31.8036C27.2936 31.8994 27.0662 32.044 26.8738 32.229C26.6815 32.414 26.5281 32.6356 26.4227 32.8808C26.3174 33.126 26.2621 33.3898 26.2603 33.6567C26.2585 33.9235 26.31 34.1881 26.412 34.4347C26.514 34.6813 26.6643 34.905 26.8541 35.0927L31.4661 39.8927C31.81 40.2642 32.2257 40.5621 32.6881 40.7683C33.1505 40.9746 33.6499 41.0849 34.1561 41.0927H34.2221C34.7182 41.0943 35.2097 40.9974 35.668 40.8075C36.1264 40.6177 36.5424 40.3386 36.8921 39.9867L45.4361 31.4426C45.6227 31.2564 45.7708 31.0353 45.8719 30.7918C45.9731 30.5484 46.0253 30.2874 46.0255 30.0238C46.0258 29.7601 45.9742 29.499 45.8736 29.2554C45.7729 29.0117 45.6253 28.7902 45.4391 28.6036C45.2529 28.417 45.0317 28.2689 44.7883 28.1678C44.5448 28.0666 44.2838 28.0144 44.0202 28.0142C43.7566 28.0139 43.4955 28.0655 43.2518 28.1662C43.0081 28.2668 42.7867 28.4144 42.6001 28.6006Z" fill="url(#paint2_linear_34011_1518)"/>
              </g>
              <defs>
              <linearGradient id="paint0_linear_34011_1518" x1="36.0005" y1="12.0007" x2="36.0005" y2="60.0015" gradientUnits="userSpaceOnUse">
              <stop stop-color="#4CAF50"/>
              <stop offset="1" stop-color="#2196F3"/>
              </linearGradient>
              <linearGradient id="paint1_linear_34011_1518" x1="36.0005" y1="12.0007" x2="36.0005" y2="60.0015" gradientUnits="userSpaceOnUse">
              <stop stop-color="#4CAF50"/>
              <stop offset="1" stop-color="#2196F3"/>
              </linearGradient>
              <linearGradient id="paint2_linear_34011_1518" x1="36.1429" y1="28.0142" x2="36.1429" y2="41.0927" gradientUnits="userSpaceOnUse">
              <stop stop-color="#4CAF50"/>
              <stop offset="1" stop-color="#2196F3"/>
              </linearGradient>
              <clipPath id="clip0_34011_1518">
              <rect width="48" height="48" fill="white" transform="translate(12 12)"/>
              </clipPath>
              </defs>
              </svg>

            }
            title={t("valuesSection.values.responsibility.title")}
            description={t("valuesSection.values.responsibility.description")}
          />
        </div>
      </div>
    </section>
  );
};

export default OurValues;
