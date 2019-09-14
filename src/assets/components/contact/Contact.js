import React from 'react';
import './assets/css/Contact.css';
// import contact from './assets/images/contact.jpeg';





function Contact() {
  return (
    <div className="col-md-12  place-hldr-div">
      <h1 className="component-header">Contact</h1>
      <hr />
      <img src="https://media.giphy.com/media/BVStb13YiR5Qs/giphy.gif" alt="" />
      <hr />
      <div  id="contact-text" className="col-md-8">
      <p className="text-justify"> </p>
      </div>
      <br />
        
        <div>
          <form id="my-form" className="col-md-6">
            <input className="input" type="text" name="NAME" />
            <br/>
            <input className="input" type="text" name="EMAIL" />
            <br/>
            <input className="input" type="text" name="Phone " />
            <br/>
            <input className="input" id="msg-area" type="text-area" name="Message" />
          </form>
          <button>Send</button>
        </div>
      
        <br />

     

      {/*  */}



      {/*  */}

    </div>

  );
}

export default Contact;  