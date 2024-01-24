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
You can set the fade to true to allow modal to fade in or false if you don't want that behavior.: e.g.

```javascript
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
    color: 'red',
  },
  fade: true,
};
```

then add the component to your project :

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
