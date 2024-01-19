import { FC } from 'react';
import ReactDOM from 'react-dom';
import {
  BoxClickHandler,
  BoxProps,
  ModalProps,
  OverlayCLickHandler,
  OverlayProps,
} from '../types';
import { useState } from 'react';

const Overlay: FC<OverlayProps> = ({ children, onClick, overlayStyle }) => {
  return (
    <div
      className='modal-overlay'
      style={{
        position: 'fixed',
        backgroundColor: '#242424db',
        height: '100vh',
        width: '100vw',
        zIndex: '1000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: 'blur(5px)',
        top: '0',
        ...overlayStyle,
      }}
      onClick={onClick}>
      {children}
    </div>
  );
};

const defaultCloseIcon = `https://img.icons8.com/ios-filled/50/cancel.png`;

const Box: FC<BoxProps> = ({
  message,
  boxStyle,
  onClick,
  closeStyle,
  customCloseIcon,
  msgStyle,
  btnStyle,
  enableSecondModalButton,
  openSecondModal,
}) => {
  const handleBoxClick: BoxClickHandler = (e) => {
    const target = e.target as HTMLElement;

    if (!target.classList.contains('close-btn')) {
      e.stopPropagation();
    }
  };
  const closeIcon = customCloseIcon || defaultCloseIcon;

  return (
    <div
      className='modal-box'
      style={{
        position: 'fixed',
        backgroundColor: '#ffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '0.5rem',
        width: '50%',
        height: '50%',
        zIndex: '1001',
        userSelect: 'none',
        ...boxStyle,
      }}
      onClick={handleBoxClick}>
      <p
        className='modal-msg'
        style={{
          color: 'black',
          ...msgStyle,
        }}>
        {message}
      </p>
      {enableSecondModalButton && (
        <button
          className='modal-btn'
          style={{ padding: '1rem', ...btnStyle }}
          onClick={openSecondModal}>
          Open Second Modal
        </button>
      )}
      {closeIcon && (
        <div
          className='close-btn'
          onClick={onClick}
          style={{
            position: 'absolute',
            width: '2rem',
            height: '2rem',
            top: '2rem',
            right: '2rem',
            cursor: 'pointer',
            ...closeStyle,
          }}>
          <img
            className='close-btn'
            style={{ width: '100%' }}
            src={closeIcon}
            alt='close-icon'></img>
        </div>
      )}
    </div>
  );
};

const Modal: FC<ModalProps> = ({ setIsOpen, options }) => {
  const [isSecondModalOpen, setSecondModalOpen] = useState(false);

  const openSecondModal = () => {
    setSecondModalOpen(true);
  };

  const closeSecondModal = () => {
    setSecondModalOpen(false);
  };

  return ReactDOM.createPortal(
    <Overlay
      onClick={() => setIsOpen(false)}
      overlayStyle={options?.overlayStyle}>
      <Box
        message={options?.message || ''}
        boxStyle={options?.boxStyle}
        customCloseIcon={options?.customCloseIcon}
        closeStyle={options?.closeStyle}
        msgStyle={options?.msgStyle}
        btnStyle={options?.btnStyle}
        onClick={() => setIsOpen(true)}
        enableSecondModalButton={options?.enableSecondModalButton || false}
        openSecondModal={openSecondModal}
      />
      {isSecondModalOpen && (
        <SecondModal
          message={options?.secondModalOptions?.message || ''}
          boxStyle={options?.secondModalOptions?.boxStyle}
          customCloseIcon={options?.secondModalOptions?.customCloseIcon}
          closeStyle={options?.secondModalOptions?.closeStyle}
          msgStyle={options?.secondModalOptions?.msgStyle}
          secondOverlayStyle={options?.secondModalOptions?.secondOverlayStyle}
          onClick={closeSecondModal}
        />
      )}
    </Overlay>,
    document.body
  );
};

const SecondModal: FC<BoxProps> = ({
  message,
  boxStyle,
  customCloseIcon,
  closeStyle,
  msgStyle,
  secondOverlayStyle,
  onClick,
}) => {
  const handleSecondBoxClick: BoxClickHandler = (e) => {
    const target = e.target as HTMLElement;

    if (!target.classList.contains('close-btn')) {
      e.stopPropagation();
    }
  };
  const closeSecondModal: OverlayCLickHandler = (e) => {
    if (e.currentTarget.classList.contains('modal-overlay2')) {
      onClick(e);
      e.stopPropagation();
    }
  };
  const closeIcon = customCloseIcon || defaultCloseIcon;

  return ReactDOM.createPortal(
    <div
      className='modal-overlay2'
      style={{
        position: 'fixed',
        backgroundColor: '#242424db',
        height: '100vh',
        width: '100vw',
        zIndex: '1002',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: 'blur(5px)',
        ...secondOverlayStyle,
      }}
      onClick={closeSecondModal}>
      <div
        className='modal-box2'
        style={{
          position: 'fixed',
          backgroundColor: '#ffff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '0.5rem',
          width: '50%',
          height: '50%',
          zIndex: '1001',
          userSelect: 'none',
          ...boxStyle,
        }}
        onClick={handleSecondBoxClick}>
        <p className='modal-msg' style={{ color: 'black', ...msgStyle }}>
          {message}
        </p>
        <div
          className='close-btn2'
          onClick={onClick}
          style={{
            position: 'absolute',
            width: '2rem',
            height: '2rem',
            top: '2rem',
            right: '2rem',
            cursor: 'pointer',
            ...closeStyle,
          }}>
          <img
            className='close-btn'
            style={{ width: '100%' }}
            src={closeIcon}
            alt='close-icon'></img>
        </div>
      </div>
    </div>,
    document.querySelector('.modal-overlay') as HTMLElement
  );
};

export default Modal;
