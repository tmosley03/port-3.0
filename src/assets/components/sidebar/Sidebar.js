import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './assets/css/hover.css';
import './assets/css/sidebar.css';
import headshot from './assets/images/headshot.jpg'
import logo from './assets/images/logo.svg'




class Sidebar extends Component {
    state = {
        key: 'str1',
        key2:"string"
    }
    render() {
        return (

            <div id="sidebar-nav  "
                className=" col-md-2 sidenav">
                <div id="sidebar-content">
                    <div id="nav-s">
                        <img id="headshot" src={headshot} alt="" className="img-fluid" />
                        <br />
                        <br />
                        <hr />
                        <Link to="/" className="nav-text  hvr-grow  text-uppercase">home</Link>
                        <Link to="about" className="nav-text  hvr-grow  text-uppercase">About</Link>
                        <Link to="technology" className="nav-text  hvr-grow  text-uppercase">Technology</Link>
                        <Link to="experience" className="nav-text  hvr-grow  text-uppercase">Experience</Link>
                        <Link to="interests" className="nav-text  hvr-grow  text-uppercase">Interests</Link>
                        <Link to="contact" className="nav-text  hvr-grow  text-uppercase">Contact</Link>
                    </div>
                    <hr />

                    <p className="sidebar-text">This site was brought to you<br /> by yours truly<br />
                        &<br />React JS <span><img src={logo} alt="" className="img-fluid App-logo" /></span></p>

                </div>
            </div>

        )
    }
}

export default Sidebar;