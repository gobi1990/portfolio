import styled from 'styled-components';

export const StyledWrapper = styled.div`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal-content {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    max-width: 80%;
    width: 80%;
    position: relative;
    display: flex;
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

  .modal-image img {
    max-width: 40%;
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
