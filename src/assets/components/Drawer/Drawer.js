import React from "react";
import NavMenu from '../NavMenu/NavMenu';
import "./assets/css/Drawer.css";

const Drawer = (props) =>( {
  render() {
    return (
      <nav className='#' id='drawer'>
        <NavMenu click={props.click}  />
      </nav>
    );
  }
}
)
export default Drawer;
