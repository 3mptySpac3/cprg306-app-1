import React from 'react';

const Model = ({isOpen, onClose, children, image}) => {
  if (!isOpen) return null;

  return (
    <div className = "fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-70 flex items-center justify-center">
      <div className = "bg-white p-4 rounded ">
      {image && <img src={image} alt="Item Image" className="max-w-md max-h-md mx-auto" />}
        {children}
        <button onClick={onClose} className="bg-gray-900 text-white p-2 mb-4 rounded text-xs hover:bg-emerald-100 hover:text-gray-800 transition duration-1000 mt-2">&lt;</button>
      </div>
    </div>
  );
};

export default Model;
