import React from 'react'
import Home from './Pages/Home'
import Form from './Pages/Form'
import { Routes, Route } from 'react-router-dom';
export default function App() {
  return (
    <div>
      <Home/>
      <Form/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Form />} />
       
       </Routes>
    </div>
  )
}

