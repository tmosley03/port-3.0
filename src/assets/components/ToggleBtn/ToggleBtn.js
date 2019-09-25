import React from 'react';
import './assets/css/ToggleBtn.css';

const ToggleBtn = (props) => {

    
        return(     
            <div>
            <button className="btn toggle-btn" onClick ={props.click}>
                <div className="toggle-line"></div>
                <div className="toggle-line"></div>
                <div className="toggle-line"></div>
            </button>
            </div>
        )
    
}

export default ToggleBtn;