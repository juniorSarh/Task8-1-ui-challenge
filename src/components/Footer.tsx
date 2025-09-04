import React from 'react'

export default function Footer() {
  return (
    
      <div className="footer">
        <div className="navbar-logo">
        <img src="src/assets/Images/logo.svg"></img>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <h4>Links</h4>
        <a href="#home" style={{ margin: '4px 0' }}>Home</a>
        <a href="#about" style={{ margin: '4px 0' }}>About</a>
        <a href="#services" style={{ margin: '4px 0' }}>Services</a>
        <a href="#contact" style={{ margin: '4px 0' }}>Contact</a>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        margin:'30px',
      }}>
        <h4>List1</h4>
        <ul style={{ paddingLeft: '20px', margin: 0
          
         }}>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <h4>List2</h4>
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
      </div>
  );
}
