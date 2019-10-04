import React from "react";
import "./assets/css/Experience.css";
import resume from "./assets/images/resume.png"
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//import {useTransition, animated} from 'react-spring'
import { Spring } from 'react-spring/renderprops'

function Experience() {
  return (

<Spring
      from={{ opacity: 0 }}
      to={{ opacity:1}}
    >
    {props =>(
      <div style={props}>
      
      <div>
      <h1 className="component-header">EXPERIENCE</h1>
      <hr />
      <img
        id="tech-header-img"
        src="https://media.giphy.com/media/dbtDDSvWErdf2/giphy.gif"
        alt=""
        className="img-fluid"/>
<hr/>
<div
        id=""
        className="content-component col-lg-8 col-md-6 col-xs-4 ">
        <p className="text-justify">
        My career path has aforded me a wide variety of experiences across multiple industries.  From mastering soft skills as a spokesman at live events across the U.S. for Toyota Motor CO. to Shapening hard skills as developer at Real Page Inc., the leading global provider of software to the real estate industry, I am able to draw from a deep well of experience and make a real contribution to any project or team.
        </p>
        
      <hr />

     
        <h2 className="exp-header">Highlights</h2>

        <div className="exp-div-container">

          <div className="exp-div">
            <p className="exp-header">Tech</p>
            <ul>
              <li className="exp-text"><span>Full Stack Web Developer</span> <br/>  @ Real Page Inc.</li>
              <br />
              <li className="exp-text"><span>Full Stack Web Developer</span><br/>  @ Junction AI</li>
              <br />
              <li className="exp-text"><span>Network Switching Systems Admin</span><br/>  @ U.S. Army</li>
              
            </ul>
          </div>

          <div className="exp-div bdr-lft">
            <p className="exp-header">Marketing</p>
            <ul>
              <li className="exp-text"><span>Consultant</span><br/>@ Hotel Association of N. Texas</li>
              <br />
              <li className="exp-text"><span>Spokesman</span><br/>@ Toyota Motor Corp. (Natnl. Auto Show Team)</li>
              <br />
              <li className="exp-text"><span>Event Planning</span><br/>@ 504 Bar & Grill </li>
             
             
            </ul>
          </div>

          <div className="exp-div">
            <p className="exp-header">Creative</p>
            <ul>
            <li className="exp-text"><span>Creative Director</span><br/>@ Art Of Mind Productions</li>
              <br />
              <li className="exp-text"><span>Director of Photography</span><br/>@ On The Rocks Coctails (OTR)</li>
              <br />
              <li className="exp-text"><span>Photographer</span><br/>@ Omni Hotel and Convention Center Downtown, Dallas </li>
            </ul>
          </div>
        </div>
        <br />
        <br />


        <a
          href="https://drive.google.com/file/d/1WNWBlzLdPE24ujr-yxiUgl-yBA-nkk9e/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
        <img id="res-icon" src={resume} alt="resume"/>
          <p className="card-header">View Full Resume</p>
        </a>
        <hr />
      </div>
    </div>

      </div>
    )}
    </Spring>

   
  );
}

export default Experience;
