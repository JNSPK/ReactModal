# ReactModal

This repository is a modal component for React developpers.

## Installation

```cmd
npm i @jnspk/reactmodal
```

## Parameters

You'll need to import `useState` from React and initialize state to false

```javascript
import React, { useState } from 'react';
import Modal from '@jnspk/reactmodal';

const [isOpen, setIsOpen] = useState(false);
```

You can add a `const` to set css properties to the modal.
There are some default values but you can overcharge them with overlayStyle, boxStyle, closeStyle, msgStyle.
You can set the fade to true to allow modal to fade in or false if you don't want that behavior.
Besides, there a possibility to have a second modal into the first one with enableSecondModalButton. : e.g.

```javascript
const modalOptions = {
  message: 'Hello, this is the modal!',
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
  message: 'Hello, this is another modal!',
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
```

than add the component to your project

```javascript
<button className='test-btn' onClick={() => setIsOpen(true)}>
  Open Modal
</button>;

{
  isOpen && (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} options={modalOptions} />
  );
}
```
