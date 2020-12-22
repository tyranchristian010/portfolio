import React from 'react'
import github from '../assets/icons/github.svg'

const ProjectCard =({project:{name, image, deployed_url, github_url}})=> {
  return (
    <div className="projectCard col-md-6 col-lg-4 my-2">
      <div className="projectCard_wrapper">
        <a href={deployed_url} target="_blank">
          <img src={image} alt={name} className="projectCard_image"/>
        </a>
        <div className="projectCard_title">
          <a href={github_url} target="_blank">
            <img src={github} alt="github link" className="projectCard_icon"/>
          </a>
          {name}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;
