import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
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
              <a href='/' className='active hover:underline text-xl'>
                Home
              </a>
            </li>
            <li>
              <a href='/products' className='hover:underline text-xl'>
                Products
              </a>
            </li>
            <li>

              <a href='/cart' className='hover:underline text-xl'>
                Cart
              </a>
            </li>
            <li>
              <a href='/branches' className='hover:underline text-xl'>
                Branches
              </a>
            </li>
            <li className='hidden md:flex'>
            
              <a href='/' className='hover:underline text-xl'>

                About Us
              </a>
            </li>
          </ul>
        </nav>
        <div className='flex items-center space-x-4'>
          
          <a href='#' className='hover:underline'>
            Login
          </a>
          <span>|</span>
          <a href='#' className='hover:underline'>
            Sign Up
          </a>
        </div>
        <div className='shopping-cart'>
        <Link className='relative' to='/cart'>
          <ShoppingCartIcon fontSize='large'/>
          <span className='rounded-full text-black p-1 w-2 h-2 bg-white'>0</span>
        </Link>
          
        </div>
      </div>
    </header>
  );
}

export default Header;
