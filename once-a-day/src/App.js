// import * as React from 'react'
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// from ninerup app.js: 

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
       <Navbar></Navbar>
       <Footer/>
     </div>
    // {/* </Router> */}
  );
}

export default App;
