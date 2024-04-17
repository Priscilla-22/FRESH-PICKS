import { useState } from 'react'
import Products from './components/products'
import {Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import AddProducts from './components/AddProducts'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/AddProducts" element={<AddProducts />} />
      <Route path="/Details/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
     
    </>
  )
}

export default App
