import React, { useState, useEffect } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import  { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
function Home() {
    const navigate= useNavigate()
    function handleShop(){
        navigate('/products')
    }
    function viewDetails(){
        navigate('/Details/:id')
    }
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5555/products')
            .then(res => res.json())
            .then(setProducts)
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    


  return (
    <div className='w-full'>
      <div id="display" className='flex w-full justify-between mt-12'>
    <div id="display-1" className='m-20 bg-black p-5'>
        <h1 className='text-7xl text-slate-200 font-bold'>Get your Groceries Fast and<br/> <span className='text-green-500'>Fresh</span></h1>
        <h1 className='text-3xl text-slate-200 font-bold mt-10 mb-10'>Try the <span>freshpicks</span> app and get your groceries delivered anywhere<br/> <span className='text-green-500'>Fresh</span></h1>
        <button onClick={handleShop} className='bg-green-700 rounded-full text-slate-200 font-bold px-8 py-3 hover:text-black hover:bg-white'>SHOP NOW <span><ShoppingCartOutlinedIcon/></span></button>
    </div>
    <div>
        
    </div>
      </div>
      <div className='block justify-center items-center'>
            <h1 className='text-center text-3xl text-green-600 font-bold'>Products available in Market</h1>
            <div className='flex flex-wrap text-center'>
                {products.length < 1 ? (
                    <div><h1>Loading....</h1></div>
                ) : (
                    products.slice(1,7).map((product, index) => (
                        <Box
                            key={product.id}
                            className="box hover:border-2 hover:shadow-md px-4 py-4 w-fit"
                             >
                            
                            <img src={product.image} alt={product.name} width="250px" className='h-64' />
                            <h1 className='text-2xl font-bold'>{product.name}</h1>
                            <p className='text-green-700 font-bold text-xl'>Price: Ksh {product.price}</p>
                            <button className='btn w-full py-3 bg-white border-2 text-green-800 hover:text-white font-bold hover:bg-green-700'>
                            <Link 
                                to={`Details/${product.id}`} state={{product}}
                                style={{ display: 'block', width: '100%', height: '100%' }}
                            >
                                View details
                            </Link>
                            </button>


                            
                        </Box>
                    ))
                )}
            </div>
            <button className='text-center justify-center bg-green-600 rounded-full px-8 py-3'>Continue to shop <span><ShoppingCartOutlinedIcon/></span></button>
        </div>
    </div>
  )
}

export default Home
