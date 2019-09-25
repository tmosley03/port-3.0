import React, { Component } from 'react';
import './assets/css/ToggleBtn.css';

class ToggleBtn extends Component {

    render(){
        return(     
            <button className="btn toggle-btn">
                <div className="toggle-line"></div>
                <div className="toggle-line"></div>
                <div className="toggle-line"></div>
            </button>
        )
    }
}

export default ToggleBtn;