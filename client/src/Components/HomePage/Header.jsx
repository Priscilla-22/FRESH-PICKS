function Header() {
  return (
    <header className='bg-green-700 text-white py-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='logo'>
          <h1 className='text-4xl font-bold'>FRESH </h1>
          <span className='text-white font-bold text-4xl w-30 ml-12'>
            PICKS 🍎
          </span>
        </div>
        <nav>
          <ul className='flex space-x-4'>
            <li>
              <a href='/' className='hover:underline'>
                Home
              </a>
            </li>
            <li>
              <a href='/products' className='hover:underline'>
                Products
              </a>
            </li>
            <li>
              <a href='/cart' className='hover:underline'>
                Cart
              </a>
            </li>
            <li>
              <a href='/branches' className='hover:underline'>
                Branches
              </a>
            </li>
            <li className='hidden md:flex'>
              {/* Hide on smaller screens */}
              <a href='/' className='hover:underline'>
                About Us
              </a>
            </li>
          </ul>
        </nav>
        <div className='flex items-center space-x-4'>
          {/* Add space between Login and Sign Up */}
          <a href='#' className='hover:underline'>
            Login
          </a>
          <span>|</span>
          <a href='#' className='hover:underline'>
            Sign Up
          </a>
        </div>
        <div className='shopping-cart'>
          <svg className='fill-current text-red h-6 w-6' viewBox='0 0 20 20'>
            <path d='M16 5h2a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2' />
            <circle cx='10' cy='10' r='7' />
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Header;
