import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
    <Router>
    <Navbar />
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/services' element={<Services />} />
  <Route path='/about-us' element={<About />} />
  <Route path='/contact-us' element={<Contact />} />
</Routes>
<Footer />
    </Router>
    </>
  )
}

export default App