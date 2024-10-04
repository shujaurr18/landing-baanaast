import React from 'react';
import { Icon } from '@iconify/react';

const ContactInfo = ({ icon, text, subText }) => (
  <div className="flex items-center bg-green-50 rounded-lg p-4 mb-4">
    <Icon icon={icon} className="text-2xl mr-4" style={{ color: text.startsWith('+') ? '#2196F3' : '#4CAF50' }} />
    <div>
      <p className="font-semibold" style={{ color: text.startsWith('+') ? '#2196F3' : '#4CAF50' }}>{text}</p>
      {subText && <p className="text-gray-600 text-sm">{subText}</p>}
    </div>
  </div>
);

const ContactSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Join Us in Building a Smarter, Greener Future.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <ContactInfo icon="mdi:phone" text="+668 1234 5678" subText="Phone#" />
          <ContactInfo icon="mdi:whatsapp" text="+668 1453 6660" />
          <ContactInfo icon="mdi:line" text="+668 1663 2332" />
          <ContactInfo icon="mdi:email-outline" text="info@baansaat.com" />
          <ContactInfo icon="mdi:map-marker" text="123 Smart City Avenue, Bangkok, Thailand" />
        </div>
        <div className="bg-green-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-blue-500 mb-4">Contact Us for Consultation</h3>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="Full Name" className="w-full p-2 rounded border border-gray-300" />
              <input type="email" placeholder="Email Address" className="w-full p-2 rounded border border-gray-300" />
            </div>
            <input type="text" placeholder="Subject" className="w-full p-2 rounded border border-gray-300 mb-4" />
            <textarea placeholder="Your Message" rows="4" className="w-full p-2 rounded border border-gray-300 mb-4"></textarea>
            <button type="submit" className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-full hover:from-green-500 hover:to-blue-600 transition duration-300 flex items-center">
              Send Message
              <Icon icon="mdi:send" className="ml-2" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;