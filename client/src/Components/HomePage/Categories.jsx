// Categories.jsx
import React from 'react';
import Category from './Category';
import axios from 'axios';

const Categories = () => {
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5555/products');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='py-16 bg-gray-100'>
      <div className='container mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-8'>Shop by Category</h2>
        <div className='flex flex-wrap'>
          {categories.map((category) => (
            <Category
              key={category.id}
              name={category.name}
              image={category.image}
              description={category.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
