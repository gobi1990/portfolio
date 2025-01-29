'use client'

import { useState, useEffect } from 'react'
import { gameProjects, mobileProjects, Project } from '../data/projects'
import ProjectCard from '../components/projectCard/projectCard'
import HoverProjectCard from '../components/hoverProjectCard/hoverProjectCard'
import HoverCard from '../components/hoverCard'
import PopupModal from '../components/modal/popupModal'


export default function Projects() {
  const [isMounted, setIsMounted] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project : Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-dark-primary">My Projects</h1>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mobileProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {gameProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div> */}
      <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mobileProjects.map((project, index) => (
          <HoverProjectCard key={index} project={project} onClick={() => handleProjectClick(project)}/>
        ))}
      </div>
      <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {gameProjects.map((project, index) => (
         <HoverProjectCard key={index} project={project} onClick={() => handleProjectClick(project)}/>
        ))}
      </div> 
      <PopupModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </div>
  )
}

