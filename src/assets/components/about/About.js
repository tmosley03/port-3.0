import React from 'react';
import './assets/css/About.css';
//import about from './assets/images/about.jpg'


function About() {
  return (
    <div className="place-hldr-div">
      {/* <hr /> */}

      <h1 className="component-header">About</h1>
      <br/>
      <hr />

      <img id="about" src="https://media.giphy.com/media/3oEhnb9Jod4xU9Xsvm/giphy.gif" alt="" className="img-fluid" />
      <hr />
      <div id="about-text-div"className="col-lg-8 col-md-6 col-xs-4">
      <p  className="text-justify">I am a Full Stack Web developer with a passion for problem solving. I am currently seeking a full time position as a Junior Front-End Developer. My ideal work situation would be to join a company with a strong development team that promotes continual learning and creative problem solving. With almost 10 years of sole proprietorship under my belt, I have had the opportunity to serve, partner with, and learn from a wide array of clientele including but not limited to, non-profits, small mom & pop business, large corporations, franchises, and individual consumers. </p>
     
      <p className="text-justify">
      I began coding on my own in early 2017 and recently completed the Full Stack Web Development Bootcamp at Southern Methodist University in Dallas, TX. My goal is to draw from my experience as a small business owner and sole proprietor to identify and develop web based solutions that make life a little bit sweeter. I am more than confident that once placed on the right team, anything and everything becomes possible. If you have any questions or would like more information, please feel free to contact me via the links below. I look forward to building with you!.
         <br />
      -Thomas Mosley
      </p>
      </div>
      <hr></hr>


    </div>

  );
}

export default About;  