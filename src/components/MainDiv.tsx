import React from 'react'
import Heading from './Heading';
import desktop from '../assets/Images/illustration-laptop-desktop.svg';
import editorDesktop from '../assets/Images/illustration-editor-desktop.svg';
import phones from '../assets/Images/illustration-phones.svg'


export default function MainDiv() {
  return (
    <div className="main-div">
      <div className="box1">
        <div className="sec1content">
          <Heading
            title="Introducing an extensive editor"
            paragraph="Nam in tellus tellus. Curabitur semper nibh ut sapien vestibulum, in suscipit tortor placerat. Curabitur egestas, purus vel lobortis viverra, lacus sem eleifend mi, eu finibus nisi purus nec augue. Nunc semper porttitor maximus. Vestibulum posuere vulputate libero sit amet dictum. Integer a suscipit elit, in vestibulum augue. Nunc eu tortor quam."
          />
          <Heading
            title="Reburst content management"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget venenatis mi. Etiam suscipit nec diam quis consequat. Aliquam mattis diam vel pellentesque tristique. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam at lacinia metus."
          />
        </div>
        <div className="content-img">
          <img
            src={editorDesktop}
            alt="Desktop image"
            style={{ backgroundSize: "cover", height: "100%", width: "100%" }}
          />
        </div>
      </div>
      <div className="box2">
        <div className="sec2img">
          <img
            src={phones}
            alt="Desktop image"
            style={{ backgroundSize: "cover", height: "100%", width: "100%" }}
          />
        </div>
        <div className="sec2content"></div>
      </div>
      <div className="box3">
        <div className="sec3img">
          <img
            src={desktop}
            alt="Desktop image"
            style={{ backgroundSize: "cover", height: "100%", width: "100%" }}
          />
        </div>
        <div className="sec3content">
          <Heading
            title="Free, Open, Simple"
            paragraph="Nam in tellus tellus. Curabitur semper nibh ut sapien vestibulum, in suscipit tortor placerat. Curabitur egestas, purus vel lobortis viverra, lacus sem eleifend mi, eu finibus nisi purus nec augue. Nunc semper porttitor maximus. Vestibulum posuere vulputate libero sit amet dictum. Integer a suscipit elit, in vestibulum augue. Nunc eu tortor quam."
          />
          <Heading
            title="Powerful tooling"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget venenatis mi. Etiam suscipit nec diam quis consequat. Aliquam mattis diam vel pellentesque tristique. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam at lacinia metus."
          />
        </div>
      </div>
    </div>
  );
}
