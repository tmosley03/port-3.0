import React from 'react';
import './assets/css/About.css';
//import about from './assets/images/about.jpg'


function About() {
  return (
    <div className="content-component">
      {/* <hr /> */}

      <h1 className="component-header">About</h1>
      <br/>
      <hr />

      <img id="about" src="https://media.giphy.com/media/3oEhnb9Jod4xU9Xsvm/giphy.gif" alt="" className="img-fluid" />
      <hr />
      <div id="about-text-div"className="col-lg-8 col-md-6 col-xs-4">
      <p  className="text-justify">
      Thank you for taking the time to check out my site.  I am an experienced Full Stack Web Developer currently located in the Dallas Fort Worth area of north Texas, USA.  I travel whenever I get the chance and I’m always in search of that next bit of knowledge that forces me to approach things from a new angle.   I have trouble deciding weather jiu-jitsu or boxing is the most beautiful thing I’ve ever seen… or maybe it’s the rain forest? It depends on the day I guess.  If given the choice between Windows and Mac, I choose Linux.  As cliché’ as it is, I love coffee. Nothing fancy, just plain black coffee… good stuff.  Prince is my favorite artist of all time in any genre excluding no one. The guy was a genius.  I believe in taking chances.  Learning to to be comfortable in the midst of discomfort has proven to be one of the most valuable lessons life has bestowed upon me, without it I may never have fallen in love with programming.  I’m really, really, really okay at chess and will never turn down a match.  Experience is a dear teacher, but it is a fool that will learn from no other, so I tend to spend quite a bit of time consuming all sorts of tutorials on Udemy and Youtube whenever I find myself with some down time.  I take every encounter with a new person as an opportunity to learn something new, and perhaps should you need a developer for something you have in the pipeline, I’ll have the opportunity to meet with and learn something new and cool with you.
      <br/><br/>

- Thomas 
      </p>
      </div>
      <hr></hr>


    </div>

  );
}

export default About;  