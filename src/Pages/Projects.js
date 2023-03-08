import React from 'react'
import ProjectItem from '../Components/ProjectItem'
import { projectList } from '../Helpers/ProjectList'
import '../Syles/Projects.css'

const Projects = () => {
  return (
    <div className='projects'>
     <h1>My Personal Projects</h1>
      <div className='projectList'>
      {projectList.map((project, idx) => {
        return <ProjectItem id={idx} name={project.name} image={project.image}/>
      })}
     
      </div>

    </div>


  )
}

export default Projects