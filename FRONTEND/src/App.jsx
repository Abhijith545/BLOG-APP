import { useState } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'reactstrap'
import Base from './Components/Base'
import { Route, Routes } from 'react-router-dom'
import NavBar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Services from './Pages/Services'
import Contact from './Pages/Contact'

function App() {
  return (<>
  <NavBar/>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/services' element={<Services />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
    </Routes>
  </>)
}

export default App
