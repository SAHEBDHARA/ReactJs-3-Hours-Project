import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [filteredProducts, setFilteredProducts] = useState({});
  const categories = ['Electronics', 'Clothing', 'Books']; // Define your categories here

  useEffect(() => {
    // Retrieve product data from local storage
    const storedData = JSON.parse(localStorage.getItem('formData'));

    if (storedData) {
      // Group products by category
      const groupedProducts = {};

      for (const category of categories) {
        groupedProducts[category] = storedData.filter(
          (product) => product.category === category
        );
      }

      setFilteredProducts(groupedProducts);
    }
  }, [categories]);

  return (
    <div>
      <h2>Product List</h2>
      {categories.map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          <ul>
            {filteredProducts[category]?.map((product, index) => (
              <li key={index}>
                {product.productName} - ${product.sellingPrice}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
