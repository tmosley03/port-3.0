import React from 'react';
import './hover.css';
import './sidebar.css';
import headshot from './headshot.jpg'
import logo from './logo.svg'

const Sidebar = () => {
    return (
        <div>
            <div id="sidebar-nav"
                className="col-md-3">
                <div id="sidebar-content">
                    <div id="nav-s">
                        <img id="headshot" src={headshot} alt="" className="img-fluid" />
                        <hr/>
                        <p className="nav-text hvr-grow text-uppercase ">About Me</p>
                        <p className="nav-text hvr-grow text-uppercase ">Technology</p>
                        <p className="nav-text hvr-grow text-uppercase ">Experience</p>
                        <p className="nav-text hvr-grow text-uppercase ">Interests</p>
                        <p className="nav-text hvr-grow text-uppercase ">Contact</p>
                    </div>
                   
                    <hr />
                    <div className="footer">
                        <p className="sidebar-text">This site was brought to you by yours truly</p>

                        <p className="sidebar-text">&</p>
                        <p className="sidebar-text">React JS <span><img src={logo} alt="" className="img-fluid App-logo" /></span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;