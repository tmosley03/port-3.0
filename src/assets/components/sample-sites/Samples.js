import React from 'react';
import './assets/css/Samples.css';
import blutrend from './assets/images/blutrend.png'
import propertyware from './assets/images/propertyware.png'
import mcd from './assets/images/mcd.png'
import realpage from './assets/images/realpage.png'
import csa from './assets/images/csa.png'





function Samples() {
  return (
<div>

    <h2>Site Expamples</h2>
    <br />
    <br />
    {/* 1 */}
    <div className='example-wrapper'>
      <img src= {realpage} alt='screen-shot' className='site-screenshot' />
      <br />
      <p >RealPage.com</p>
      <p className=" example-text text-justify"> RealPage.com is the flagship website for Real Page Inc.. I currently maintain, edit, and create new pages and functionality for this site as a part of a four person team.</p>
    </div>
     {/* 2 */}
    <div className='example-wrapper'>
      <img src= {propertyware} alt='screen-shot' className='site-screenshot' />
      <br />
      <p >Propertyware.com</p>
      <p className=" example-text text-justify"> Propertyware.com serves as a portal for the Propertyware tool, a product offered by Real Page Inc. I currently maintain, edit, and create new pages and functionality for this site as a part of a four person team.</p>
    </div>

    {/* 3 */}
    <div className='example-wrapper'>
      <img src= {blutrend} alt='screen-shot' className='site-screenshot' />
      <br />
      <p >BlueTrend.com</p>
      <p className="example-text text-justify"> RealPage.com is the flagship website for Real Page Inc.. I currently maintain, edit, and create new pages and functionality for this site as a part of a four person team.</p>
    </div>
    {/* 4 */}
    <div className='example-wrapper'>
      <img src= {csa} alt='screen-shot' className='site-screenshot' />
      <br />
      <p >CsaSecure.com</p>
      <p className="example-text text-justify"> Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.</p>
    </div>
    {/* 5 */}
    <div className='example-wrapper'>
      <img src= {mcd} alt='screen-shot' className='site-screenshot' />
      <br />
      <p >JMC McDonald's Group</p>
      <p className="example-text text-justify"> Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.</p>
    </div>

<hr />

</div> 
  );
}

export default Samples;  