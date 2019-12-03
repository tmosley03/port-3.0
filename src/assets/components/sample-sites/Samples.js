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
<div className='col-lg-8 sample-text-header'>
    <p>SAMPLES</p>
    <p className='text-justify'> I currently maintain, edit, and create new pages for the sites below as a part of a four person team.  The primary tools used are:<span className="sample-lang"> HTML5, SASS (CSS3), Javascript, Gulp, SQL, and Wordpress for SEO</span>.</p>
  
    </div>
    <hr />
    <br />
    <br />
    {/* 1 */}
    <div className='example-wrapper'>
     
      <a href='https://www.realpage.com' rel='noopener' target='blank'>
      <img src= {realpage} alt='screen-shot' className='site-screenshot' /></a>
      <br />
      <p >RealPage.com</p>
     
    </div>
     {/* 2 */}
    <div className='example-wrapper'>
    
    <a href='https://www.propertyware.com' rel='noopener' target='blank'>
      <img src= {propertyware} alt='screen-shot' className='site-screenshot' /></a>
      <br />
      <p >Propertyware.com</p>
      
    </div>

    {/* 3 */}
    <div className='example-wrapper'>
    
    <a href='http://blutrend.com' target='blank'>
      <img src= {blutrend} alt='screen-shot' className='site-screenshot' /></a>
      <br />
      <p >BlueTrend.com</p>
     
    </div>
    {/* 4 */}
    <div className='example-wrapper'>
   
    <a href='http://csasecure.com'  rel='noopener' target='blank'>
      <img src= {csa} alt='screen-shot' className='site-screenshot' /></a>
      <br />
      <p >CsaSecure.com</p>
      
    </div>
    {/* 5 */}
    <div className='example-wrapper'>
    
    <a href='http://jmcmcdonalds.com'  rel='noopener' target='blank'>
      <img src= {mcd} alt='screen-shot' className='site-screenshot' /></a>
      <br />
      <p >JMC McDonald's Group</p>
     
    </div>

<hr />
{/* 6 */}
{/* <div className='example-wrapper'>
 
    <a href='http://csasecure.com'  rel='noopener' target='blank'>
      <img src= {csa} alt='screen-shot' className='site-screenshot' /></a>
      <br />
      <p >CsaSecure.com</p>
      
    </div> */}
</div> 
  );
}

export default Samples;  