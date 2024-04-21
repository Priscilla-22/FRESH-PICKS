import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
  function Header({user}) {
    const cart = useSelector((state) => state.cart);
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
              <a href='/' className='active hover:underline text-lg'>
                Home
              </a>
            </li>
            <li>
              <a href='/products' className='hover:underline text-lg'>
                Products
              </a>
            </li>
            <li>
              <a href='/cart' className='hover:underline text-lg'>
                Cart
              </a>
            </li>
            <li>
              <a href='/branches' className='hover:underline text-lg'>
                Branches
              </a>
            </li>
            <li className='hidden md:flex'>
              <a href='/' className='hover:underline text-lg'>
                About Us
              </a>
            </li>
          </ul>
        </nav>
        <div className='flex items-center space-x-4'>
          <a href='login' className='hover:underline'>
            Login
          </a>
          <span>|</span>
          <a href='/signup' className='hover:underline'>
            Sign Up
          </a>
        </div>
        <div className='shopping-cart'>
        <Link className='relative flex' to='/cart'>
    <ShoppingCartIcon fontSize='large' />
    <span className='rounded-full bg-black p-1 w-6 h-6 flex items-center justify-center text-white'>
        {cart.cartTotalQuantity}
    </span>
</Link>


        </div>
        <div className='flex items-center space-x-4'><Link to='/AddProducts'>AddProducts</Link></div>
      </div>
    </header>
  );
}

export default Header;
