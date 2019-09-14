import React from 'react';
import './assets/css/Experience.css';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



function Experience() {
  return (
    <div >
      <h1 className="component-header">EXPERIENCE</h1>
      <hr />
      <img id="tech-header-img" src="https://media.giphy.com/media/dbtDDSvWErdf2/giphy.gif" alt="" className="img-fluid" />
      <hr />
      <div id="exp-content" className="exp-content">
        {/* <p className="text-justify col-lg-8 col-md-8 col-sm-6 exp-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium ac sapien ut feugiat. Ut sagittis tellus vitae dui consectetur, nec tempus neque pellentesque. Vivamus eu diam id massa pulvinar ultrices. Curabitur ac laoreet nunc. Morbi eu suscipit magna. Morbi quis justo mollis, pulvinar nisl eget, pellentesque turpis. Maecenas id nibh ac purus viverra semper a auctor quam. Etiam elementum tortor sit amet tortor ultrices commodo. Nulla tincidunt diam diam, non dapibus nunc rutrum ut. Cras nec arcu a dui fringilla commodo. Suspendisse tempor purus tincidunt finibus elementum.</p>
        <hr />
        <br /> */}

        <div id="card-container" className="container content-component col-lg-8 col-md-8 col-sm-6">
            {/* 1 */}
            <div className="ex-card">
              <h2 className="card-header">Tech</h2>
              <hr />
              <ul>
                <li className="exp-bullets">2 Years Web Development</li>
                <br />
                <li className="exp-bullets">Real Page Inc. - Full Stack Web Developer</li>
                <br />
                <li className="exp-bullets">Junction AI - Full Stack Web Developer</li>
                <br />
                <li className="exp-bullets">Freelance Tech Support / IT Consulting</li>
                <br />
                <li className="exp-bullets">U.S. Army - Network Switching Systems Admin</li>
              </ul>
            </div>

            {/* 2 */}
            <div className="ex-card">
              <h2 className="card-header ">Marketing</h2>
              <hr />
              <ul>
                <li className="exp-bullets">Spokesman on Toyota Motor Corp. National Auto Show Team</li>
                <br />
                <li className="exp-bullets">Marketing Consultant - Holtel Association of North Texas</li>
                <br />
                <li className="exp-bullets">Managed Social Media platforms for various companies and brands</li>
              </ul>
            </div>

            {/* 3 */}
            <div className="ex-card">
              <h2 className="card-header ">Leadership</h2>
              <hr />
              <ul>
                <li className="exp-bullets">Thing 1</li>
                <li className="exp-bullets">Thing 2</li>
                <li className="exp-bullets">Thing 3</li>
              </ul>
            </div>
         
        
        
         {/* 4 */}
       
          <div className="ex-card">
            <h2 className="card-header">Creative</h2>
            <hr />
            <ul>
              <li className="exp-bullets">Thing 1</li>
              <li className="exp-bullets">Thing 2</li>
              <li className="exp-bullets">Thing  3</li>
            </ul>
          </div>

         

         
      </div>

      </div>
      <hr />
      <a href="https://drive.google.com/file/d/1WckPTn8XZVkfiyfyEhkJ0XI8O6Xz9_54/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        <h2 className="card-header">View Full Resume</h2>
      </a>
    </div>

  );
}

export default Experience;  