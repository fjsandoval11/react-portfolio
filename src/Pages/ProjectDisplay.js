import React from 'react'
import {useParams} from "react-router-dom"
import {projectList} from '../Helpers/ProjectList'
import GitHubIcon from '@mui/icons-material/GitHub'
import '../Syles/ProjectDisplay.css'

const ProjectDisplay = () => {
    const {id} = useParams()
    const project = projectList[id]
  return (
    <div className='project'>
      <h1>{project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <GitHubIcon />
    </div>
  )
}

export default ProjectDisplay