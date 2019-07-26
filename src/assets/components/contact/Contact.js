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
      <div className="col-md-8">
      <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium ac sapien ut feugiat. Ut sagittis tellus vitae dui consectetur, nec tempus neque pellentesque. Vivamus eu diam id massa pulvinar ultrices. Curabitur ac laoreet nunc. Morbi eu suscipit magna. Morbi quis justo mollis, pulvinar nisl eget, pellentesque turpis. Maecenas id nibh ac purus viverra semper a auctor quam. Etiam elementum tortor sit amet tortor ultrices commodo. Nulla tincidunt diam diam, non dapibus nunc rutrum ut. Cras nec arcu a dui fringilla commodo. Suspendisse tempor purus tincidunt finibus elementum. </p>
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