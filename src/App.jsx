import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FetchUser from './pages/FetchUser'
import AddUser from './pages/AddUser'
import Navbar from './components/header/Navbar'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path="/" element = {<FetchUser/>}></Route>
  <Route path="/adduser" element = {<AddUser/>}></Route>
</Routes>
<Footer/>
</BrowserRouter>
    </>
  )
}

export default App