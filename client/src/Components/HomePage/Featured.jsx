import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Featured = () => {
  const [featuredProducts, setFeaturedProducts] = React.useState([]);
const navigate=useNavigate()
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
                <button onClick={()=>navigate('/products')} className='bg-green-700 text-white py-2 px-4 rounded-full hover:bg-green-600 w-full mt-4'>
                  View more
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
