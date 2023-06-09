import React from 'react';
import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import PaginatorPremierLeagueData from './components/PremierLeagueTable';
import PremierLeagueModel from './components/PremierLeagueModel';
import SentimentAnalysis from './components/SentimentAnalysis';
import 'bootstrap/dist/css/bootstrap.min.css';
import BreastCancerModel from './components/BreastCancerModel';
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
    <Route path='/premierleaguedata' element={<PaginatorPremierLeagueData />}></Route>
    <Route path='/premierleaguemodel' element={<PremierLeagueModel/>}></Route>
    <Route path='/sentimentanalysis' element={<SentimentAnalysis/>}></Route>
    <Route path='/breastcancermodel' element={<BreastCancerModel/>}></Route>


      </Routes>
    </>
  );
}

export default App;
