import React from 'react';
import './section4.css';
import Colum from './Colum';

const Section4 = () => {
  return (
    <>
      <div className='fluid-container cen'>
        <div className='container'>
          <div className='row'>

            <div className='col-md-4 col-sm-12'>
              <div>
                <h2>Education</h2>
              </div>
              <div data-aos="fade-right" className='cenn' style={{ height: '500px', marginBottom:'40px'  }}>
                <Colum date='2023' place='Wichita University' />
                <Colum date='2019-2023' place='Egyptian E-Learning University' />
              </div>
            </div>

            <div data-aos="fade-right" data-aos-delay="50" className='col-md-4 col-sm-12'>
              <div>
                <h2>Experience</h2>
              </div>
              <div className='cenn2' style={{ height: '500px', marginBottom:'40px' }}>
                <Colum date='2023' position='Front-End Intern' place='Sync' />
                <Colum date='2023' position='Front-End Intern' place='Code Soft' />
                <Colum date='2022-2023' position='Data Analysis' place='Google Freelancer' />
              </div>
            </div>

            <div data-aos="fade-right" data-aos-delay="90" className='col-md-4 col-sm-12 dwq'>
              <div>
                <h2>My Skills</h2>
              </div>
              <div className='cenn3' style={{ height: '500px', marginBottom:'40px' }}>
                <div className="skills-bar">

                  <div className="bar">
                    <div className="info">
                      <span>HTML</span>
                    </div>
                    <div className="progress-line"><span className="html"></span></div>
                    <div className="bar">
                      <div className="info">
                        <span>CSS</span>
                      </div>
                      <div className="progress-line"><span className="css"></span></div>
                      <div className="bar">
                        <div className="info">
                          <span>BOOTSTRAP</span>
                        </div>
                        <div className="progress-line"><span className="bootstrap"></span></div>
                        <div className="bar">
                          <div className="info">
                            <span>JAVASCRIPT</span>
                          </div>
                          <div className="progress-line">
                            <span className="javascript"></span>
                          </div>
                          <div className="bar">
                            <div className="info">
                              <span>React js</span>
                            </div>
                            <div className="progress-line"><span className="c"></span></div>
                          </div>





                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Section4;
