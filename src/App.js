import './App.css';
import TopNav from './TopNav';
import TextRender from './TextRender.js'
import IconBar from './iconBar.js'
// import ContactUs from './ContactUs.js'

function App() {
  return (
    <div>
  <div className="container">
    <div className="first"> <TopNav/> </div>
    <div className="second"> <TextRender/> </div>  
    <div className="third"><IconBar/></div>
    {/* <div className="fourth"><ContactUs/></div> *      make it for creating the contact bar */}
    </div>
    <div className="container-scroll-1">
    <div className="scroll-1">Scroll Down for</div>
    <div className="scroll-2">MicroControllers.</div>
    </div>
    </div>
  );
}

export default App;
