import React from 'react'
import './Column.css'
const Column = (props) => {
  return (
    <>
     <div className='media d-flex'>
        <label> {props.label}</label>
        <p>{props.da}</p>
    </div> 
    </>
  )
}

export default Column
