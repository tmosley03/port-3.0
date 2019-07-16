import React from 'react';
import './assets/css/Experience.css';
import experience from './assets/images/experience.jpg'


function Experience() {
  return (
    <div className="col-md-8 text-justify place-hldr-div">
      <hr />

      <p className="text-center">THIS IS THE EXPERIENCE PAGE</p>
      <hr />
      <img id="about" src={experience} alt="" className="img-fluid" />
      <hr />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium ac sapien ut feugiat. Ut sagittis tellus vitae dui consectetur, nec tempus neque pellentesque. Vivamus eu diam id massa pulvinar ultrices. Curabitur ac laoreet nunc. Morbi eu suscipit magna. Morbi quis justo mollis, pulvinar nisl eget, pellentesque turpis. Maecenas id nibh ac purus viverra semper a auctor quam. Etiam elementum tortor sit amet tortor ultrices commodo. Nulla tincidunt diam diam, non dapibus nunc rutrum ut. Cras nec arcu a dui fringilla commodo. Suspendisse tempor purus tincidunt finibus elementum.</p>
      <hr />>
    </div>

  );
}

export default Experience;  