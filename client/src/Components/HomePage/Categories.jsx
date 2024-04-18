<<<<<<< HEAD
import { useState, useEffect } from 'react';
import Category from './Category';
import axios from 'axios';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.npoint.io/c154600ea24f7697608e'
        );
        setCategories(response.data.slice(0, 4));
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='py-16 bg-gray-100'>
      <div className='container mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-5'>Shop by Category</h2>
        <div className='flex flex-wrap'>
          {categories.map((category) => (
            <Category key={category.id} id={category.id} />
=======

import Category from './Category';

const Categories = () => {
  const categories = [
    {
      name: 'Fresh Produce',
      image: 'https://source.unsplash.com/random/100x100?vegetables',
      description: 'Get the freshest fruits and vegetables delivered straight to your door.'
    },
    {
      name: 'Meat and Seafood',
      image: 'https://source.unsplash.com/random/100x100?meat',
      description: 'Experience high-quality meat and seafood from trusted sources.'
    },
    {
      name: 'Pantry Staples',
      image: 'https://source.unsplash.com/random/100x100?pantry',
      description: 'Stock up on the essentials like pasta, rice, and canned goods.'
    },
    {
      name: 'Bakery Items',
      image: 'https://source.unsplash.com/random/100x100?bakery',
      description: 'Treat yourself to freshly baked bread, pastries, and more.'
    },
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Shop by Category</h2>
        <div className="flex flex-wrap">
          {categories.map((category) => (
            <Category
              key={category.name}
              name={category.name}
              image={category.image}
              description={category.description}
            />
>>>>>>> 24d4364 (feat: initial homepage  structure)
          ))}
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Categories;
=======
export default Categories;
>>>>>>> 24d4364 (feat: initial homepage  structure)
