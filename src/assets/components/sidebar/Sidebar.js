import React from 'react';
import NavMenu from '../NavMenu/NavMenu';
import './assets/css/hover.css';
import './assets/css/sidebar.css';


const Sidebar = () => {
       
        return (

            <div id="sidebar-nav" className="col-lg-2 col-md-2 col-xs-2 sidenav">
                <div id="sidebar-content">
                    
                  <NavMenu />

                </div>
            
            </div>
        )
    
}

export default Sidebar;