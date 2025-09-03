
import Navbar from './Navbar'
import bgPatternIntro from '../assets/Images/bg-pattern-intro-desktop.svg';



export default function Header() {

//  const backgroundStyle = {
//   backgroundImage: `url(${bgPatternIntro})`,
//   // backgroundSize: 'cover',
//   // backgroundRepeat: 'no-repeat',
//   // width: '100%',
//   // height: '20%' 
// };

return (
  <div className="header">
    
    <Navbar />
  </div>
);
}
