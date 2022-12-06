import React from 'react'
import {useNavigate} from 'react-router-dom'

const ProjectItem = ({image, name, id}) => {
  const navigate = useNavigate()
  return (
    <div className='projectItem'>
        <div style={{backgroundImage: `url(${image})`}} className='bgImage' 
        onClick={() => {navigate('/project/' + id)}}
        />
        <h1> {name} </h1>

    </div>
  )
}

export default ProjectItem