import React from "react";
import "./assets/css/Experience.css";
import resume from "./assets/images/resume.png"
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Experience() {
  return (
    <div>
      <h1 className="component-header">EXPERIENCE</h1>
      <hr />
      <img
        id="tech-header-img"
        src="https://media.giphy.com/media/dbtDDSvWErdf2/giphy.gif"
        alt=""
        className="img-fluid"
      />
      <hr />

      <div
        id="exp-content"
        className="content-component col-lg-8 col-md-6 col-xs-4 exp-content"
      >
        <p className="text-justify">
          Well, the way they make shows is, they make one show. That show's
          called a pilot. Then they show that show to the people who make shows,
          and on the strength of that one show they decide if they're going to
          make more shows. Some pilots get picked and become television
          programs. Some don't, become nothing. She starred in one of the ones
          that became nothing.
        </p>
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
              <li className="exp-text"><span>Photographer</span><br/>@ Wolfgang Pucks 560 in Dallas </li>
             
            </ul>
          </div>

          <div className="exp-div">
            <p className="exp-header">Creative</p>
            <ul>
            <li className="exp-text"><span>Creative Director</span><br/>@ Art Of Mind Productions</li>
              <br />
              <li className="exp-text"><span>Spokesman</span><br/>@ Toyota Motor Corp. (Natnl. Auto Show Team)</li>
              <br />
              <li className="exp-text"><span>Photographer</span><br/>@ Wolfgang Pucks 560 in Dallas </li>
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
  );
}

export default Experience;
