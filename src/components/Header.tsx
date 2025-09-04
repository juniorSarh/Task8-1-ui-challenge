
import Navbar from './Navbar'
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
    <Button backgroundColor="white" textColor="#f57c64" size="large">
            Start for Free
          </Button>
          <Button backgroundColor="#f57c64" textColor="white" size="large" >
            Learn More
          </Button>
      </div>
  </div>
);
}
