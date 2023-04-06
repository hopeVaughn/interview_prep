/*
In this solution, we define two functional components, Modal and ModalButton. Modal is a presentational component that displays a modal dialog box with a message and a button. ModalButton is a container component that displays a button and manages the state of the modal dialog box.

We use the useState hook to update the isModalOpen state variable when the user clicks the button to open or close the modal dialog box. When the isModalOpen state variable is true, we render the Modal component with the message and the onClose callback function.

The Modal component receives two props, message and onClose. We use these props to display the message and to call the onClose callback function when the user clicks the button.
*/
import React, { useState } from 'react';

interface ModalProps {
  message: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ message, onClose }) => {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const HelloModalButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleModalOpen}>Open Modal</button>
      {isModalOpen && (
        <Modal message='Hello, world!' onClose={handleModalClose} />
      )}
    </div>
  );
};

export default HelloModalButton;
