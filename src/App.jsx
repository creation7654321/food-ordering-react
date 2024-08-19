import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'

export default function App() {

  const [showLogin, setShowLogin] = useState(false)



  return (
    <>
    
    {showLogin? <LoginPopup setShowLogin={setShowLogin} /> : <></>} 
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} /> 
      <Home />
      <Routes >
        <Route to="/" element={<Home/>} />
        <Route to="/cart" element={<Cart/>} />
        <Route to="/order" element={<PlaceOrder/>} />
      </Routes>
    </div>
    <Footer/>
    </>
  )
}
