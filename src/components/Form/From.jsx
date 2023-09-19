import React, { useState } from 'react';

const Form = () => {
  const initialFormData = {
    productId: '',
    sellingPrice: '',
    productName: '',
    category: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setSelectedCategory(value);
    setFormData({ ...formData, category: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve existing form data from local storage or initialize an empty array
    const existingFormData = JSON.parse(localStorage.getItem('formData')) || []; 
    // console.log(LocalStorateItems)
    // const existingFormData = formData;


    existingFormData.push(formData)

    localStorage.setItem('formData', JSON.stringify(existingFormData));

    console.log('Form data saved to local storage:', existingFormData);

    setFormData(initialFormData);
    setSelectedCategory('');
  };

  return (
    <div>
      <h2>Product Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="productId">Product ID:</label>
          <input
            type="number"
            id="productId"
            name="productId"
            value={formData.productId}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="sellingPrice">Selling Price:</label>
          <input
            type="number"
            id="sellingPrice"
            name="sellingPrice"
            value={formData.sellingPrice}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">Select a category</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Books">Books</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
