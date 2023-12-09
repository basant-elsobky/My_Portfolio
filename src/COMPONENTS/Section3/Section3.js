import React from 'react'
import './section3.css'
import Card from './Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faObjectUngroup, faDesktop, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';


const Section3 = () => {
  return (
    <>
      <div className='fluid-container   con pt-4'>
        <div className='container  text-center contr'>
          <h2 data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" className='text-capitalize '>my services</h2>

          <p data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" className=' text-secondary'>
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites,
            web services and online stores.</p>

        </div>
        <div className='container'>
          <div className='row pt-4 cardd'>
            <div data-aos="fade-right" className='col-md-4 col-sm-12'>
              <Card name='Web & Mobile Design' icon=<FontAwesomeIcon icon={faObjectUngroup} style={{ color: "#b1a9ac", }} /> />
            </div>
            <div data-aos="fade-right" data-aos-delay="70" className='col-md-4 col-sm-12'>
              <Card name='Web Development
'  icon=<FontAwesomeIcon icon={faDesktop} style={{ color: "#b1a9ac",  }} /> />
            </div>
            <div data-aos="fade-right" data-aos-delay="90" className='col-md-4 col-sm-12'>
              <Card name='E-commerce
'  icon=<FontAwesomeIcon icon={faCartArrowDown} style={{ color: "#b1a9ac", }} /> />
            </div>
          </div>
        </div>



      </div>
    </>
  )
}

export default Section3
