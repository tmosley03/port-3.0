import React from 'react';
import './assets/css/About.css';
//import about from './assets/images/about.jpg'

import officeSpace from './assets/images/office.gif';
import { Spring } from 'react-spring/renderprops'



function TechLiaison() {
  return (

<Spring
      from={{ opacity: 0 }}
      to={{ opacity:1}}
    >
    {props =>(
      <div style={props}>
      <div className="content-component">
      {/* <hr /> */}

      <h1 className="component-header">Technical Liaison</h1>
      <br/>
      <hr />

      <img src={officeSpace} alt="thomas" className="img-fluid" />
      <hr />
      <div id="about-text-div"className="col-lg-8 col-md-6 col-xs-4">
      <p  className="text-justify">
        Are you frustrated with the constant miscommunication between the technical and non-techical parts of your organization?  
        
        
         Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.

     
      </p>
      </div>
      <hr></hr>


    </div>
      </div>
    )}
    </Spring>

   

  );
}
console.log('ping from liaison')
export default TechLiaison;  