import React from 'react'
import './card.css'
const Card = (props) => {
  return (
    <>
     <div  className='container text-center d-flex flex-column car align-items-center justify-content-center' style={{marginBottom:'30px'}}>
        <h2>      {props.icon}</h2>
        <h3>{props.name}</h3>
        <p>{props.paragraph}</p>
     </div> 
    </>
  )
}

export default Card
