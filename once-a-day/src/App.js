import React from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom"
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home';


function App() {
  return (
    // <Router>
      <div className='relative'>
        {/* <Routes>
        <Route path="/"  element={<Home/>} exact/>    
       </Routes> */}
        <Navbar/>
        <Home/>
        <Footer/>
      </div> 
    // {/* </Router> */}
  );
}

export default App;
