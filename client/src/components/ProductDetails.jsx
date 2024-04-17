import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DoneIcon from '@mui/icons-material/Done';
import { toast} from 'react-toastify';
function ProductDetails() {
    const currentProduct = useLocation();
    const [isLoading ,setLoading]= useState(false)
    const product = currentProduct.state?.product;
    const navigate= useNavigate()
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
            // Add other necessary properties here
        };
    
        fetch(`http://127.0.0.1:5555/cart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productData) // Pass the new object without circular references
        }).then(res => res.json())
        .then(data => {
            console.log('Product added:', data);
            toast.success("Product added successfully", {position:'top-center'});
        }).catch(error => {
            console.error('Error adding product to cart:', error);
            toast.error("Error adding product to cart", {position:'top-center'});
        });
        navigate("/cart")
        
    }
    
    
    return (
        <div className="max-w-4xl mx-auto mt-10">
            <div className="flex items-center border-x-2 mt-60">
                <img src={product.image} className='h-72 w-auto mr-6' alt={product.name} />
                <div>
                    <h1 className='text-2xl font-bold'>{product.name}</h1>
                    <p className='text-green-700 font-bold text-xl'>Price: Ksh {product.price}</p>
                    <p className="mt-4 text-gray-600">{product.description}</p>
                    <h4 className='text-green-500 font-bold'><DoneIcon/> in Stock</h4>
                    <button onClick={()=>AddCart(product)} className='text-center bg-green-600 text-white w-full py-3 mb-3'>
                    {isLoading?"Adding...":"Add to Cart"}
                    </button>
                    <form className='flex'>
                    
                      <textarea className='bg-slate-300' type='text' name="review" placeholder='comment' />  
                      <button className='btn  py-3 bg-white border-2 text-green-800 hover:text-white font-bold hover:bg-green-700'>Submit</button>
                    </form>
                   
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
