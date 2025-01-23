'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Github } from 'lucide-react'
import { gameProjects, mobileProjects, Project } from '../data/projects'
import ProjectCard from '../components/projectCard'
import TextCard from '../components/textCard'


export default function Projects() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-dark-primary">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mobileProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {gameProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      {/* <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {gameProjects.map((project, index) => (
          <TextCard key={index} />
        ))}
      </div> */}
    </div>
  )
}

