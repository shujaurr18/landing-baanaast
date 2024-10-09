import React, { useState } from "react";
import { Phone, MessageSquare, Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { notification } from "antd";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJekwf6neJZp7RacaV_o1P8tqhr2HLLpw",
  authDomain: "baansaat-af46e.firebaseapp.com",
  projectId: "baansaat-af46e",
  storageBucket: "baansaat-af46e.appspot.com",
  messagingSenderId: "1093462346618",
  appId: "1:1093462346618:web:9f574287447fff6a74e4c3",
  measurementId: "G-EVQHBZ2X5F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ContactSection = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Basic form validation
    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
      notification.error({
        message: t('contactSection.errorMessage.title'),
        description: t('contactSection.errorMessage.allFieldsRequired'),
      });
      setLoading(false);
      return;
    }

    try {
      await addDoc(collection(db, "contacts"), formData);
      notification.success({
        message: t('contactSection.successMessage.title'),
        description: t('contactSection.successMessage.description'),
      });
      setFormData({ fullName: "", email: "", subject: "", message: "" });
    } catch (error) {
      notification.error({
        message: t('contactSection.errorMessage.title'),
        description: t('contactSection.errorMessage.description'),
      });
    }
    setLoading(false);
  };

  return (
    <section id="contactUs" className="py-16 px-4 md:px-8 max-w-7xl mx-auto mt-9">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#212121] mb-12">
        {t('contactSection.title')}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-4 bg-[#E6FFE7] rounded-[24px] px-4 py-4 flex items-start">
            <Phone className="w-6 h-6 text-[#2196F3] mt-1 mr-3" />
            <div>
              <p className="text-[#2196F3] text-sm mb-2">{t('contactSection.contactForm.Phone')} # </p>
              <p className="text-[#4CAF50] font-medium">{t('contactSection.contactInfo.phone1')}</p>
            </div>
          </div>
          
          <div className="mb-4 bg-[#E6FFE7] rounded-[24px] px-4 py-4 flex items-start">
            <svg className="w-6 h-6 text-[#2196F3] mt-1 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.4876 3.36093 14.891 4 16.1272L3 21L7.87279 20C9.10904 20.6391 10.5124 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div>
              <p className="text-[#2196F3] text-sm mb-2">{t('contactSection.contactForm.WhatsApp')}</p>
              <p className="text-[#4CAF50] font-medium">{t('contactSection.contactInfo.phone2')}</p>
            </div>
          </div>
          
          <div className="mb-4 bg-[#E6FFE7] rounded-[24px] px-4 py-4 flex items-start">
            <MessageSquare className="w-6 h-6 text-[#2196F3] mt-1 mr-3" />
            <div>
              <p className="text-[#2196F3] text-sm mb-2">{t('contactSection.contactForm.LineMessenger')}</p>
              <p className="text-[#4CAF50] font-medium">{t('contactSection.contactInfo.phone3')}</p>
            </div>
          </div>
          
          <div className="mb-4 bg-[#E6FFE7] rounded-[24px] px-4 py-4 flex items-start">
            <Mail className="w-6 h-6 text-[#2196F3] mt-1 mr-3" />
            <div>
              <p className="text-[#2196F3] text-sm mb-2">{t('contactSection.contactForm.Email')}</p>
              <p className="text-[#4CAF50] font-medium">{t('contactSection.contactInfo.email')}</p>
            </div>
          </div>
          
          <div className="mb-4 bg-[#E6FFE7] rounded-[24px] px-4 py-4 flex items-start">
            <MapPin className="w-6 h-6 text-[#2196F3] mt-1 mr-3" />
            <div>
              <p className="text-[#2196F3] text-sm mb-2">{t('contactSection.contactForm.Address')}</p>
              <p className="text-[#4CAF50] font-medium">{t('contactSection.contactInfo.address')}</p>
            </div>
          </div>
        </div>

        <div className="bg-[#E6FFE7] rounded-[24px] p-6">
          <h3 className="text-xl font-medium text-[#2196F3] mb-6">
            {t('contactSection.contactForm.title')}
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm mb-2">{t('contactSection.contactForm.fullName')}</label>
                <input
                required
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Type here..."
                  className="w-full p-3 rounded-lg border border-gray-200 bg-white"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">{t('contactSection.contactForm.emailAddress')}</label>
                <input
                required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="example@email.com"
                  className="w-full p-3 rounded-lg border border-gray-200 bg-white"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-2">{t('contactSection.contactForm.subject')}</label>
              <input
              required
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Type here..."
                className="w-full p-3 rounded-lg border border-gray-200 bg-white"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm mb-2">{t('contactSection.contactForm.message')}</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Write your message here..."
                rows="4"
                className="w-full p-3 rounded-lg border border-gray-200 bg-white"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-t from-[#4CAF50] to-[#2196F3] text-white px-6 py-3 rounded-full flex items-center justify-center gap-2"
            >
              {loading ? t('contactSection.contactForm.sending') : t('contactSection.contactForm.sendMessage')}
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