import { useState } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'reactstrap'
import Base from './Components/Base'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import NavBar from './Components/Navbar'

function App() {
  return (<>
  <NavBar/>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/about' element={<About />}></Route>
    </Routes>
  </>)
}

export default App
