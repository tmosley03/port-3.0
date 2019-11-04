import React from 'react';
//import 'header/header.css';
import './assets/css/header.css';
// import './assets/css/mobile-nav.css'
// import name from './assets/images/name.png';
// import { Link } from 'react-router-dom';
import ToggleBtn from '../ToggleBtn/ToggleBtn';



const header =  (props) => {
    return(


       <div>
        <nav id= "header" className= "navbar fixed-top">
          {/* <img id="name" className="fluid-img navbar-brand"src={name} alt="" /> */}
          <p  id="" className="header-text d-inline-block align-top">Thomas Mosley | <span id="header-span">Web Developer</span></p>
          <ToggleBtn click ={ props.drawerClickHandler }/>
        </nav>
       </div>
    )
}

export default header;