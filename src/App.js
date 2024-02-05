import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Events from './Components/Events/Events'
import './App.css'
import Home from "./Components/Home/Home"
import Navbar from './Components/Navbar/Navbar';
const App = () => {
  return (
    <Router>
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Events" element ={<Events />} />
      
      </Routes>
    </div>
     
</Router>
  )
}

export default App