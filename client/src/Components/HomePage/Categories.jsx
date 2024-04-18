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
        setCategories(response.data.slice(3, 7));
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
