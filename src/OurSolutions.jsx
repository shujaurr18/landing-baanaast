import React from 'react';
import { Icon } from '@iconify/react';

const SolutionCard = ({ icon, title, description }) => (
  <div className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg">
    <Icon icon={icon} className="text-4xl mb-4" style={{ color: title === 'Waste Management' || title === 'Public Safety' ? '#4CAF50' : '#2196F3' }} />
    <h3 className="text-lg font-semibold mb-2" style={{ color: title === 'Waste Management' || title === 'Public Safety' ? '#4CAF50' : '#2196F3' }}>{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const OurSolutions = () => {
  const solutions = [
    {
      icon: 'mdi:trash-can-outline',
      title: 'Waste Management',
      description: 'A waste collection and recycling system that improves efficiency and reduces environmental impact.',
    },
    {
      icon: 'mdi:flash-outline',
      title: 'Energy Management',
      description: 'Smart energy solutions that promote the efficient use and utilization of renewable energy.',
    },
    {
      icon: 'mdi:train-car',
      title: 'Transportation',
      description: 'Intelligent transportation systems designed to improve traffic and public transport efficiency.',
    },
    {
      icon: 'mdi:shield-check-outline',
      title: 'Public Safety',
      description: 'Advanced monitoring and emergency response technology for the safety of all citizens.',
    },
  ];

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/city-background.jpg')" }}>
        <div className="absolute inset-0 bg-white opacity-80"></div>
      </div>
      <div className="relative container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>
        <div className="text-center">
          <a 
            href="#discover-more" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full hover:from-green-500 hover:to-blue-600 transition duration-300"
          >
            Discover More
            <Icon icon="mdi:arrow-right" className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;