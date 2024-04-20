import React from 'react';

function Category({ handleFilter }) {
  return (
    <div
      id='category'
      className='sticky top-0 left-0 w-64 h-screen bg-green-600 p-4 my-5'
    >
      <div className='flex flex-col space-y-2'>
        <img
          className=''
          src='https://images.unsplash.com/photo-1543168256-418811576931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyb2NlcnklMjBkZWxpdmVyeXxlbnwwfHwwfHx8MA%3D%3D'
          alt=''
        />
        <button
          onClick={() => window.location.reload()}
          className='w-full py-3 font-bold text-xl text-gray-800 hover:bg-gray-200 rounded'
        >
          Shop
        </button>
        <hr className='border-gray-300' />
        <button
          onClick={() => handleFilter('fruits')}
          className='w-full py-3 font-bold text-lg text-gray-800 hover:bg-gray-200 rounded'
        >
          Fruits
        </button>
        <hr className='border-gray-300' />
        <button
          onClick={() => handleFilter('Dairy')}
          className='w-full py-3 font-bold text-lg text-gray-800 hover:bg-gray-200 rounded'
        >
          Dairy
        </button>
        <hr className='border-gray-300' />
        <button
          onClick={() => handleFilter('Veggies')}
          className='w-full py-3 font-bold text-lg text-gray-800 hover:bg-gray-200 rounded'
        >
          Veggies
        </button>
        <hr className='border-gray-300' />
        <button
          onClick={() => handleFilter('meat')}
          className='w-full py-3 font-bold text-lg text-gray-800 hover:bg-gray-200 rounded'
        >
          Meat
        </button>
        <hr className='border-gray-300' />
        <button
          onClick={() => handleFilter('Nuts')}
          className='w-full py-3 font-bold text-lg text-gray-800 hover:bg-gray-200 rounded'
        >
          Nuts
        </button>
        <hr className='border-gray-300' />
        <button
          onClick={() => handleFilter('Cereals')}
          className='w-full py-3 font-bold text-lg text-gray-800 hover:bg-gray-200 rounded'
        >
          Cereals
        </button>
      </div>
    </div>
  );
}

export default Category;
