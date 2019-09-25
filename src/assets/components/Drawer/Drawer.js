import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from './assets/images/logo.svg'
import "./assets/css/Drawer.css";

class Drawer extends Component {
  render() {
    return (
      <nav className='#' id='drawer'>
        <ul>
          {/* <Link to="/" className="nav-text  hvr-grow  text-uppercase">home</Link> */}
          <Link to="about" className="nav-text drawer-link hvr-grow  text-uppercase">
            About
          </Link>
          <Link to="technology" className="nav-text drawer-link hvr-grow  text-uppercase">
            Technology
          </Link>
          <Link to="experience" className="nav-text drawer-link hvr-grow  text-uppercase">
            Experience
          </Link>
          {/* <Link to="interests" className="nav-text  hvr-grow  text-uppercase">Interests</Link> */}
          <Link to="contact" className="nav-text drawer-link hvr-grow  text-uppercase">
            Contact
          </Link>
        </ul>

        <hr/>
        <div>
        <hr />
           <p className="sidebar-text">This site was brought to you<br /> by yours truly<br /> &<br />React JS <span>
           <img id="react-logo" src={logo} alt="" className="img-fluid App-logo" /></span></p>
        </div>
      </nav>
    );
  }
}

export default Drawer;
