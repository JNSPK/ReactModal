import { useState } from 'react';
import Modal from '../modal';
import './App.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const modalOptions = {
    message: 'Hello, this is the first modal!',
    boxStyle: {
      boxShadow: '0px 10px 10px -3px rgba(0,0,0,0.1)',
    },
    overlayStyle: {
      backgroundColor: '#e0e29f',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    closeStyle: {
      borderRadius: '50%',
      boxShadow: '0px 10px 10px -3px rgba(0,0,0,0.1)',
    },
    msgStyle: {
      color: 'red',
    },
    enableSecondModalButton: false,
    fade: true,
  };

  const modalOptions2 = {
    message: 'Hello, this is another first modal!',
    boxStyle: {
      backgroundColor: 'white',
      boxShadow: '0px 10px 10px -3px rgba(0,0,0,0.1)',
      gap: '2rem',
    },
    overlayStyle: {
      backgroundColor: '#e0e29f',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    closeStyle: {
      borderRadius: '50%',
      boxShadow: '0px 10px 10px -3px rgba(0,0,0,0.1)',
    },
    msgStyle: {
      color: 'red',
    },
    enableSecondModalButton: true,
    fade: true,

    secondModalOptions: {
      message: 'This is the second modal heyyy!',
      boxStyle: {
        backgroundColor: 'lightblue',
        width: '50%',
        height: '20%',
        borderRadius: '1rem',
        boxShadow: '0px 10px 10px -3px rgba(0,0,0,0.1)',
      },
      closeStyle: {
        borderRadius: '50%',
        boxShadow: '0px 10px 10px -3px rgba(0,0,0,0.1)',
      },
      msgStyle: {
        color: 'blue',
      },
      secondOverlayStyle: {
        backgroundColor: '#6564DBdb',
      },
      enableSecondModalButton: false,
      fade: true,
    },
  };
  return (
    <div className='app'>
      <button className='test-btn' onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      <button className='test-btn' onClick={() => setIsOpen2(true)}>
        Open Modals
      </button>
      {isOpen && (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} options={modalOptions} />
      )}
      {isOpen2 && (
        <Modal
          isOpen={isOpen2}
          setIsOpen={setIsOpen2}
          options={modalOptions2}
        />
      )}
    </div>
  );
};

export default App;
