import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DoneIcon from '@mui/icons-material/Done';
import { toast } from 'react-toastify';
import { Box } from '@mui/material';
import { Formik } from 'formik';
import Header from '../Components/HomePage/Header';
import Footer from '../Components/HomePage/Footer';

function ProductDetails() {
  const currentProduct = useLocation();
  const [isLoading, setLoading] = useState(false);
  const [category, setCategory] = useState([]);
  const [review, setReview] = useState({
    review: '',
  });
  const product = currentProduct.state?.product;
  const navigate = useNavigate();

  function AddCart(product) {
    if (!product) {
      console.error('No product data provided');
      return;
    }
    setLoading(true);
    const productData = {
      product_id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    };

    fetch(`http://127.0.0.1:5555/cart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Failed to add product to cart');
        }
      })
      .then((data) => {
        console.log('Product added:', data);
        toast.success('Product added successfully', { position: 'top-center' });
        // Fetch the updated cart data and display it on the current page
        fetchUpdatedCartData();
        // Navigate to the cart page after successful addition
        navigate('/cart');
      })
      .catch((error) => {
        console.error('Error adding product to cart:', error);
        toast.error('Error adding product to cart', { position: 'top-center' });
        setLoading(false); // Reset loading state on error
      });
  }

  function fetchUpdatedCartData() {
    fetch('http://127.0.0.1:5555/cart')
      .then((res) => res.json())
      .then((data) => {
        console.log('Updated cart data:', data);
        // Display the updated cart data on the current page
        //...
      })
      .catch((error) => {
        console.error('Error fetching updated cart data:', error);
      });
  }

  function handleChange(event) {
    setReview(event.target.value);
  }

  function handleSubmit(product) {
    return fetch(`http://127.0.0.1:5555/products/${product.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: product.id, review: review }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to update product review');
        }
        return response.json();
      })
      .catch((error) => {
        console.error('Error updating review:', error);
        throw error;
      });
  }

  useEffect(() => {
    fetch('http://127.0.0.1:5555/products')
      .then((res) => res.json())
      .then(setCategory)
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const filterCategories = category.filter((items) => {
    return items.category === product.category;
  });

  return (
    <div className='bg-gray-100'>
      <Header />
      <div className='max-w-6xl mx-auto p-5 mt-5 bg-white rounded-lg shadow-md'>
        <div className='flex items-center border-x-2 m-5 ml-10'>
          <img
            src={product.image}
            className='h-72 w-1/2 mr-6 rounded-lg'
            alt={product.name}
          />
          <div className='ml-20'>
            <h1 className='text-2xl font-bold'>{product.name}</h1>
            <p className='text-green-700 font-bold text-xl'>
              Price: Ksh {product.price}
            </p>
            <p className='mt-4 text-gray-600'>{product.description}</p>
            <h4 className='text-green-500 font-bold'>
              <DoneIcon /> in Stock
            </h4>
            <button
              onClick={() => AddCart(product)}
              className='text-center bg-green-600 text-white font-extrabold w-full py-3 mb-3 rounded-lg'
            >
              {isLoading ? 'Adding...' : 'Add to Cart'}
            </button>
            <form
              className='flex'
              onSubmit={(event) => handleSubmit(product, event)}
            >
              <textarea
                className='bg-slate-200 border-2 resize-none rounded-lg px-3 py-2 w-full'
                type='text'
                onChange={handleChange}
                name='review'
                placeholder='Add areview...'
              />
              <button className='btn h-10 p-2 mt-5 bg-blue-200 border-2 text-green-800 hover:text-white font-bold hover:bg-green-700 ml-2 rounded-lg'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <hr className='mt-6 mb-6' />
      <h1 className='text-center mt-6 text-2xl font-bold'>Related Products</h1>
      <div className='container flex justify-center items-center p-4'>
        {filterCategories.map((item) => (
          <Box key={item.id} className='m-10 w-full'>
            <img
              src={item.image}
              alt={item.name}
              className='h-50 w-50 rounded-lg'
            />
            <h1 className='text-2xl font-bold'>{item.name}</h1>
            <p className='text-green-700 font-bold text-xl'>
              Price: Ksh {item.price}
            </p>
            <button className='btn px-8 py-3 hover:bg-green-600 border-2 hover:text-white text-white font-bold bg-green-700 rounded-lg'>
              View Details
            </button>
          </Box>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetails;
