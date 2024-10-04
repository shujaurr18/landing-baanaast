import React from "react";
import { Phone, MessageSquare, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto mt-9">
    <h1 className="text-3xl md:text-4xl font-bold text-center text-[#212121] mb-12">
      Join Us in Building a Smarter, Greener Future.
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <div className="mb-4 bg-[#E6FFE7] rounded-[24px] px-4 py-4 flex items-start">
          <Phone className="w-6 h-6 text-[#2196F3] mt-1 mr-3" />
          <div>
            <p className="text-[#2196F3] text-sm mb-2">Phone#</p>
            <p className="text-[#4CAF50] font-medium">+668 1234 5678</p>
          </div>
        </div>
        
        <div className="mb-4 bg-[#E6FFE7] rounded-[24px] px-4 py-4 flex items-start">
          <svg className="w-6 h-6 text-[#2196F3] mt-1 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.4876 3.36093 14.891 4 16.1272L3 21L7.87279 20C9.10904 20.6391 10.5124 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div>
            <p className="text-[#2196F3] text-sm mb-2">WhatsApp</p>
            <p className="text-[#4CAF50] font-medium">+668 1453 6660</p>
          </div>
        </div>
        
        <div className="mb-4 bg-[#E6FFE7] rounded-[24px] px-4 py-4 flex items-start">
          <MessageSquare className="w-6 h-6 text-[#2196F3] mt-1 mr-3" />
          <div>
            <p className="text-[#2196F3] text-sm mb-2">Line Messenger</p>
            <p className="text-[#4CAF50] font-medium">+668 1663 2332</p>
          </div>
        </div>
        
        <div className="mb-4 bg-[#E6FFE7] rounded-[24px] px-4 py-4 flex items-start">
          <Mail className="w-6 h-6 text-[#2196F3] mt-1 mr-3" />
          <div>
            <p className="text-[#2196F3] text-sm mb-2">Email</p>
            <p className="text-[#4CAF50] font-medium">info@baansaat.com</p>
          </div>
        </div>
        
        <div className="mb-4 bg-[#E6FFE7] rounded-[24px] px-4 py-4 flex items-start">
          <MapPin className="w-6 h-6 text-[#2196F3] mt-1 mr-3" />
          <div>
            <p className="text-[#2196F3] text-sm mb-2">Address</p>
            <p className="text-[#4CAF50] font-medium">123 Smart City Avenue, Bangkok, Thailand</p>
          </div>
        </div>
      </div>

      <div className="bg-[#E6FFE7] rounded-[24px] p-6">
        <h3 className="text-xl font-medium text-[#2196F3] mb-6">
          Contact Us for Consultation
        </h3>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Type here..."
                className="w-full p-3 rounded-lg border border-gray-200 bg-white"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Email Address</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full p-3 rounded-lg border border-gray-200 bg-white"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2">Subject</label>
            <input
              type="text"
              placeholder="Type here..."
              className="w-full p-3 rounded-lg border border-gray-200 bg-white"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm mb-2">Your Message</label>
            <textarea
              placeholder="Write your message here..."
              rows="4"
              className="w-full p-3 rounded-lg border border-gray-200 bg-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-t from-[#4CAF50] to-[#2196F3] text-white px-6 py-3 rounded-full flex items-center justify-center gap-2"
          >
            Send Message
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
    </section>
  );
};

export default ContactSection;