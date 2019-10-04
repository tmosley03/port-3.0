import React from "react";
import NavMenu from '../NavMenu/NavMenu';
import "./assets/css/Drawer.css";

const Drawer = (props) =>{
  
let drawerClasses = 'drawer';


if (props.show ){
  drawerClasses = 'open-drawer drawer';
   console.log("drawer class updated");
}


    return (
      <nav  className = {drawerClasses}>
        <NavMenu click = {props.click} />
      </nav>
     );

}

export default Drawer;
