import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './assets/css/hover.css';
import './assets/css/Rsidebar.css';
// import headshot from './assets/images/headshot.jpg'
// import logo from './assets/images/logo.svg'




class RSidebar extends Component {
  
    render() {
        return (

            <div id="Rsidebar-nav  "
                className=" col-md-2 rsidenav">
                <div id="Rsidebar-content">
                  <h2 className="nav-text">Highlights</h2>
                  <hr/>
                  <h2 className="nav-text">Dynamic Variable</h2>
                  <h2 className="nav-text">Dynamic Variable</h2>
                  <h2 className="nav-text">Dynamic Variable</h2>
                  <hr/>
                  <img clasName="img-fluid" src="https://via.placeholder.com/220x400" alt=""/>
                </div>
            </div>

        )
    }
}

export default RSidebar;