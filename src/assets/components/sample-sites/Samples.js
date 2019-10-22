import React from 'react';
import './assets/css/Samples.css';
import blutrend from './assets/images/blutrend.png'
import propertyware from './assets/images/propertyware.png'
// import mcd from './assets/images/mcd.png'
import realpage from './assets/images/realpage.png'
import csa from './assets/images/csa.png'





function Samples() {
  return (
<div className="col-lg-12">

    <h2>Site Expamples</h2>
    <br />
    <br />
    {/* 1 */}
    <div className='example-wrapper'>
      <a href='https://www.realpage.com' rel='noopener' target='blank'>
      <img src= {realpage} alt='screen-shot' className='site-screenshot' /></a>
      <br />
      <p >RealPage.com</p>
      <p className=" example-text text-justify"> RealPage.com is the flagship website for Real Page Inc.. I currently maintain, edit, and create new pages and functionality for this site as a part of a four person team.</p>
    </div>
     {/* 2 */}
    <div className='example-wrapper'>
    <a href='https://www.propertyware.com' rel='noopener' target='blank'>
      <img src= {propertyware} alt='screen-shot' className='site-screenshot' /></a>
      <br />
      <p >Propertyware.com</p>
      <p className=" example-text text-justify"> RealPage.com is the flagship website for Real Page Inc.. I currently maintain, edit, and create new pages and functionality for this site as a part of a four person team.</p>
    </div>

    {/* 3 */}
    <div className='example-wrapper'>
    <a href='http://blutrend.com' target='blank'>
      <img src= {blutrend} alt='screen-shot' className='site-screenshot' /></a>
      <br />
      <p >BlueTrend.com</p>
      <p className="example-text text-justify">RealPage.com is the flagship website for Real Page Inc.. I currently maintain, edit, and create new pages and functionality for this site as a part of a four person team..</p>
    </div>
    {/* 4 */}
    <div className='example-wrapper'>
    <a href='http://csasecure.com'  rel='noopener' target='blank'>
      <img src= {csa} alt='screen-shot' className='site-screenshot' /></a>
      <br />
      <p >CsaSecure.com</p>
      <p className="example-text text-justify"> RealPage.com is the flagship website for Real Page Inc.. I currently maintain, edit, and create new pages and functionality for this site as a part of a four person team.</p>
    </div>
    {/* 5 */}
    {/* <div className='example-wrapper'>
    <a href='http://jmcmcdonalds.com'  rel='noopener' target='blank'>
      <img src= {mcd} alt='screen-shot' className='site-screenshot' /></a>
      <br />
      <p >JMC McDonald's Group</p>
      <p className="example-text text-justify">RealPage.com is the flagship website for Real Page Inc.. I currently maintain, edit, and create new pages and functionality for this site as a part of a four person team.</p>
    </div> */}

<hr />

</div> 
  );
}

export default Samples;  