import React from 'react'
import './projects.css'
import Cardd from './Cardd'
import Data from './Data'

const Projects = () => {
  const card = Data.map(col => {
    return <Cardd link={col.link} image={col.image} name={col.name} caption={col.caption} />
  })

  return (
    <>
      <div className='fluid-container conw'>
        <div className='container projectscard'>
          <h1 className='text-capitalize d-flex align-items-center justify-content-center'>my projects</h1>
          <div class="row">


            {card}



          </div></div></div>

    </>
  )
}

export default Projects
