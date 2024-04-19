import React, { useState, useEffect } from 'react';
import Category from './CategoryBar';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/HomePage/Header';
import Footer from '../Components/HomePage/Footer';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch('http://127.0.0.1:5555/cart')
      .then((res) => res.json())
      .then(
        (result) => {
          setCartItems(result);
        },
        (error) => {
          setError(error);
        }
      );
  }, []);

  function handleRemoveFromCart(itemId) {
    // Change parameter name to itemId
    fetch(`http://127.0.0.1:5555/cart/${itemId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw new Error('Failed to remove item from cart');
        }
        return res.json();
      })
      .then((data) => {
        setCartItems(cartItems.filter((item) => item.id !== itemId)); // Change id to itemId
        toast.info('Successfully removed item from cart', {
          position: 'bottom-left',
        });
      })
      .catch((error) => {
        setError(error.message);
      });
    window.location.reload();
  }
  function handleCheckOut() {
    navigate(`/checkout`, { state: cartItems });
  }

  return (
    <>
      <Header />
      <Category />
      <div className='container mx-auto mt-8'>
        <h1 className='text-center text-3xl text-green-600 font-bold'>Cart</h1>
        {/* {error && (
        //   <div className='text-red-500 text-center'>{error.toString()}</div>
        )} */}
        {!cartItems.length ? (
          <div className='text-center mt-8'>
            <div className='flex justify-center items-center'>
              <img
                src='https://cdn-icons-png.flaticon.com/512/3081/3081840.png'
                width='250px'
                className='text-center'
              />
            </div>
            <h2 className='text-5xl'>Your cart is empty</h2>
            <p>
              Proceed to shop to view some of our fresh from the farm products
            </p>
            <p>Happy shopping😊</p>
            <button
              onClick={() => navigate('/products')}
              className='px-8 py-3 bg-green-600 mt-4 mb-4 rounded-md text-white font-bold'
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className='cartProducts items-center mx-auto text-center'>
            <div className='flex justify-between font-bold mb-2'>
              <div>Product</div>
              <div>Quantity</div>
              <div>Price</div>
              <div>Total</div>
            </div>
            {cartItems.map((item) => (
              <div
                className='flex items-center justify-between border-b py-2'
                key={item.id}
              >
                <div className='flex items-center'>
                  <img
                    src={item.image}
                    alt={item.name}
                    className='w-16 h-16 mr-4'
                  />
                  <div className='block'>
                    <h1>{item.name}</h1>
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className='text-red-500'
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className='flex'>
                  <button className='border-2 rounded-md border-gray-300 px-3 py-3 text-2xl'>
                    -
                  </button>
                  <div className='border-2 border-gray-300 px-3 py-3 text-2xl'>
                    {item.total}
                  </div>
                  <button className='border-2 rounded-md border-gray-300 px-3 py-3 text-2xl'>
                    +
                  </button>
                </div>
                <div>Ksh. {item.price ? item.price : 'no price'}</div>
                <div>Ksh. {item.price ? item.price : 'no price'}</div>
              </div>
            ))}
            <div className='flex justify-between font-bold mb-2'>
              <div className='text-2xl'>Subtotal</div>
              <div>Ksh. {cartItems.reduce((a, b) => a + b.total, 0)}</div>
            </div>
            <button
              onClick={() => navigate('/products')}
              className='px-8 py-3 mt-5 bg-green-600 text-white font-bold'
            >
              Continue Shopping
            </button>
            <button
              onClick={handleCheckOut}
              className='px-8 py-3 m-5 bg-black text-white font-bold'
            >
              CheckOut
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Cart;
