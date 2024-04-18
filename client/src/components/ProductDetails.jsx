import React, { useState,useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DoneIcon from '@mui/icons-material/Done';
import { toast} from 'react-toastify';
import Category from './CategoryBar';
import { Box,Link } from '@mui/material';
import { Formik } from 'formik';
function ProductDetails() {
    const currentProduct = useLocation();
    const [isLoading ,setLoading]= useState(false)
    const [category, setCategory]= useState([])
    const [review,setReview] = useState({
        review:''
    })
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
    function handleChange(event){
        setReview(event.target.value)
    }
    function handleSubmit(product) {
        return fetch(`http://127.0.0.1:5555/products/${product.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: product.id, review:review})
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update product  review');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error updating review:', error);
            throw error; 
        });
    }

    useEffect(() => {
        fetch('http://127.0.0.1:5555/products')
           .then(res => res.json())
           .then(setCategory)
           .catch(error => console.error('Error fetching products:', error));
    },[])
    const filterCategories=category.filter(items =>{
        return items.category===product.category
    })
    
    
    return (
        <div>
            <Category />
            <div className="max-w-4xl mx-auto p-5 mt-10">
        
            <div className="flex items-center border-x-2 mt-60">
                <img src={product.image} className='h-72 w-auto mr-6' alt={product.name} />
                <div>
                    <h1 className='text-2xl font-bold'>{product.name}</h1>
                    <p className='text-green-700 font-bold text-xl'>Price: Ksh {product.price}</p>
                    <p className="mt-4 text-gray-600">{product.description}</p>
                    <h4 className='text-green-500 font-bold'><DoneIcon/> in Stock</h4>
                    <button onClick={()=>AddCart(product)} className='text-center bg-green-600 text-white font-extrabold w-full py-3 mb-3'>
                    {isLoading?"Adding...":"Add to Cart"}
                    </button>
                    <form className='flex' onSubmit={(event) => handleSubmit(product, event)}>
                <textarea className='bg-slate-white border-2' type='text' onChange={handleChange} name="review" placeholder='comment' />  
                     <button className='btn  py-3 bg-white border-2 text-green-800 hover:text-white font-bold hover:bg-green-700'>Submit</button>
                </form>
                    </div>
            </div>
           
            
           
        </div>
        <hr />
        <h1 className='text-center mt-6'>Related Products</h1>
        <div className='container flex justify-center items-center p-4'>
        
             {filterCategories.map(item => (
            <Box class="m-3" key={item.id}>
            <img src={item.image} alt={item.name} className='h-44 w-44' />
            <h1 className='text-2xl font-bold'>{item.name}</h1>
            <p className='text-green-700 font-bold text-xl'>Price: Ksh {item.price}</p>
            <button className='btn px-8 py-3    hover:bg-white border-2 hover:text-green-800 text-white font-bol bg-green-700'>
        
                View details
            
            </button>
             </Box>
            ))}    
            </div>
        </div>
        
    );
}

export default ProductDetails;
