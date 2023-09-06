import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Footer from './Components/Footer'
import BestSellerItem from './pages/BestSellers/BestSellerItem'
import Gallery from './pages/Gallery'
import GalleryItem from './pages/GalleryItem'
import Blog from './pages/Blog'
import BlogItem from './pages/BlogItem'
import FeedBacks from './pages/FeedBacks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="wrapper">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/bestSellerItem/:id' element={<BestSellerItem/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/feedback' element={<FeedBacks/>}/>
        <Route path='/galleryItem/:id' element={<GalleryItem/>}/>
        <Route path='/blogItem/:id' element={<BlogItem/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
