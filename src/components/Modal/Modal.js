import React, { useState } from 'react';
import SimpleModal from '@material-ui/core/Modal';

import useStyles from './styles';

const Modal = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={() => setIsOpen(true)}>isOpen Modal</button>
      <SimpleModal open={isOpen} onClose={() => setIsOpen(false)}>
        {body}
      </SimpleModal>
    </div>
  );
};

export default Modal;
