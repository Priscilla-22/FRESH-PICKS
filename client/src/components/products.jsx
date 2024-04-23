
import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import ProductList from './ProductList';
import SearchBar from './SearchBar';
import Category from './CategoryBar';
import Header from '../Components/HomePage/Header';
import Footer from '../Components/HomePage/Footer';
function Products() {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const filterProducts = products.filter((product) => {
    const searchProduct =
      input === '' ||
      product.name.toUpperCase().startsWith(input.toUpperCase());
    const SetCategory =
      selectedCategory === null || product.category === selectedCategory;
    return searchProduct && SetCategory;
  });
  function handleClick(className) {
    //to handle the filters
    setSelectedCategory(className);
  }

  useEffect(() => {
    fetch('/products')
      .then((res) => res.json())
      .then(setProducts)
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const handleMouseEnter = (index) => {
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];
      updatedProducts[index].showButton = true;
      return updatedProducts;
    });
  };

  const handleMouseLeave = (index) => {
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];
      updatedProducts[index].showButton = false;
      return updatedProducts;
    });
  };
  function HandleChange(e) {
    setInput(e.target.value);
  }
  return (
    <div>
      <Header />
      <div className='flex flex-col md:flex-row items-center justify-center'>
        <div className='w-full md:w-1/4'>
          <Category handleFilter={handleClick} />
        </div>
        <div className='w-full md:w-3/4'>
          <h1 className='font-bold text-center mt-2 text-3xl'>Products Available in Market</h1>
          <SearchBar HandleChange={HandleChange} value={input} />
          <div className='flex flex-wrap text-center'>
            {products.length < 1 ? (
              <div>
                <h1>Loading....</h1>
              </div>
            ) : (
              filterProducts.map((product, index) => (
                <ProductList
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  showbutton={product.showButton}
                  handleMouseEnter={() => handleMouseEnter(index)}
                  handleMouseLeave={() => handleMouseLeave(index)}
                  product={product}
                />
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
