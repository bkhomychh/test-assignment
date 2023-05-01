import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useCloseModal } from 'hooks';

import classes from './Modal.module.css';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ children, close }) => {
  useCloseModal(close);

  return createPortal(
    <div className={classes.backdrop}>
      <div className={classes.modal}>{children}</div>
    </div>,
    modalRoot,
  );
};

Modal.propTypes = {
  close: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Modal;
