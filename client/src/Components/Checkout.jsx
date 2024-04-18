import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Components/HomePage/Header';
import Footer from '../Components/HomePage/Footer';
function Checkout() {
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:5555/cart')
            .then(res => res.json())
            .then(setCartItems);
    }, []);

    return (
        <>
        <Header />
           <div className="container mx-auto mt-8">
            {!cartItems.length ? (
                <div className="text-center">
                    <div className="text-2xl text-red-600 font-bold mb-4">No items bought</div>
                </div>
            ) : (
                <div>
                    <h1 className="text-3xl text-green-600 font-bold mb-4">Your Order</h1>
                    <div className="block w-1/4 items-center shadow-sm justify-around border-2 border-b py-4 mb-5">
                    {cartItems.map((item, index) => (
                        <div key={index} >
                            <div className="flex items-center justify-around">
                                <img src={item.image} alt={item.name} className="w-16 h-16 mr-4" />
                                <div className=''>
                                
                                    <h1 className="text-lg font-bold">{item.name}</h1>
                                    <br/>
                                    <p className="text-gray-600">Quantity: 1</p>
                                </div>
                                <div>
                                <h1 className="text-lg font-bold">Subtotal</h1>
                                <p>Ksh{item.price}</p>
                            </div>
                            </div>
                           <hr/>
                            
                           
                        </div>
                    ))}
                    <div>
                                <h1 className="text-lg font-bold">Delivery</h1>
                                <div className='flex justify-around'>
                                <input type="radio" />
                                <label className='font-extrabold'>Within Naiobi</label>
                                <p className='text-green-500 font-extrabold'>Ksh 300</p></div>
                                <div className='flex justify-around'>
                                <input type="radio" />
                                <label className='font-extrabold'>Ouside Naiobi</label>
                                <p className='text-green-500 font-extrabold'>Ksh 600</p></div>
                                
                            </div>
                            <hr/>
                    <div className='flex justify-between p-4'>
                                <h1 className="text-lg font-bold">Total</h1>
                                <p className="text-green-500 font-extrabold text-xl">3000</p>
                            </div>
                    </div>
                    
                </div>
            )}
        </div>  
        <Footer/>
        </>
       
    );
}

export default Checkout;
