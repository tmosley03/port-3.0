import React from 'react';
import './assets/css/hover.css';
import './assets/css/sidebar.css';
import headshot from './assets/images/headshot.jpg'
import logo from './assets/images/logo.svg'
import name from './assets/images/name.png'
import { Link } from 'react-router-dom'



const Sidebar = () => {
    return (

        <div id="sidebar-nav  "
            className=" col-md-2 sidenav">
            <div id="sidebar-content">
                <div id="nav-s">
                    <img src={name} alt="" />
                    <img id="headshot" src={headshot} alt="" className="img-fluid" />
                    <hr />
                    <Link to="/"  className="nav-text  hvr-underline-from-center  text-uppercase">home</Link>
                    <Link to="about"  className="nav-text  hvr-underline-from-center  text-uppercase">About</Link>
                    <Link to="technology"  className="nav-text  hvr-underline-from-center  text-uppercase">Technology</Link>
                    <Link to="experience"  className="nav-text  hvr-underline-from-center  text-uppercase">Experience</Link>
                    <Link to="interests"  className="nav-text  hvr-underline-from-center  text-uppercase">Interests</Link>
                    <Link to="contact"  className="nav-text  hvr-underline-from-center  text-uppercase">Contact</Link>
                </div>
                <hr />
                
                    <p className="sidebar-text">This site was brought to you<br /> by yours truly<br />
                        &<br />React JS <span><img src={logo} alt="" className="img-fluid App-logo" /></span></p>
                
            </div>
        </div>

    )
}

export default Sidebar;