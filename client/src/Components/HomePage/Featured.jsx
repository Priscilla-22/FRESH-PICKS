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
        <h2 className='text-4xl font-bold text-center mb-5'>
          Featured Products
        </h2>
        <div className='flex flex-wrap'>
          {featuredProducts.map((product) => (
            <div key={product.id} className='w-full md:w-1/3 p-4'>
              <div className='bg-gray-100 rounded-lg p-4'> 
                <h3 className='text-xl font-bold mb-2'>{product.name}</h3> 
                <p className='text-gray-600 mb-2'>Ksh {product.price}</p> 
                <img
                  src={product.image}
                  alt={product.name}
                  className='w-full h-32 object-cover mb-2' 
                />
                <button className='bg-green-700 text-white py-2 px-4 rounded-full hover:bg-blue-600'>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
