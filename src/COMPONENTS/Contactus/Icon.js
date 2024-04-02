import React from 'react'
import './icon.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub, faLinkedinIn, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Icons = () => {
  return (
    <>
      <div className='d-flex flex-row    iconic '>

        <div class="social-icons-btn">

        <a
  class="icons instagram"
  href="https://www.linkedin.com/in/basant-elsobky-435528254"
  target="_blank"
>
  <FontAwesomeIcon icon={faLinkedinIn}  />
</a>
          <a  class="icons twitter" href="https://github.com/basant-elsobky"  target="_blank">
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </a>
          <a     
 class="icons facebook" href="/#">
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
          </a>
   


          <a  class="icons linkedin" href="/#">
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          </a>
        </div>


      </div>


    </>
  )
}

export default Icons
