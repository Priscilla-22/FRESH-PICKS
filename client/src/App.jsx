import { useState } from 'react'
import Products from './components/products'
import {Route,Routes} from 'react-router-dom'

import AddProducts from './components/AddProducts'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Homepage from './Components/HomePage/HomePage.jsx';
function App() {
  






  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/AddProducts" element={<AddProducts />} />
      <Route path="/Details/:id" element={<ProductDetails />} />
      <Route path="/checkout/" element={<Checkout />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
     
    </>
  )
}

export default App;
