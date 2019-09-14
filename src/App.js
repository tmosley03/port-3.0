import React from 'react';
// components
import Header from './assets/components/header/Header'
import Sidebar from './assets/components/sidebar/Sidebar';
// import RSidebar from './assets/components/RSidebar/RSidebar';
// import TempComp from './assets/components/temp-comp/TempComp';
// pages
import About from './assets/components/about/About'
import Contact from './assets/components/contact/Contact'
import Experience from './assets/components/experience-2/Experience'
import Interests from './assets/components/interests/Interests'
import Technology from './assets/components/technology/Technology'
// import Home from './assets/components/home/Home'
import Footer from './assets/components/footer/Footer'
// dependencies
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />

        <div className="container">
          <div className="row">
             {/* spinner */}
             {/* <div className="spinner-grow" id="spinner" role="status">
                <span className="sr-only">Loading...</span>
              </div> */}

            <Switch>
              <Route path="/" exact component={About} />

              <Route path="/about" component={About} />
              <Route path="/technology" component={Technology} />
              <Route path="/experience" component={Experience} />
              <Route path="/interests" component={Interests} />
              <Route path="/contact" component={Contact} />
            </Switch>

          </div>
        </div>
        {/* <RSidebar /> */}
        <Footer />
      </div>
    </Router>

  );
}

export default App;  