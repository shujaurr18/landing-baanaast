import React from 'react';
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer className="bg-white py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <img src="/baansaat-logo.png" alt="BaanSaat Logo" className="h-12 w-auto mr-4" />
          <span className="text-2xl font-bold text-green-500">BaanSaat</span>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li><a href="#" className="text-gray-600 hover:text-green-500">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-500">Solutions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-500">Testimonials</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Info</h4>
            <ul className="space-y-1">
              <li><a href="#" className="text-gray-600 hover:text-green-500">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-500">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Socials</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-500"><Icon icon="mdi:linkedin" className="text-2xl" /></a>
              <a href="#" className="text-gray-600 hover:text-pink-500"><Icon icon="mdi:instagram" className="text-2xl" /></a>
              <a href="#" className="text-gray-600 hover:text-blue-400"><Icon icon="mdi:twitter" className="text-2xl" /></a>
              <a href="#" className="text-gray-600 hover:text-blue-600"><Icon icon="mdi:facebook" className="text-2xl" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 text-sm">
        © 2024 BaanSaat. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;