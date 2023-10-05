

"use client"

import React, { useState } from 'react';

const FoodForm = () => {

const [formData, setFormData] = useState({
  name: '',
  age: '',
  satisfaction: '',
  favoriteCategory: '',
});

const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData({ ...formData, [name]: value });
};

const handleSubmit = (event) => {
  event.preventDefault();
  alert("Thank you for your submission!" + JSON.stringify(formData, null, 2));
};

return (
  <div className="relative p-6 max-w-md mx-auto bg-gray-900 shadow-lg rounded-md">
    <h1 className="text-2xl mb-4">D' Greatest Food Q&A</h1>

    <form onSubmit={handleSubmit} className="overflow-y-auto max-h-[300px]">
      <label className="block mb-2">
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1"
        />
      </label>
      <label className="block mb-2">
        Age:
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1"
        />
      </label>
      <label className="block mb-2">
        How satisfied are you with your curent walmart?
        <select
          name="satisfaction"
          value={formData.satisfaction}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1">
          <option value="very satisfied">Very Satisfied</option>
          <option value="satisfied">Satisfied</option>
          <option value="neutral">Neutral</option>
          <option value="dissatisfied">Dissatisfied</option>
          <option value="very dissatisfied">Very Dissatisfied</option>
        </select>
      </label>
    </form>
  </div>
);
};

export default FoodForm;