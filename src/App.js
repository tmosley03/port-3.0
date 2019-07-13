import React from 'react';
import Header from
  './assets/components/header/Header'
import Sidebar from
  './assets/components/sidebar/Sidebar';
import LongCopy from './assets/components/extra/Long-copy';

// import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App ">
      <Header />
      <div className="container">
        <div className="row">
          <Sidebar />
          <LongCopy />
        </div>
      </div>
    </div>


  );
}

export default App;  