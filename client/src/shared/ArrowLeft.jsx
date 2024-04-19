import React from 'react';
const ArrowLeft = (props) => (
  <button
    {...props}
    className='slick-arrow slick-prev absolute top-0 bottom-0 left-0 z-10 w-16 flex items-center justify-center bg-white text-green-700 hover:text-gray-900'
  >
    <svg className='h-6 w-6 fill-current' viewBox='0 0 20 20'>
      <path d='M16.67 4.34a.75.75 0 0 1 .71 1.2l-7 14.02a.75.75 0 0 1-1.12.07L2.34 11.85a.75.75 0 0 1 0-1.12L10.17 4.33a.75.75 0 0 1 1.2 0z' />
    </svg>
  </button>
);

export default ArrowLeft;
