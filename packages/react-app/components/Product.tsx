import React, { useState, useEffect } from 'react';
import { Product } from '../types'; // Import the Product type definition

const Product: React.FC = () => {
  // State to store the list of products
  const [products, setProducts] = useState<Product[]>([]);

  // Function to fetch products from the backend
  const fetchProducts = async () => {
    try {
      // Make a request to fetch products from the backend
      const response = await fetch('/api/products'); // Replace '/api/products' with the actual API endpoint
      if (response.ok) {
        const data = await response.json();
        setProducts(data.products); // Assuming the response contains an array of products
      } else {
        console.error('Failed to fetch products:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Fetch products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            {/* Add additional product details as needed */}
          </li>
        ))}
      </ul>
      {/* Add admin actions here, e.g., add, edit, delete product buttons */}
    </div>
  );
};

export default Product;
