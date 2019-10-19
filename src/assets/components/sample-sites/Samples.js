import React from 'react';
import './assets/css/Samples.css';
import csaDesktop from './assets/images/csaSecure_Desktop.png'





function Samples() {
  return (
<div>

    <h2>Site Expamples</h2>
    <br />
    <br />
    {/* 1 */}
    <div className='example-wrapper'>
      <img src= {csaDesktop} alt='screen-shot' className='site-screenshot' />
      <br />
      <p >TITLE</p>
      <p className=" example-text text-justify"> Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.</p>
    </div>
     {/* 2 */}
    <div className='example-wrapper'>
      <img src= {csaDesktop} alt='screen-shot' className='site-screenshot' />
      <br />
      <p >TITLE</p>
      <p className=" example-text text-justify"> Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.</p>
    </div>

    {/* 3 */}
    <div className='example-wrapper'>
      <img src= {csaDesktop} alt='screen-shot' className='site-screenshot' />
      <br />
      <p >TITLE</p>
      <p className="example-text text-justify"> Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.</p>
    </div>
    {/* 4 */}
    <div className='example-wrapper'>
      <img src= {csaDesktop} alt='screen-shot' className='site-screenshot' />
      <br />
      <p >TITLE</p>
      <p className="example-text text-justify"> Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.</p>
    </div>

<hr />

</div> 
  );
}

export default Samples;  