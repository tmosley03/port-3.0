import React from 'react';
import './assets/css/Contact.css';
// import contact from './assets/images/contact.jpeg'
import nerdy from './assets/images/nerdy.png'

function Contact() {
  return (
    <div className="col-md-8  place-hldr-div">
      <hr />

      <p className="text-center">THIS IS THE CONTACT PAGE</p>
      <hr />

      <img id="nerdy" src={nerdy} alt="" className="img-fluid text-center" />
      <hr />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium ac sapien ut feugiat. Ut sagittis tellus vitae dui consectetur, nec tempus neque pellentesque. Vivamus eu diam id massa pulvinar ultrices. Curabitur ac laoreet nunc. Morbi eu suscipit magna. Morbi quis justo mollis, pulvinar nisl eget, pellentesque turpis. Maecenas id nibh ac purus viverra semper a auctor quam. Etiam elementum tortor sit amet tortor ultrices commodo. Nulla tincidunt diam diam, non dapibus nunc rutrum ut. Cras nec arcu a dui fringilla commodo. Suspendisse tempor purus tincidunt finibus elementum.
<br />
        <hr />

        <hr />
        <br />

      </p>



    </div>

  );
}

export default Contact;  