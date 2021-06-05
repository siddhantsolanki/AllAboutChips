import React, { Component } from 'react';
import './iconbar.css';
import processor from './/pngs/processor.png';
import controller from './/pngs/controller.png';
import connection from './/pngs/connection.png';
import peripheral from './/pngs/peripheral.png';
import sensor from './/pngs/sensor.png';

class IconBar extends Component{
    render(){
        return(
            <div className="containericon">
                <ul className="dynamicicon">
                <li><span>
                <img src={controller} alt="controller-image" className="controller"/>
                </span></li>
                <li><span>
                <img src={processor} alt="processor-image" className="processor"/>
                </span></li>
                <li><span>
                <img src={sensor} alt="sensor-image" className="sensor"/>
                </span></li>
                <li><span>
                <img src={peripheral} alt="peripheral-image" className="peripheral"/>
                </span></li>
                <li> <span>
                <img src={connection} alt="connection-image" className="connection"/>
                </span></li>
                </ul>
            </div>
        );
    }
}
export default IconBar;