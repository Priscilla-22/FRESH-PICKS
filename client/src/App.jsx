import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Route,Routes} from 'react-router-dom'
import Products from './components/products'

import Login from "./pages/Login"
import Signup from "./pages/Signup"
import AddProducts from './components/AddProducts'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Homepage from './Components/HomePage/HomePage.jsx';
function App() {
  return (
   <Router>

    <main>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path="/products" element={<Products />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/AddProducts" element={<AddProducts />} />
      <Route path="/Details/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      
    </Routes>
     
    </main>
   </Router>
  )
}

export default App;
