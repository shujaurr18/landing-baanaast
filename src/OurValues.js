import React from 'react';

const ValueCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm">
    {icon}
    <h3 className="text-xl mt-6 mb-4">
      <span className="text-[#4CAF50]">{title.slice(0, -3)}</span>
      <span className="text-[#2196F3]">{title.slice(-3)}</span>
    </h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const OurValues = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-3xl font-medium text-center mb-8">Our Values</h2>

        {/* Description Card */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <img src="/logo.png" alt="BaanSaat Logo" className="w-10 h-10" />
            <span className="text-2xl">
              <span className="text-[#4CAF50]">Baan</span>
              <span className="text-[#2196F3]">Saat</span>
            </span>
          </div>
          <p className="text-center text-gray-600 max-w-4xl mx-auto">
            At BaanSaat, we are committed to transforming urban landscapes with cutting-edge smart city solutions. Our mission is to create sustainable, efficient, and resilient cities that enhance the quality of life for all residents.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ValueCard
            icon={
              <div className="flex">
                <svg className="w-8 h-8" viewBox="0 0 24 24">
                  <path fill="#4CAF50" d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                </svg>
                <svg className="w-8 h-8 -ml-4" viewBox="0 0 24 24">
                  <path fill="#2196F3" d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                </svg>
              </div>
            }
            title="Sustainability"
            description="Committed to environmentally friendly practices and long-term resource stewardship."
          />
          <ValueCard
            icon={
              <div className="flex">
                <svg className="w-8 h-8" viewBox="0 0 24 24">
                  <path fill="#4CAF50" d="M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21M12,4A5,5 0 0,0 7,9C7,11.05 8.23,12.81 10,13.58V16H14V13.58C15.77,12.81 17,11.05 17,9A5,5 0 0,0 12,4Z"/>
                </svg>
                <svg className="w-8 h-8 -ml-4" viewBox="0 0 24 24">
                  <path fill="#2196F3" d="M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21M12,4A5,5 0 0,0 7,9C7,11.05 8.23,12.81 10,13.58V16H14V13.58C15.77,12.81 17,11.05 17,9A5,5 0 0,0 12,4Z"/>
                </svg>
              </div>
            }
            title="Innovation"
            description="Utilize the latest technologies to deliver intelligent and scalable solutions."
          />
          <ValueCard
            icon={
              <div className="flex">
                <svg className="w-8 h-8" viewBox="0 0 24 24">
                  <path fill="#4CAF50" d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z"/>
                </svg>
                <svg className="w-8 h-8 -ml-4" viewBox="0 0 24 24">
                  <path fill="#2196F3" d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z"/>
                </svg>
              </div>
            }
            title="Community"
            description="Promote and strengthen community participation in urban transformation."
          />
          <ValueCard
            icon={
              <div className="flex">
                <svg className="w-8 h-8" viewBox="0 0 24 24">
                  <path fill="#4CAF50" d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.1 14.8,9.5V11C15.4,11 16,11.6 16,12.3V15.8C16,16.4 15.4,17 14.7,17H9.2C8.6,17 8,16.4 8,15.7V12.2C8,11.6 8.6,11 9.2,11V9.5C9.2,8.1 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,9.5V11H13.5V9.5C13.5,8.7 12.8,8.2 12,8.2Z"/>
                </svg>
                <svg className="w-8 h-8 -ml-4" viewBox="0 0 24 24">
                  <path fill="#2196F3" d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.1 14.8,9.5V11C15.4,11 16,11.6 16,12.3V15.8C16,16.4 15.4,17 14.7,17H9.2C8.6,17 8,16.4 8,15.7V12.2C8,11.6 8.6,11 9.2,11V9.5C9.2,8.1 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,9.5V11H13.5V9.5C13.5,8.7 12.8,8.2 12,8.2Z"/>
                </svg>
              </div>
            }
            title="Responsibility"
            description="Adhere to ethical standards and responsibility in all our projects."
          />
        </div>
      </div>
    </section>
  );
};

export default OurValues;