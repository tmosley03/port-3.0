import React from 'react';
import './assets/css/Backdrop.css';

const Backdrop = (props) => {

    
        return(     
            <div id='backdrop' onClick={ props.click }></div>
        )
    
}

export default Backdrop;