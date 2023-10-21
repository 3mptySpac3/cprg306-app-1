import React from 'react';

const Model = ({isOpen, onClose, children}) => {
  if (!isOpen) return null;

  return (
    <div className = "fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className = "bg-white p-4 rounded">
        {children}
        <button onClick={onClose} className="bg-gray-900 text-white p-2 ml-8 mb-4 rounded text-xl hover:bg-emerald-100 hover:text-gray-800 transition duration-1000">Close</button>
      </div>
    </div>
  );
};

export default Model;
