import React from 'react';
import { Icon } from '@iconify/react';

const WhyChooseBaanSaat = () => {
  const reasons = [
    {
      number: '1',
      title: 'Enhanced Quality of Life',
      description: 'Create a lively, efficient and vibrant environment.',
    },
    {
      number: '2',
      title: 'Data-Driven Decision Making',
      description: 'Use real-time data analytics to inform decision-making and improve city management efficiency.',
    },
    {
      number: '3',
      title: 'Improved Efficiency & Sustainability',
      description: 'Enhance city operations efficiency while promoting environmentally friendly practices.',
    },
    {
      number: '4',
      title: 'Community Participation',
      description: 'Promote community participation and cooperation in urban development.',
    },
    {
      number: '5',
      title: 'Advanced Technology Solutions',
      description: 'Leveraging cutting-edge smart technologies to drive innovation and improve urban infrastructure.',
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
        Why Choose BaanSaat?
      </h2>
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-start text-left">
              <div className="text-7xl font-bold text-pink-100 mb-2">{reason.number}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{reason.title}</h3>
              <p className="text-gray-500 text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img 
            src="/smart-city-illustration.png" 
            alt="Smart City Illustration" 
            className="max-w-[400px] md:max-w-[500px] lg:max-w-[600px] opacity-90"
          />
        </div>
      </div>
      <div className="text-center mt-12">
        <a 
          href="#discover-more" 
          className="inline-flex items-center px-6 py-3 border border-blue-300 text-blue-500 rounded-full hover:bg-blue-50 transition duration-300"
        >
          Discover More
          <Icon icon="mdi:arrow-right" className="ml-2" />
        </a>
      </div>
    </section>
  );
};

export default WhyChooseBaanSaat;