import React from 'react';
import './assets/css/Technology.css';
import technology from './assets/images/technology.jpg'
// =========================================
import ajax from './assets/images/tech-icons/ajax.png'
import bootstrap from './assets/images/tech-icons/bootstrap.png'
import css3 from './assets/images/tech-icons/css3.png'
import express from './assets/images/tech-icons/express.png'
import firebase from './assets/images/tech-icons/firebase.png'
// =========================================
import git from './assets/images/tech-icons/git.png'
import html from './assets/images/tech-icons/html.png'
import javascript from './assets/images/tech-icons/javascript.png'
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
// =========================================
import restapi from './assets/images/tech-icons/restapi.png'
import salesforce from './assets/images/tech-icons/salesforce.png'
import sql from './assets/images/tech-icons/sql.png'
import ubuntu from './assets/images/tech-icons/ubuntu.png'
import vue from './assets/images/tech-icons/vue.png'
import wordpress from './assets/images/tech-icons/wordpress.png'
import yarn from './assets/images/tech-icons/yarn.png'
// =========================================



function Technology() {
  return (
    <div className="col-md-12 text-justify place-hldr-div">
      <hr />

      <p className="text-center">THIS IS THE TECHNOLOGY PAGE</p>
      <hr />
      <img id="about" src={technology} alt="" className="img-fluid" />
      <hr />
      <p>
      The MERN (Mongo, Express, React, Node) stack is a powerful and popular stack for modern web development and has thus far been the focus of my learning. However, it goes without saying, there is always more to learn and, for me, that is the best part of progamming! I'm passionate about aquiring knowledge and new skills and applying them to solving problems. If you are interested in discussing how I can help you or your organization, please contact me at the links below.
      </p>
      <hr></hr>
      <div className="lang-div">
        <h2 className="tech-header">Front End</h2>
        <br/>
        {/* ======================================================== */}
      <img id="about" src={ajax} alt="" className="img-fluid lang-icon" />
      <img id="about" src={bootstrap} alt="" className="img-fluid lang-icon" />
      <img id="about" src={css3} alt="" className="img-fluid lang-icon" />
      <img id="about" src={express} alt="" className="img-fluid lang-icon" />
      <img id="about" src={firebase} alt="" className="img-fluid lang-icon" />
      <br/>
      <hr/>
      <h2 className="tech-header">Back End</h2>
      <br/>
      {/* ======================================================== */}
      <img id="about" src={git} alt="" className="img-fluid lang-icon" />
      <img id="about" src={html} alt="" className="img-fluid lang-icon" />
      <img id="about" src={javascript} alt="" className="img-fluid lang-icon" />
      <img id="about" src={jira} alt="" className="img-fluid lang-icon" />
      <img id="about" src={jquery} alt="" className="img-fluid lang-icon" />
      <img id="about" src={laravel} alt="" className="img-fluid lang-icon" />
      <img id="about" src={materialize} alt="" className="img-fluid lang-icon" />
      <img id="about" src={mongo} alt="" className="img-fluid lang-icon" />
      <img id="about" src={node} alt="" className="img-fluid lang-icon" />
      <img id="about" src={npm} alt="" className="img-fluid lang-icon" />
      <br/>
      <hr/>
      <h2 className="tech-header">Build Tools</h2>
      <br/>
      {/* ======================================================== */}
      <img id="about" src={parcel} alt="" className="img-fluid lang-icon" />
      <img id="about" src={photoshop} alt="" className="img-fluid lang-icon" />
      <img id="about" src={php} alt="" className="img-fluid lang-icon" />
      <img id="about" src={premiere} alt="" className="img-fluid lang-icon" />
      <img id="about" src={react} alt="" className="img-fluid lang-icon" />
      <img id="about" src={restapi} alt="" className="img-fluid lang-icon" />
      <br/>
      <hr/>
      <h2 className="tech-header">Other Tech / WYSIWYG Platforms</h2>
      <br/>
      {/* ======================================================== */}
      <img id="about" src={salesforce} alt="" className="img-fluid lang-icon" />
      <img id="about" src={sql} alt="" className="img-fluid lang-icon" />
      <img id="about" src={ubuntu} alt="" className="img-fluid lang-icon" />
      <img id="about" src={vue} alt="" className="img-fluid lang-icon" />
      <img id="about" src={wordpress} alt="" className="img-fluid lang-icon" />
      <img id="about" src={yarn} alt="" className="img-fluid lang-icon" />
      {/* ======================================================== */}
<hr/>
      </div>
    </div>

  );
}

export default Technology;  