import styled from 'styled-components';

export const StyledWrapper = styled.div`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal-content {
    // background: white;
    object-fit: cover;
    opacity: 0.99;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    border-radius: 8px;
    max-width: 80%;
    width: 80%;
    max-height: 80%;
    height: 80%;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }

  .modal-body {
    display: flex;
    width: 100%;
  }

  .img-container {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
   }


  .modal-image img {
    position: absolute;
    max-width: 18%;
    border-radius: 8px;
    object-fit: cover;
  }

   .mask-image img {
   position: absolute;
    max-width: 25%;
    border-radius: 8px;
    
  }

  .modal-text {
    flex: 1;
    padding-left: 20px;
  }

  .modal-buttons {
    margin-top: 20px;
    display: flex;
    gap: 10px;
  }

  .text-button {
    background: none;
    border: none;
    color: #007bff;
    cursor: pointer;
    font-size: 16px;
  }

  .text-button:hover {
    text-decoration: underline;
  }
`;
