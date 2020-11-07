import React from 'react'
import './App.css';
import Navbar from './Components/Navbar'
import MainContent from './Components/MainContent'

function App() {
  return (
    <div className="app">
      <Navbar/>
      <hr/>
      <MainContent/>
    </div>
  );
}

export default App;
