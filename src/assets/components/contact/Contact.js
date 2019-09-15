import React from 'react';
import './assets/css/Contact.css';
import linkedin from './assets/images/linkedin.png'
import email from './assets/images/email.png'
import github from './assets/images/github.png'
// import contact from './assets/images/contact.jpeg';





function Contact() {
  return (
    <div className="">
      <h1 className="component-header">Contact</h1>
      <hr />
      <img src="https://media.giphy.com/media/BVStb13YiR5Qs/giphy.gif" alt="" />
      <br/>
      <a href="mailto: tlm3dev@gmail.com" target="_blank" rel="noopener noreferrer">
      <img src={email} alt="email" className="contact-icon"/>
      </a>

      <a href="https://github.com/tmosley03" target="_blank" rel="noopener noreferrer">
      <img src={github} alt="github" className="contact-icon"/>
      </a>

      <a href="https://www.linkedin.com/in/tmosley03/" target="_blank" rel="noopener noreferrer">
      <img src={linkedin} alt="linkedin" className="contact-icon"/>
      </a>
      <hr />
      <div className="content-component col-lg-8 col-md-6 col-xs-4 ">
     
      <br />
        
       <p className="text-justify">Whether you are a looking to hire a full time developer for a position you need to fill or maybe you just need help with a short term project, I'd love to hear from you.  I'm always on the lookout for the projects to participate in in whatever capacity makes the most sense be it development, marketing, or even working as a conduit between technical and non technical parts of your orginization. Thank you for your consideration and I look forward to discussing how I can add to your next project.  </p>
      
        <br />

     

      {/*  */}



      {/*  */}
</div>
    </div>

  );
}

export default Contact;  