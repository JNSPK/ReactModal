import { FC, useState, useEffect } from 'react';
import {
  BoxClickHandler,
  BoxProps,
  ModalProps,
  OverlayProps,
} from './src/types';

const Overlay: FC<OverlayProps> = ({
  children,
  onClick,
  overlayStyle,
  fade,
}) => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (fade) {
      setIsFading(true);
    }
  }, [fade]);

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
        opacity: isFading ? '1' : '0',
        transition: 'opacity 0.8s ease',
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
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [setIsOpen]);

  return (
    <Overlay
      onClick={() => setIsOpen(false)}
      overlayStyle={options?.overlayStyle}
      fade={options?.fade}>
      <Box
        message={options?.message || ''}
        boxStyle={options?.boxStyle}
        customCloseIcon={options?.customCloseIcon}
        closeStyle={options?.closeStyle}
        msgStyle={options?.msgStyle}
        btnStyle={options?.btnStyle}
        onClick={() => setIsOpen(true)}
      />
    </Overlay>
  );
};

export default Modal;
