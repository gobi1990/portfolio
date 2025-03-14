import React, { useState } from 'react';
import { Project } from '../../data/projects';
import { StyledWrapper} from './styles';
import Image from 'next/image';

const HoverProjectCard = ({ project , onClick}: { project: Project  , onClick?: () => void} ) => {
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
      <div className="card-container" 
      style={{ transform, transformStyle: 'preserve-3d' }}
       onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        >
        <div className="card">
          <div className="img-content">
            <Image
                src={project.image}
                alt="Image from Google Drive"
                width={500}
                height={300} 
                layout="responsive" 
            />
          </div>
          <div className="content">
            <p className="heading">{project.title}</p>
            <p>
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}



export default HoverProjectCard;
