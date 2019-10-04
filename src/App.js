import React, { Component } from 'react';
// components
import Header from './assets/components/header/Header'
import Sidebar from './assets/components/sidebar/Sidebar';
// import NavMenu from './assets/components/NavMenu/NavMenu'
import Drawer from './assets/components/Drawer/Drawer';
import Backdrop from './assets/components/Backdrop/Backdrop';
// import MobileMenu from './assets/components/MobileMenu/MobileMenu';
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
// import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Spring } from 'react-spring/renderprops'
//import {useTransition, animated} from 'react-spring'

// import logo from './logo.svg';
import './App.css';



class App extends Component  {

  state = {
    drawerIsOpen: false
  }

  drawerToggler = () => {
    this.setState((prevState) =>{
      return {drawerIsOpen: !prevState.drawerIsOpen};      
    });
    console.log('drawer toggle function!');
  };

  backdropClickHandler = () => {
    this.setState({drawerIsOpen: false});
    console.log('bd close');
  }

  render(){
    let backdrop;
     

    if(this.state.drawerIsOpen){
       backdrop = <Backdrop click= {this.backdropClickHandler} />;
      
     }

  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity:1}}
    >
    {props =>(
      <div style={props}>
      <Router>

      <div className="App">      
    
      {backdrop}
      
      
       <Header drawerClickHandler = {this.drawerToggler} />
        <Sidebar />
        <Drawer show = { this.state.drawerIsOpen }  click = {this.backdropClickHandler} />
        <div className="container">    
          <div className="row">
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
      </div>
    )}
    </Spring>
    
    

  );
}
}
export default App 

