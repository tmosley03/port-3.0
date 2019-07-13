import React from 'react';
//import 'header/header.css';
import './header.css';
// import name from './name.png'
const header = () => {
    return(
       
        <nav id= "header" className= "navbar-nav fixed-top">
            {/* <h4>thomas mosley 3</h4> */}
            {/* <img src={ name } alt=""/> */}
            <div>
                <h5>Web Developer | Strategic Partner</h5>
            </div>
        </nav>
        
    )
}

export default header;