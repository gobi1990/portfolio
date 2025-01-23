import { useState } from 'react'
import Image from 'next/image'
import { Github } from 'lucide-react'
import { Project } from '../data/projects'
import styled from 'styled-components'

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
      <StyledWrapper>
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
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-dark-primary hover:text-dark-secondary"
          >
            <Github className="w-5 h-5 mr-2" />
            View on GitHub
          </a>
        </div>
      </div>
      </StyledWrapper>
    )
  }

  const StyledWrapper = styled.div`
  .card-container {
    width: 300px;
    height: 300px;
    position: relative;
    border-radius: 10px;
  }

  .card-container::before {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100% );
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
  }

  .card {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    overflow: hidden;
  }

  .card .img-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100% );
    transition: scale 0.6s, rotate 0.6s, filter 1s;
  }

  .card .img-content svg {
    width: 50px;
    height: 50px;
    fill: #e8e8e8;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .card .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10px;
    color: #e8e8e8;
    padding: 20px;
    line-height: 1.5;
    border-radius: 5px;
    opacity: 0;
    pointer-events: none;
    transform: translateY(50px);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .card .content .heading {
    font-size: 32px;
    font-weight: 700;
  }

  .card:hover .content {
    opacity: 1;
    transform: translateY(0);
  }

  .card:hover .img-content {
    scale: 2.5;
    rotate: 30deg;
    filter: blur(7px);
  }

  .card:hover .img-content svg {
    fill: transparent;
  }`;