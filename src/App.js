import React from 'react';
// components
import Header from './assets/components/header/Header'
import Sidebar from './assets/components/sidebar/Sidebar';
import TempComp from './assets/components/temp-comp/TempComp';
// pages
import About from './assets/components/about/About'
import Contact from './assets/components/contact/Contact'
import Experience from './assets/components/experience/Experience'
import Interests from './assets/components/interests/Interests'
import Technology from './assets/components/technology/Technology'
// dependencies
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="row">
            <Sidebar />
            <Switch>
              <Route path="/" exact component={About} />
              <Route path="/technology" component={Technology} />
              <Route path="/experience" component={Experience} />
              <Route path="/interests" component={Interests} />
              <Route path="/contact" component={Contact} />
            </Switch>
            <TempComp />
          </div>
        </div>
      </div>
    </Router>

  );
}

export default App;  