import React from 'react';
//import 'header/header.css';
import './sidebar.css';
import headshot from './headshot.jpg'
import logo from './logo.svg'

const Sidebar = () => {
return(
<div>
    <div id="sidebar-nav"
         className="col-md-3">
        <div id="sidebar-content">
            <div id="nav-btns">
            <img id="headshot" src={headshot} alt="" className="img-fluid" />
            <p className="nav-text btn">About Me</p>
           <p className="nav-text btn">Technology</p>
           <p className="nav-text btn">Experience</p>
           <p className="nav-text btn">Interests</p>
           <p className="nav-text btn">Contact</p>
            </div>
            <br/>
            <hr/>
            <div className="footer">
            <p className="sidebar-text">This site was brought to you by yours truly</p>
          
            <p className="sidebar-text">&</p>
            <p className="sidebar-text">React JS <span><img src={ logo} alt=""  className="img-fluid App-logo"/></span></p>
            </div>
        </div>
    </div>
</div>
)
}

export default Sidebar;