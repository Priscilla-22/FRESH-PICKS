import React, { useState } from 'react';

function Category({ handleFilter }) {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleClick = (category) => {
    if (activeCategory !== category) {
      handleFilter(category);
      setActiveCategory(category);
    }
  };

  return (
    <div
      id='category'
      className='sticky top-0 left-0 w-64 h-full bg-green-600 p-4 my-5'
    >
      <div className='flex flex-col space-y-2'>
        <img
          className=''
          src='https://images.unsplash.com/photo-1543168256-418811576931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyb2NlcnklMjBkZWxpdmVyeXxlbnwwfHwwfHx8MA%3D%3D'
          alt=''
        />
        <button
          onClick={() => window.location.reload()}
          className={`w-full py-3 font-bold text-xl text-gray-800 rounded ${
            activeCategory === null ? 'bg-gray-200' : 'hover:bg-gray-200'
          }`}
        >
          Shop
        </button>
        <hr className='border-gray-300' />
        <button
          onClick={() => handleClick('Fruits')}
          className={`w-full py-3 font-bold text-lg text-gray-800 rounded ${
            activeCategory === 'fruits' ? 'bg-gray-200' : 'hover:bg-gray-200'
          }`}
        >
          Fruits
        </button>
        <hr className='border-gray-300' />
        <button
          onClick={() => handleClick('Dairy')}
          className={`w-full py-3 font-bold text-lg text-gray-800 rounded ${
            activeCategory === 'Dairy' ? 'bg-gray-200' : 'hover:bg-gray-200'
          }`}
        >
          Dairy
        </button>
        <hr className='border-gray-300' />
        <button
          onClick={() => handleClick('Veggies')}
          className={`w-full py-3 font-bold text-lg text-gray-800 rounded ${
            activeCategory === 'Veggies' ? 'bg-gray-200' : 'hover:bg-gray-200'
          }`}
        >
          Veggies
        </button>
        <hr className='border-gray-300' />
        <button
          onClick={() => handleClick('meat')}
          className={`w-full py-3 font-bold text-lg text-gray-800 rounded ${
            activeCategory === 'meat' ? 'bg-gray-200' : 'hover:bg-gray-200'
          }`}
        >
          Meat
        </button>
        <hr className='border-gray-300' />
        <button
          onClick={() => handleClick('Nuts')}
          className={`w-full py-3 font-bold text-lg text-gray-800 rounded ${
            activeCategory === 'Nuts' ? 'bg-gray-200' : 'hover:bg-gray-200'
          }`}
        >
          Nuts
        </button>
        <hr className='border-gray-300' />
        <button
          onClick={() => handleClick('Cereals')}
          className={`w-full py-3 font-bold text-lg text-gray-800 rounded ${
            activeCategory === 'Cereals' ? 'bg-gray-200' : 'hover:bg-gray-200'
          }`}
        >
          Cereals
        </button>
      </div>
    </div>
  );
}

export default Category;
