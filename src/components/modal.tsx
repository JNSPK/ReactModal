const Overlay = ({ children, onClick, overlayStyle }) => {
  return (
    <div
      className='modal-overlay'
      style={{
        position: 'fixed',
        backgroundColor: '#242424db',
        height: '100vh',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        zIndex: '1000',
        backdropFilter: 'blur(5px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...overlayStyle,
      }}
      onClick={onClick}>
      {children}
    </div>
  );
};

const Box = ({ message, boxStyle }) => {
  return (
    <div
      className='modal-box'
      style={{
        position: 'fixed',
        backgroundColor: '#ffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '0.8rem',
        width: '50%',
        height: '50%',
        zIndex: '1001',
        ...boxStyle,
      }}>
      <p
        style={{
          color: 'black',
        }}>
        {message}
      </p>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Overlay
      onClick={() => props.setIsOpen(false)}
      overlayStyle={props.overlayStyle}>
      <Box message={props.message} boxStyle={props.boxStyle} />
    </Overlay>
  );
};

export default Modal;
