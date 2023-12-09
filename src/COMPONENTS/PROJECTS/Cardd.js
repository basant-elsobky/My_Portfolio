import React from 'react'
import Mainbutton from '../mainbutton/Mainbutton'
import './Card.css'
const Cardd = (props) => {
  return (
    <>
      <div className='col-md-4 col-sm-12  com' >
        <div class="card" style={{ height: '400px' }} >
          <img src={props.image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{props.name}</h5>
            <p class="card-text">{props.caption}</p>
            <a href={props.link} >
              <Mainbutton name='view demo' />
            </a>
          </div>
        </div></div>
    </>
  )
}

export default Cardd
