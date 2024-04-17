import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import ProductList from './ProductList';

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5555/products')
            .then(res => res.json())
            .then(setProducts)
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const handleMouseEnter = (index) => {
        setProducts(prevProducts => {
            const updatedProducts = [...prevProducts];
            updatedProducts[index].showButton = true;
            return updatedProducts;
        });
    };

    const handleMouseLeave = (index) => {
        setProducts(prevProducts => {
            const updatedProducts = [...prevProducts];
            updatedProducts[index].showButton = false;
            return updatedProducts;
        });
    };

    return (
        <div className='block align-middle justify-center'>
            <h1>Products available in Market</h1>
            <div className='flex flex-wrap text-center'>
                {products.length < 1 ? (
                    <div><h1>Loading....</h1></div>
                ) : (
                    products.map((product, index) => (
                        <ProductList
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                            showbutton={product.showButton}
                            handleMouseEnter={()=>handleMouseEnter(index)}
                            handleMouseLeave={()=>handleMouseLeave(index)}
                            product={product}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default Products;
