import { useState } from 'react';
import Modal from './components/modal';
import './App.css';

const App = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      {isOpen && <Modal setIsOpen={setIsOpen} message={'test'} />}
      <div className='app'>
        <h1 className='title'>Coucou</h1>
      </div>
    </>
  );
};

export default App;
