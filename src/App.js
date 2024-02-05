import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Events from './Components/Events/Events'
import './App.css'
import Home from "./Components/Home/Home"
import Navbar from './Components/Navbar/Navbar';
import Aboutus from './Components/Aboutus/Aboutus';
import Team from './Components/Team/Team';
import Blogs from './Components/Blogs/Blogs';
const App = () => {
  return (
    <Router>
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Events" element ={<Events />} />
      <Route path="/About" element ={<Aboutus />} />
      <Route path="/Team" element ={<Team />} />
      <Route path="/Blogs" element ={<Blogs />} />
      
      </Routes>
    </div>
     
</Router>
  )
}

export default App