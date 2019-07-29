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
                </div>
            </div>

        )
    }
}

export default RSidebar;