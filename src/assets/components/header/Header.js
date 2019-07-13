import React from 'react';
//import 'header/header.css';
import './header.css';

const header = () => {
    return(
        <div>
        <nav id= "header" className= "navbar nav-bar">
            {/* <h4>thomas mosley 3</h4> */}
            <img src="../images/name.png" alt=""/>
            <div>
                <h5>Web Developer | Strategic Partner</h5>
            </div>
        </nav>
        </div>
    )
}

export default header;