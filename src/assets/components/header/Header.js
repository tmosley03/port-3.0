import React from 'react';
//import 'header/header.css';
import './assets/css/header.css';
import name from './assets/images/name.png'



const header = () => {
    return(
       
        <nav id= "header" className= "navbar fixed-top">
           
          <img id="name" className="fluid-img navbar-brand"src={name} alt="" />
          <h4  id="header-text" className="d-inline-block align-top">web developer </h4>

        </nav>
        
    )
}

export default header;