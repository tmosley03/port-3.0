import React, { Component } from "react";
import NavMenu from '../NavMenu/NavMenu';
import "./assets/css/Drawer.css";

class Drawer extends Component {
  render() {
    return (
      <nav className='#' id='drawer'>
        <NavMenu />
      </nav>
    );
  }
}

export default Drawer;
