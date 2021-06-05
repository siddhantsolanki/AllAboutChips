import { render } from '@testing-library/react';
import './TopNav.css'
import React, { Component } from 'react';
class TopNav extends Component{
    render(){
        return(
            <div className="top">
                <div className="text">All About Chips</div>
                <div className="buttons">
                <button id="microprocessors">Microprocessors</button>
                <button id="microcontrollers">Microcontrollers</button>
                <button id="sensors">Sensors</button>
                <button id="peripherals">Peripherals</button>
                <button id="about">About Us</button>
                </div>
            </div>      
        );
    }
}

export default TopNav;