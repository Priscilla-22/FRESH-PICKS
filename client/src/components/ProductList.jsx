import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import { useNavigate } from 'react-router-dom';
function ProductList({
  name,
  price,
  image,
  showbutton,
  handleMouseEnter,
  handleMouseLeave,
  product,
}) {
  const navigate = useNavigate();
  const handleOpen = () => {
    navigate(`/Details/${product.id}`, { state: { product } });
  };
  return (
    <div>
      <Box
        className='box  hover:shadow-md px-4 py-4 w-64 mx-auto relative mb-2 border border-gray-100 rounded-lg ml-1'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={image}
          alt={name}
          className='w-full h-48 object-cover rounded-md'
        />
        <h1 className='text-lg font-semibold mt-2'>{name}</h1>
        <p className='text-green-700 font-bold text-lg'>Price: Ksh {price}</p>
        {showbutton && (
          <button
            onClick={handleOpen}
            className='btn w-full py-2 hover:bg-green-800 border-2 hover:text-white text-white font-bold bg-green-700'
          >
            View details
          </button>
        )}
      </Box>
    </div>
  );
}

export default ProductList;
