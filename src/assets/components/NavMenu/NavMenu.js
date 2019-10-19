import React from 'react';
import { Link } from "react-router-dom";
import './assets/css/NavMenu.css';
import logo from './assets/images/logo.svg'
import headshot from './assets/images/headshot.jpg'
// import Backdrop from '../Backdrop/Backdrop';

const NavMenu = (props) => {

  
        return(     
            <div className="nav-wrapper" onClick ={ props.click }>
                <h2 className="menu-brand-name">Thomas Mosley 3</h2>
                <img id="headshot" src={headshot} alt="" className="img-fluid" />
                <hr/>
                <ul>
                    <Link  to="about" className="nav-text drawer-link hvr-grow  text-uppercase">
                       About                 
                    </Link>

                    <Link to="technology" className="nav-text drawer-link hvr-grow  text-uppercase">
                        Technology
                    </Link>

                    {/* <Link to="tech-liaison" className="nav-text drawer-link hvr-grow  text-uppercase">
                        Tech Liaison
                    </Link>
                     */}
                    <Link to="experience" className="nav-text drawer-link hvr-grow  text-uppercase">
                        Experience
                    </Link>

                    <Link to="contact" className="nav-text drawer-link hvr-grow  text-uppercase">
                        Contact
                    </Link>
                </ul>
                <hr />
                <p className="sidebar-text">This site was brought to you<br /> by yours truly<br /> &<br />React JS <span>
                <img id="react-logo" src={logo} alt="" className="img-fluid App-logo" /></span></p>

            </div>
        )
    
}

export default NavMenu;