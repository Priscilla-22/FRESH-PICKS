import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Products from './components/products';
import Branches from './components/Branches.jsx';
import AddProducts from './components/AddProducts';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Homepage from './Components/HomePage/HomePage.jsx';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/products' element={<Products />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/AddProducts' element={<AddProducts />} />
        <Route path='/Details/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/branches' element={<Branches />} />
      </Routes>
    </main>
  );
}

export default App;
