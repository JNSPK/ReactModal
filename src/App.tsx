import { useState } from 'react';
import Modal from '../modal';
import './App.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const modalOptions = {
    message: 'You can write wathever you want here!',
    boxStyle: {
      boxShadow: '0px 10px 10px -3px rgba(0,0,0,0.1)',
    },
    overlayStyle: {
      backgroundColor: '#3D1663',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    closeStyle: {
      borderRadius: '50%',
      boxShadow: '0px 10px 10px -3px rgba(0,0,0,0.1)',
    },
    msgStyle: {
      color: '#5d5d5d',
    },

    fade: true,
  };

  return (
    <div className='app'>
      <button className='test-btn' onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      {isOpen && (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} options={modalOptions} />
      )}
    </div>
  );
};

export default App;
