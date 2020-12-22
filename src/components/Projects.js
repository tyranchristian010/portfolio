import React, { useState } from 'react'
import project_data from '../data/project_data';
import ProjectCard from './ProjectCard';

const Projects=()=> {
  const [projects, setProjects]= useState(project_data)

  const handleFilterCategory=(name)=>{
    const data_array = project_data.filter(project=> project.category.includes(name))
    setProjects(data_array)
  }
  return (
    <div className="container projects">
      <div className="projects_navbar">
        <div onClick={()=>setProjects(project_data)}>All</div>
        <div onClick={()=>handleFilterCategory('De-Fi')}>De-Fi</div>
        <div onClick={()=>handleFilterCategory('NFTs')}>NFTs</div>
        <div onClick={()=>handleFilterCategory('De-Media')}>De-Media</div>
      </div>
      <div className="row">
        {
          projects.map(project=>
            <ProjectCard key={project.name} project={project} />)
        }   
      </div>
    </div>
  )
}

export default Projects;
