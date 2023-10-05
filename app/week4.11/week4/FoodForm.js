

"use client"

import React, { useState } from 'react';

const FoodForm = () => {

const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  age: '',
  satisfaction: '',
  favoriteCategory: '',
});

const [errors, setErrors] = useState({
  firstName: '',
  lastName: '',
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

  let fillErrors = {
    firstName: '',
    lastName: '',
    age: '',
    satisfaction: '',
    favoriteCategory: '',
  }

  if (!formData.firstName) fillErrors.firstName = 'I need your government name❗';
  if (!formData.lastName) fillErrors.lastName = 'I need your government name❗';
  if (!formData.age) fillErrors.age = 'Stop lying❗';
  if (!formData.satisfaction) fillErrors.satisfaction = 'You must be satisfied❗';
  if (!formData.favoriteCategory) fillErrors.favoriteCategory = 'You must be stupid❗';

  setErrors(fillErrors);

  if (Object.values(fillErrors).some((error) => error !== '')) return;
  
  alert("Thank you " + formData.firstName + " " + formData.lastName + " for your submission!" + "\n Seems like you are " + formData.age + ". DAMN! \nYour Preferences:\n" + JSON.stringify(formData, null, 2));
};

return (
  <div className="relative p-6 max-w-md mx-auto bg-cyan-400 rounded-md mt-8">
    <h1 className="text-2xl mb-4">D' Greatest Food Q&A</h1>

    <form onSubmit={handleSubmit} className="overflow-y-auto max-h-[300px]">
      <label className="block mb-2">
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1 text-black"
          placeholder='John'
        />
        {errors.firstName && <p className="text-red-400 bg-gray-700 m-2 border rounded justify-center flex " >{errors.firstName}</p>}
      </label>
      <label className="block mb-2">
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1 text-black"
          placeholder='Doe'
        />
        {errors.lastName && <p className="text-red-400 bg-gray-700 m-2 border rounded justify-center flex ">{errors.lastName}</p>}
      </label>
      <label className="block mb-2">
        Age:
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1 text-black"
          placeholder='100'
        />
        {errors.age && <p className="text-red-400 bg-gray-700 m-2 border rounded justify-center flex ">{errors.age}</p>}
      </label>
      <label className="block mb-2">
        How satisfied are you with your curent walmart?
        <select
          name="satisfaction"
          value={formData.satisfaction}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1 text-black">
          <option value="" disabled>Select an option</option>
          <option value="very satisfied">God's gift to earth</option>
          <option value="satisfied">Aight!</option>
          <option value="neutral">Neutral</option>
          <option value="dissatisfied">Dissatisfied</option>
          <option value="very dissatisfied">I'd rather die!</option>
        </select>
        {errors.satisfaction && <p className="text-red-400 bg-gray-700 m-2 border rounded justify-center flex ">{errors.satisfaction}</p>}
      </label>
      <label className="block mb-2">
        What is your favorite category of food?
        <select
          name="favoriteCategory"
          value={formData.favoriteCategory}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1 text-black">
          <option value="" disabled>Category</option>
          <option value="fruits">Fruits</option>
          <option value="vegetables">Vegetables</option>
          <option value="meat">Meat</option>
          <option value="dairy">Dairy</option>
          <option value="grains">Grains</option>
          <option value="nuts">Snacks</option>
          <option value="drinks">Bevies</option>
          <option value="other">Other</option>
        </select>
        {errors.favoriteCategory && <p className="text-red-400 bg-gray-700 m-2 border rounded justify-center flex ">{errors.favoriteCategory}</p>}
      </label>
      <button type="submit" className=" p-2 mt-4 bg-white text-black rounded hover:text-white hover:bg-black transition duration-1000">
        Full Send!
      </button>
    </form>
  </div>
);
};

export default FoodForm;