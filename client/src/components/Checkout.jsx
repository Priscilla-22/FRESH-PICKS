import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../Components/HomePage/Header';
import Footer from '../Components/HomePage/Footer';

function Checkout() {
    const cart = useSelector((state) => state.cart);
    const [deliveryFee, setDeliveryFee] = useState(0);
    const [deliveryType, setDeliveryType] = useState('nairobi');

    const handleDeliveryChange = (event) => {
        setDeliveryType(event.target.value);
        setDeliveryFee(event.target.value === 'nairobi' ? 300 : 600);
    };

    return (
        <>
            <Header />
            <div className="container mx-auto mt-8">
                {!cart.cartItems.length ? (
                    <div className="text-center">
                        <div className="text-2xl text-red-600 font-bold mb-4">No items bought</div>
                    </div>
                ) : (
                    <div className='bg-gray-100 p-3 w-1/2 m-4'>
                        <h1 className="text-3xl text-green-600 font-bold mb-4">Your Order</h1>
                        <div className="block w-75 items-center px-4 bg-white shadow-sm justify-around border-2 border-b py-4 mb-5">
                        <div className='font-bold'>Product</div>
                            {cart.cartItems.map((item, index) => (
                                <div key={index}>
                                    <div className="flex items-center justify-around">
                                        <img src={item.image} alt={item.name} className="w-16 h-16 mr-4" />
                                        <div className=''>
                                            <h1 className="text-lg font-bold">{item.name}</h1>
                                            <br />
                                            <p className="text-gray-600">Quantity: {item.cartQuantity}</p>
                                        </div>
                                        <div>
                                            <h1 className="text-lg font-bold">Subtotal</h1>
                                            <p>Ksh {item.price * item.cartQuantity}</p>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            ))}
                            <div>
                                <h1 className="text-lg font-bold">Delivery</h1>
                                <div className='flex justify-around'>
                                    <input type="radio" name="deliveryType" value="nairobi" checked={deliveryType === 'nairobi'} onChange={handleDeliveryChange} />
                                    <label className='font-extrabold'>Within Nairobi</label>
                                    <p className='text-green-500 font-extrabold'>Ksh 300</p>
                                </div>
                                <div className='flex justify-around'>
                                    <input type="radio" name="deliveryType" value="outside" checked={deliveryType === 'outside'} onChange={handleDeliveryChange} />
                                    <label className='font-extrabold'>Outside Nairobi</label>
                                    <p className='text-green-500 font-extrabold'>Ksh 600</p>
                                </div>
                                <hr />
                                <div className='flex justify-between p-4'>
                                    <h1 className="text-lg font-bold">Total</h1>
                                    <p className="text-green-500 font-extrabold text-xl">Ksh {cart.cartTotalAmount + deliveryFee}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-green-500 font-bold text-2xl'>Payement Methods</h1>
                            <div>
                            
                                <div className='flex p-4'>
                                    <input type="radio" className='p-2' name="mpesa" value="mpesa" />
                                    <label className='font-extrabold p-2'>M-Pesa</label>
                                    <input className='ml-4 px-2 border-2 border-slate-400 rounded-md ' type="number" placeholder='Your m-pesa number'/>
                                    
                                </div>
                                <p className='font-bold'>Recieve a prompt put your pin to continue with the payment</p>
                                <hr/>
                                <p className='text-red-500 font-bold'>We are currently only accepting M-PESA Payements</p>
                                <button className='w-full py-3 bg-green-600 font-bold mt-3 text-white rounded-md'>PLACE ORDER</button>
                                
                            </div>

                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}

export default Checkout;
