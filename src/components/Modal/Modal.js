import React from 'react';
import SimpleModal from '@material-ui/core/Modal';

import useStyles from './styles';

const Modal = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const body = (
    <div style={classes.modal} className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
      <SimpleModal />
    </div>
  );

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>Open Modal</button>
      <SimpleModal open={open} onClose={() => setOpen(false)}>
        {body}
      </SimpleModal>
    </>
  );
};

export default Modal;
