import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './assets/Component/Navbar';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App