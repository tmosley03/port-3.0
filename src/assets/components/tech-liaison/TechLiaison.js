import React, { useState } from 'react';
import './assets/css/techLiaison.css';
import about from './assets/images/about.jpg'

// import officeSpace from './assets/images/office.gif';
import { useTrail, animated } from 'react-spring'



function TechLiaison() {


  const items = ['Lorem', 'ipsum', 'dolor', 'sit']
  const config = { mass: 5, tension: 2000, friction: 200 }
  const [toggle, set] = useState(true)
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    y: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, y: 20, height: 0 },
  })

  return (
   

    <div className="trails-main" onClick={() => set(state => !state)}>
       
      <div>
      <h1>test2</h1>
        {trail.map(({ y, height, ...rest }, index) => (
          <animated.div
            key={items[index]}
            className="trails-text"
            style={{ ...rest, transform: y.interpolate(y => `translate3d(0,${y}px,0)`) }}>
            <animated.div style={{ height }}><h1>HELLO WORLD!</h1></animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  )

}
// console.log('ping from liaison')
export default TechLiaison;  