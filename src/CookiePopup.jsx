// CookiePopup.js
import React from 'react';

const CookiePopup = ({ onClose }) => {
  return (
    <div className="fixed bottom-4 left-4 right-4 md:max-w-md md:left-4 bg-white p-4 rounded-lg shadow-lg z-50 border border-gray-200">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <p className="text-gray-800 font-medium mb-1">Cookie Notice</p>
          <p className="text-sm text-gray-600">We don't use any cookies on this website.</p>
        </div>
        <button 
          onClick={onClose}
          className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default CookiePopup;