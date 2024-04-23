import React, { useState, useEffect } from 'react';
import Category from './CategoryBar';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/HomePage/Header';
import Footer from '../Components/HomePage/Footer';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { removeFromCart,incrementItems,decrementItems,clearCart } from '../features/CartSlice';
function Cart() {
//   const [cartItems, setCartItems] = useState([]);
  const cart = useSelector((state) => state.cart);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
const dispatch=useDispatch()
//   

function handleRemoveFromCart(itemId) {
    fetch(`/cart/${itemId}`,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })

     .then((res) => res.json())
  dispatch(removeFromCart(itemId));
}
function handleIncrement(itemId) {
    dispatch(incrementItems(itemId));
}
function handleDecrement(itemId) {
    dispatch(decrementItems(itemId));
}
function handleRemoveFromCart(itemId) {
    dispatch(removeFromCart(itemId));
}
function ClearCart(){
    dispatch(clearCart())
}

  function handleCheckOut() {
    navigate(`/checkout`, { state: cart.cartItems });
  }

  return (
    <>
      <Header />
      {/* <Category /> */}
      <div className='container mx-auto mt-8'>
        <h1 className='text-center text-3xl text-green-600 font-bold'>Cart</h1>
        {/* {error && (
        //   <div className='text-red-500 text-center'>{error.toString()}</div>
        )} */}
        {!cart.cartItems.length ? (
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
            {cart.cartItems.map((item) => (
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
                  <button onClick={()=>handleDecrement(item.id)} className='border-2 rounded-md border-gray-300 px-3 py-3 text-2xl'>
                    -
                  </button>
                  <div className='border-2 border-gray-300 px-3 py-3 text-2xl'>
                    {item.cartQuantity}
                  </div>
                  <button onClick={()=>handleIncrement(item.id) }className='border-2 rounded-md border-gray-300 px-3 py-3 text-2xl'>
                    +
                  </button>
                </div>
                <div>Ksh. {item.price ? item.price : 'no price'}</div>
                <div>Ksh. {item.price * item.cartQuantity}</div>
              </div>
            ))}
            <div className='flex justify-between font-bold mb-2'>
              <div className='text-2xl'>Subtotal</div>
              <div>Ksh.{cart.cartTotalAmount}</div>
              
              
            </div>
            <button onClick={ClearCart} className='px-8 py-3 bg-red-700 text-white rounded-sm mx-3 font-bold'>Clear Cart</button>
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