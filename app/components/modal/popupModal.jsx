import React from 'react';
import { StyledWrapper } from './styles';

const PopupModal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <StyledWrapper>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
          <div className="modal-body">
            <div className="modal-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="modal-text">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="modal-buttons">
                <button className="text-button">Button 1</button>
                <button className="text-button">Button 2</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default PopupModal;
