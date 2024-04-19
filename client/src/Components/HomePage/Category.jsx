
import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Category = ({ id }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.npoint.io/c154600ea24f7697608e'
        );
        const product = response.data.find((p) => p.id === id);
        setProduct(product);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col'>
      <div className='flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow-sm'>
        <a href='#' className='flex flex-wrap no-underline hover:no-underline'>
          <p className='w-full font-bold  text-gray-600 text-xl md:text-xl px-6'>
            {product.category}
          </p>
          <div className='w-full text-sm font-bold  text-gray-800 px-6'>
            {product.description}
          </div>
        </a>
      </div>
      <div className='flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6'>
        <div className='flex items-center justify-start'>
          <img
            src={product.image}
            alt={product.name}
            className='w-12 h-12 rounded-full mr-4'
          />
          <span className='font-bold text-gray-800'>Learn More</span>
        </div>
      </div>
    </div>
  );
};

Category.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Category;


