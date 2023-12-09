import React, { useEffect } from 'react';
import './section2.css';
import iamge from '../images/mine.jpeg';
import Column from './Column';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Section4 from '../Section4/Section4';

const Section2 = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className='container-fluid se2'>
      <div className='container sec3'>
        <div className='row'>

          <div data-aos="fade-right" className='cardd col-md-4 col-sm-12 mt-4'>
            <img className='mine' src={iamge} alt='' />
          </div>


          <div className='data col-md-8 col-sm-12'>
            <div data-aos="fade-right" data-aos-delay="120" className='name'>
              <h3>Basant Elsobky</h3>
              <h4 className='text-capitalize'>
                a  <span>wep developer</span> based in <span> egypt</span>{' '}
              </h4>
              <p className='text-secondary'>
                I design and develop services for customers of all sizes, specializing in creating
                stylish, modern websites, web services, and online stores. My passion is to design
                digital user experiences through the bold interface and meaningful interactions.
                Check out my Portfolio
              </p>
              <div className='row'>
                <div className='col-md-6'>
                  <Column label='Birthday' da='2 Feb 2001' />
                  <Column label='Age' da='22' />
                  <Column label='Residence' da='Cairo' />
                  <Column label='Address' da='Nasser City' />
                </div>

                <div className='col-md-6'>
                  <Column label='E-mail' da='basantheshem9@gmail.com' />
                  <Column label='Phone' da='01554805151' />
                  <Column label='LinkedIn' da='Basant Elsobky' />
                  <Column label='Freelance' da='Available' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Section4 />
    </div>


  );
};

export default Section2;




