import React from 'react';
import './assets/css/Backdrop.css';
import { Link } from "react-router-dom";

//why the hell does this work????? Come back to this!!!!

const Backdrop = (props) => {

    
        return(     
         <Link  to="technology">  <div id='backdrop' onClick={ props.click }></div></Link> 
        )
    
}

export default Backdrop;