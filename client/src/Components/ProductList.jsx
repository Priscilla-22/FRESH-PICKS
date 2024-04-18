import React from 'react'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import ProductDetails from './ProductDetails'
import { useNavigate } from 'react-router-dom'
function ProductList({name,price,image,showbutton,handleMouseEnter,handleMouseLeave,product}) {
   
    
  const navigate=useNavigate()
const handleOpen = () =>{
   
    navigate(`/Details/${product.id}`, { state: { product } })
};
  return (
    <div>
    <Box
      className="box hover:border-2 hover:shadow-md px-4 py-4 w-fit"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
    <img src={image} alt={name} width="250px" className='h-64' />
    <h1 className='text-2xl font-bold'>{name}</h1>
    <p className='text-green-700 font-bold text-xl'>Price: Ksh {price}</p>
    {showbutton && (
        <button onClick={handleOpen}  className='btn w-full py-3     hover:bg-white border-2 hover:text-green-800 text-white font-bold bg-green-700'>
        View details
    </button>
    )}

    </Box>
   
      
    </div>
  )
}

export default ProductList
