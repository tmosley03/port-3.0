import React from 'react';
import './assets/css/Technology.css';
import { Spring } from 'react-spring/renderprops'
// import technology from './assets/images/technology.jpg'
// =========================================
import ajax from './assets/images/tech-icons/ajax.png'
import bootstrap from './assets/images/tech-icons/bootstrap4.png'
import html from './assets/images/tech-icons/html-css-js.png'
// import express from './assets/images/tech-icons/express.png'
import firebase from './assets/images/tech-icons/firebase.png'
// =========================================
import git from './assets/images/tech-icons/git.png'
import wix from './assets/images/tech-icons/wix.png'
import vm from './assets/images/tech-icons/vm.png'
import jira from './assets/images/tech-icons/jira.png'
import jquery from './assets/images/tech-icons/jquery.png'
// =========================================
import laravel from './assets/images/tech-icons/laravel.png'
import materialize from './assets/images/tech-icons/materialize.png'
import mongo from './assets/images/tech-icons/mongo.png'
import node from './assets/images/tech-icons/node.png'
import npm from './assets/images/tech-icons/npm.png'

// =========================================
import parcel from './assets/images/tech-icons/parcel.png'
import photoshop from './assets/images/tech-icons/photoshop.png'
import php from './assets/images/tech-icons/php.png'
import premiere from './assets/images/tech-icons/premiere.png'
import react from './assets/images/tech-icons/react.png'
import apache from './assets/images/tech-icons/apache.png'
import giphy from './assets/images/giphy.gif'

// =========================================
// import restapi from './assets/images/tech-icons/restapi.png'
import salesforce from './assets/images/tech-icons/salesforce.png'
import sql from './assets/images/tech-icons/mysql.png'
import ubuntu from './assets/images/tech-icons/ubuntu.png'
import vue from './assets/images/tech-icons/vue.png'
import wordpress from './assets/images/tech-icons/wordpress.png'
import yarn from './assets/images/tech-icons/yarn.png'
import webpack from './assets/images/tech-icons/webpack.png'
import mac from './assets/images/tech-icons/mac.png'
import windows from './assets/images/tech-icons/windows.png'
import vim from './assets/images/tech-icons/vim.png'
import mamp from './assets/images/tech-icons/mamp.png'
//add apache, mamp, ftp
// =========================================



function Technology() {
  return (

<Spring
      from={{ opacity: 0 }}
      to={{ opacity:1}}
    >
    {props =>(
      <div style={props}>
      
      <div id="tech-content-div" className="content-component ">
    

      <h1 className="component-header">TECHNOLOGY</h1>
      <hr />
      {/* <img id="tech-header-img" src="https://media.giphy.com/media/l2SpRpwOiLcaqb1XG/giphy.gif" alt="" className="img-fluid" /> */}
      <img id="tech-header-img" src={giphy} alt="" className="img-fluid" />
      <hr />
      <p className=" text-justify tech-component col-lg-8 col-md-8 col-sm-6 ">
      The icons below represent an overview of the tools and technologies I am most familiar with and have used up to this point.  With the exception of vanilla Javascript, I learned most of what is listed below on  the job as the need arose.  Why is that relevant?  Well, the tools and technologies that are used in modern web application development are quite vast and change frequently, thereby rendering any static knowledge one may possess about any given language or framework obsolete over a relatively short period of time, making it necessary to learn, unlearn, and relearn almost constantly.  This is where I tend to excel.  I love learning new technologies, languages, and tools.  If you are looking for someone to take on a project or a position that requires knowledge of a certain technology you don’t see listed below, please make contact anyway.  I’d love an excuse to learn something new! 
      </p>
      
      <div className="lang-div tech-component col-lg-8 col-md-8 col-sm-6 ">
      <hr />
      <h2 className="tech-header">Front End</h2>
      <br/>
      {/* ======================================================== */}
      <img  src={html} alt="" className="img-fluid lang-icon" />
      <img  src={react} alt="" className="img-fluid lang-icon" />
      <img  src={vue} alt="" className="img-fluid lang-icon" />
      {/* EXPRESS JS */}
      <img  src={jquery} alt="" className="img-fluid lang-icon" />
      <img  src={ajax} alt="" className="img-fluid lang-icon" />
      <img  src={bootstrap} alt="" className="img-fluid lang-icon" />
      <img  src={materialize} alt="" className="img-fluid lang-icon" />
      <br/>
      <br/>
      <h2 className="tech-header">Back End</h2>
      <br/>
      {/* ======================================================== */}
      <img  src={sql} alt="" className="img-fluid lang-icon" />
      <img  src={php} alt="" className="img-fluid lang-icon" />
      <img  src={apache} alt="" className="img-fluid lang-icon" />
      <img  src={laravel} alt="" className="img-fluid lang-icon" />
      <img  src={node} alt="" className="img-fluid lang-icon" />
      <img  src={mongo} alt="" className="img-fluid lang-icon" />
      <img  src={vim} alt="" className="img-fluid lang-icon" />
      <img  src={firebase} alt="" className="img-fluid lang-icon" />
      <img  src={mamp} alt="" className="img-fluid lang-icon" />
      <br/>
      <br/>
      <h2 className="tech-header">Build Tools</h2>
      <br/>
      {/* ======================================================== */}
      <img  src={webpack} alt="" className="img-fluid lang-icon" />
      <img  src={parcel} alt="" className="img-fluid lang-icon" />
      <img  src={yarn} alt="" className="img-fluid lang-icon" />
      <img  src={npm} alt="" className="img-fluid lang-icon" />
    
      <br/>
      <br/>
      <h2 className="tech-header">Operating Systems</h2>
      <br/>
      {/* ======================================================== */}
      <img  src={ubuntu} alt="" className="img-fluid lang-icon" />
      <img  src={mac} alt="" className="img-fluid lang-icon" />
      <img  src={windows} alt="" className="img-fluid lang-icon" />
      {/* ======================================================== */}
      <br/>
      <br/>
      <h2 className="tech-header">WYSIWYG Platforms</h2>
      <br/>
      {/* ======================================================== */}
     
      <img  src={wordpress} alt="" className="img-fluid lang-icon" />
      <img  src={wix} alt="" className="img-fluid lang-icon" />

      
      <br/>
      <br/>
      <h2 className="tech-header">Other Tech</h2>
      <br/>
      {/* ======================================================== */}
      <img  src={jira} alt="" className="img-fluid lang-icon" />
      <img  src={git} alt="" className="img-fluid lang-icon" />
      <img  src={vm} alt="" className="img-fluid lang-icon" />
      <img  src={salesforce} alt="" className="img-fluid lang-icon" />
      <img  src={photoshop} alt="" className="img-fluid lang-icon" />
      <img  src={premiere} alt="" className="img-fluid lang-icon" />
      {/* ======================================================== */}
    
      <hr/>
      
      </div>
    </div>

      </div>
    )}
    </Spring>


    

  );
}

export default Technology;  