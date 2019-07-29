import React from 'react';
import './assets/css/Experience.css';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



function Experience() {
  return (
    <div className="col-md-12 place-hldr-div">
      <h1 className="component-header">EXPERIENCE</h1>
      <hr />
      <img id="tech-header-img" src="https://media.giphy.com/media/dbtDDSvWErdf2/giphy.gif" alt="" className="img-fluid" />
      <hr />
      <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium ac sapien ut feugiat. Ut sagittis tellus vitae dui consectetur, nec tempus neque pellentesque. Vivamus eu diam id massa pulvinar ultrices. Curabitur ac laoreet nunc. Morbi eu suscipit magna. Morbi quis justo mollis, pulvinar nisl eget, pellentesque turpis. Maecenas id nibh ac purus viverra semper a auctor quam. Etiam elementum tortor sit amet tortor ultrices commodo. Nulla tincidunt diam diam, non dapibus nunc rutrum ut. Cras nec arcu a dui fringilla commodo. Suspendisse tempor purus tincidunt finibus elementum.</p>
      <hr />
      <br />
      <section>
        <div className="container">
          <div className="row">

            <div className="ex-card col-md-3">
              <h2 className="card-header">Tech</h2>
              <hr />
              <ul>
                <li className="exp-bullets">2 Years Web Development</li>
                <li className="exp-bullets">Real Page Inc. - Full Stack Web Developer</li>
                <li className="exp-bullets">Junction AI - Full Stack Web Developer</li>
                <li className="exp-bullets">U.S. Army - Network Switching Systems Admin</li>
              </ul>
            </div>

            <div className="ex-card col-md-3">
              <h2 className="card-header ">Marketing</h2>
              <hr />
              <ul>
                <li className="exp-bullets">Thing 1</li>
                <li className="exp-bullets">Thing 2</li>
                <li className="exp-bullets">Thing 3</li>
              </ul>
            </div>

            <div className="ex-card col-md-3">
              <h2 className="card-header ">Leadership</h2>
              <hr />
              <ul>
                <li className="exp-bullets">Thing 1</li>
                <li className="exp-bullets">Thing 2</li>
                <li className="exp-bullets">Thing 3</li>
              </ul>
            </div>

          </div>
        </div>
      </section>



      <section>
        <div className="container">
          <div className="row">
            <div className="ex-card col-md-3">
              <h2 className="card-header">Creative</h2>
              <hr />
              <ul>
                <li className="exp-bullets">Thing 1</li>
                <li className="exp-bullets">Thing 2</li>
                <li className="exp-bullets">Thing  3</li>
              </ul>
            </div>

            <div className="ex-card col-md-3">
              <h2 className="card-header ">Strategy</h2>
              <hr />
              <ul>
                <li className="exp-bullets">Thing 1</li>
                <li className="exp-bullets">Thing 2</li>
                <li className="exp-bullets">Thing 3</li>
              </ul>
            </div>

            <div className="ex-card col-md-3">
              <h2 className="card-header ">Community</h2>
              <hr />
              <ul>
                <li className="exp-bullets">Thing 1</li>
                <li className="exp-bullets">Thing 2</li>
                <li className="exp-bullets">Thing 3</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <hr />
      <a href="https://drive.google.com/file/d/1WckPTn8XZVkfiyfyEhkJ0XI8O6Xz9_54/view?usp=sharing" target="_blank"  rel="noopener noreferrer">
        <h2 className="card-header">View Full Resume</h2>
      </a>
    </div>

  );
}

export default Experience;  