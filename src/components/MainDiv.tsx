import React from 'react'
import Heading from './Heading';
import desktop from '../assets/Images/illustration-laptop-desktop.svg';
import editorDesktop from '../assets/Images/illustration-editor-desktop.svg';
import phones from '../assets/Images/illustration-phones.svg'


export default function MainDiv() {
  return (
    <div
      className="main-div" >
      <div className="box1">
          <div className="sec1content">
            <Heading title="dsjkflghfglihjfl" 
            paragraph="gfgfhgfhghbbnbvv"
            />
          </div>
          <div className="content-img">
            <img src={editorDesktop} alt='Desktop image' style={{backgroundSize:'cover', height:'100%',width:'100%'}}/>
          </div>
      
        </div>
        <div className="box2">
            <div className='sec2img'>
              <img src={phones} alt='Desktop image' style={{backgroundSize:'cover', height:'100%',width:'100%'}}/>
            </div>
            <div className='sec2content'>

            </div>
        </div>
        <div className="box3">
              <div className='sec3img' >
                <img src={desktop} alt='Desktop image' style={{backgroundSize:'cover', height:'100%',width:'100%'}}/>
              </div>
              <div className='sec3content'>

              </div>
        </div>
    </div>
  );
}
