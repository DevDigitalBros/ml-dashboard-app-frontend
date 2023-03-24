import React from 'react';
import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  
  return (
    <>
    <div className="App">
     <Navbar/>
    </div>
    <Routes>

    <Route path='/home' element={<Home/>}></Route>
    <Route path='/dashboard' element={<Dashboard/>}></Route>
    <Route path='login' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>



      </Routes>
    </>
  );
}

export default App;
