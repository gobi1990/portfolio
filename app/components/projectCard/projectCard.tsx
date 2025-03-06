import { useState } from 'react'
import Image from 'next/image'
import { Github } from 'lucide-react'
import { Project } from '../../data/projects'
import StyledWrapper from './styles'

export default function ProjectCard({ project }: { project: Project }) {
    const [transform, setTransform] = useState('translate(0, 0)')
  
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const card = e.currentTarget
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const deltaX = (x - centerX) / 23
      const deltaY = (y - centerY) / 23
  
      setTransform(`translate(${deltaX}px, ${deltaY}px) rotateX(${-deltaY}deg) rotateY(${deltaX}deg)`)
    }
  
    const handleMouseLeave = () => {
      setTransform('translate(0, 0) rotateX(0) rotateY(0)')
    }
  
    return (
      <div
        className="project-card glass-effect overflow-hidden cursor-pointer transition-all duration-200 ease-out"
        style={{ transform, transformStyle: 'preserve-3d' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2 text-dark-secondary">{project.title}</h2>
          <p className="text-dark-onBackground mb-4">{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-dark-primary hover:text-dark-secondary"
          >
            <Github className="w-5 h-5 mr-2" />
            View on GitHub
          </a>
        </div>
      </div>
    )
  }

  