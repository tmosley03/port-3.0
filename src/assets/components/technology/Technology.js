import React from 'react';
import './assets/css/Technology.css';
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
    <div id="tech-content-div" className="content-component col-lg-8 col-md-8 col-sm-6">
    

      <h1 className="component-header">TECHNOLOGY</h1>
      <hr />
      <img id="tech-header-img" src="https://media.giphy.com/media/l2SpRpwOiLcaqb1XG/giphy.gif" alt="" className="img-fluid" />
      <hr />
      <p className=" text-justify">
      The MERN (Mongo, Express, React, Node) stack is a powerful and popular stack for modern web development and has thus far been the focus of my learning. However, it goes without saying, there is always more to learn and, for me, that is the best part of progamming! I'm passionate about aquiring knowledge and new skills and applying them to solving problems. If you are interested in discussing how I can help you or your organization, please contact me at the links below.
      </p>
      <hr />
      <div className="lang-div">
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
      <hr/>
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
      <hr/>
      <h2 className="tech-header">Build Tools</h2>
      <br/>
      {/* ======================================================== */}
      <img  src={webpack} alt="" className="img-fluid lang-icon" />
      <img  src={parcel} alt="" className="img-fluid lang-icon" />
      <img  src={yarn} alt="" className="img-fluid lang-icon" />
      <img  src={npm} alt="" className="img-fluid lang-icon" />
      
      <br/>
      <hr/>
      <h2 className="tech-header">Other Tech / WYSIWYG Platforms</h2>
      <br/>
      {/* ======================================================== */}
      <img  src={jira} alt="" className="img-fluid lang-icon" />
      <img  src={git} alt="" className="img-fluid lang-icon" />
      <img  src={vm} alt="" className="img-fluid lang-icon" />
      <img  src={salesforce} alt="" className="img-fluid lang-icon" />
      <img  src={photoshop} alt="" className="img-fluid lang-icon" />
      <img  src={premiere} alt="" className="img-fluid lang-icon" />
      <img  src={wordpress} alt="" className="img-fluid lang-icon" />
      <img  src={wix} alt="" className="img-fluid lang-icon" />

      <br/>
      <hr/>
      <h2 className="tech-header">Operating Systems</h2>
      <br/>
      {/* ======================================================== */}
      <img  src={ubuntu} alt="" className="img-fluid lang-icon" />
      <img  src={mac} alt="" className="img-fluid lang-icon" />
      <img  src={windows} alt="" className="img-fluid lang-icon" />
      {/* ======================================================== */}
    
      <hr />
      
      </div>
    </div>

  );
}

export default Technology;  