<<<<<<< HEAD
import React from 'react';
import axios from 'axios';

const Featured = () => {
  const [featuredProducts, setFeaturedProducts] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.npoint.io/c154600ea24f7697608e'
        );
        setFeaturedProducts(response.data.slice(0, 3));
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='bg-white py-16'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center mb-10 text-gray-800'>
          Featured Products
        </h2>
        <div className='flex flex-wrap -mx-2'>
          {featuredProducts.map((product) => (
            <div key={product.id} className='w-full md:w-1/3 px-2'>
              <div className='bg-white rounded-lg shadow-lg p-4 transition duration-300 ease-in-out transform hover:scale-105'>
                <div className='flex items-center mb-4'>
                  <div className='w-12 h-12 rounded-full overflow-hidden mr-4'>
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-gray-800'>
                      📌
                      {product.name}
                    </h3>
                    <p className='text-gray-600'>Ksh. {product.price}</p>
                  </div>
                </div>
                <p className='text-gray-600'>{product.description}</p>
                <button className='bg-green-700 text-white py-2 px-4 rounded-full hover:bg-green-600 w-full mt-4'>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
=======

const Featured = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Products</h2>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-2">Carrots</h3>
              <p className="text-gray-600 mb-4">Ksh 19.99</p>
              <img src="/path/to/product1.jpg" alt="Product 1" className="w-full h-40 object-cover mb-4"/>
              <button className="bg-green-700 text-white py-2 px-4 rounded-full hover:bg-blue-600">Add to Cart</button>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-2">Bananas</h3>
              <p className="text-gray-600 mb-4">Ks h114.99</p>
              <img src="/path/to/product2.jpg" alt="Product 2" className="w-full h-40 object-cover mb-4"/>
              <button className="bg-green-700 text-white py-2 px-4 rounded-full hover:bg-blue-600">Add to Cart</button>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-2">Apples</h3>
              <p className="text-gray-600 mb-4">Ksh 59.99</p>
              <img src="/path/to/product3.jpg" alt="Product 3" className="w-full h-40 object-cover mb-4"/>
              <button className="bg-green-700 text-white py-2 px-4 rounded-full hover:bg-blue-600">Add to Cart</button>
            </div>
          </div>
>>>>>>> 24d4364 (feat: initial homepage  structure)
        </div>
      </div>
    </div>
  );
};

export default Featured;
