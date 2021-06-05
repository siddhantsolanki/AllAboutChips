import React,{ Component } from 'react';
import './text.css';

class TextRender extends Component{
    render(){
        return(
            <div classname="mainpage">
            <div className="container">
            <div className="static">Learn About</div>  
              <ul className="dynamic">
              <li><span>MicroControllers.</span></li>
              <li><span>MicroProcessors.</span></li>
              <li><span>Sensors.</span></li>
              <li><span>Peripherals.</span></li>
              <li><span>Connections.</span></li>
              </ul>
            </div>
            </div>
        );
    }
}
export default TextRender;