import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Footer from './Components/Footer'
import BestSellerItem from './pages/BestSellers/BestSellerItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="wrapper">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/bestSellerItem/:id' element={<BestSellerItem/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
