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
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className='fixed z-10 inset-0 overflow-y-auto'>
      <div
        className='flex items-center justify-center min-h-screen'
        onClick={handleBackdropClick}
      >
        <div className='fixed inset-0 bg-black opacity-50'></div>
        <div className='relative z-20 bg-white rounded-lg p-8 mx-4 sm:mx-0 max-w-md w-full'>
          <p className='text-gray-800 text-lg mb-4'>{message}</p>
          <button
            className='bg-gray-800 text-white py-2 px-4 rounded'
            onClick={onClose}
          >
            Close
          </button>
        </div>
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
    <div className='flex items-center justify-center'>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={handleModalOpen}
      >
        Open Modal
      </button>
      {isModalOpen && (
        <Modal message='Hello, world!' onClose={handleModalClose} />
      )}
    </div>
  );
};

export default HelloModalButton;
