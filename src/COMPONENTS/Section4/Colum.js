import React from 'react'
import './Colum.css'
const Colum = (props) => {
  return (
    <>

      <div className='fluid-container '>

        <div className='container flex flex-column de'>
          <span>{props.date}</span>
          <h6>{props.position}
          </h6>
          <p>{props.place}

          </p>

  
        </div>

      </div>

    </>
  )
}

export default Colum
