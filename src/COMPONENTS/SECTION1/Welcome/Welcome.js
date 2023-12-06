import React from 'react';
import './welcome.css';
import Mainbutton from '../../mainbutton/Mainbutton';
import cv from '../../images/Basant Elsobky.pdf';

const Welcome = () => {
  return (
    <>
    
    <div className='fluid-container home'>
      <div className='container text-center ' >
   
        <div className='name  d-flex flex-column align-content-center justify-content-center'>
          <h4  className='p1'>Hi There, I'm </h4>
          <p   className='p2'>Basant Elsobky </p>
          <div   className="waviy">
            <span style={{ '--i': 1 }}>W</span>
            <span style={{ '--i': 2 }}>E</span>
            <span style={{ '--i': 3 }}>P D</span>
            <span style={{ '--i': 5 }}>E</span>
            <span style={{ '--i': 6 }}>V</span>
            <span style={{ '--i': 7 }}>E</span>
            <span style={{ '--i': 8 }}>L</span>
            <span style={{ '--i': 9 }}>O</span>
            <span style={{ '--i': 10 }}>P</span>
            <span style={{ '--i': 11 }}>E</span>
            <span style={{ '--i': 12 }}>R</span>
          </div>
          <a className='mt-4' href={cv} download={cv}>
                <Mainbutton name="Download CV" />
              </a>
        </div>
      </div>
      <div className='container mt-4 pt-4 text-center'>
        
      </div></div>
    </>
  );
}

export default Welcome;
