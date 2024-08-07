import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'

export default function App() {
  return (
    <div className='app'>
      <Navbar />
      <Home />
      <Routes >
        <Route to="/" element={<Home/>} />
        <Route to="/cart" element={<Cart/>} />
        <Route to="/order" element={<PlaceOrder/>} />
      </Routes>
    </div>
  )
}
