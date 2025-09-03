
import Navbar from './Navbar'
import bgPatternIntro from '../assets/Images/bg-pattern-intro-desktop.svg';
import Button from './Button';



export default function Header() {


return (
  <div className="header">
    <Navbar />
    <div className='headerBottum'>
      <h1>A Modern publishing platform</h1>
      <h3>Grow your audiance and build your online brand</h3>
    </div>
    <div className='headerBtn'>
    <Button backgroundColor="white" textColor="brown" size="large">
            Start for Free
          </Button>
          <Button backgroundColor="Brown" textColor="white" size="large" >
            Learn More
          </Button>
      </div>
  </div>
);
}
