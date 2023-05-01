import Button from 'components/Button';
import Modal from 'components/Modal';

import classes from './Message.module.css';

const Message = ({ close }) => {
  return (
    <Modal close={close}>
      <div className={classes.wrapper}>
        <p className={classes.text}> Товар додано до кошику</p>
        <button className={classes.btn} onClick={close}>
          Продовжити покупки
        </button>
        <Button colored rounded onClick={close}>
          Перейти в кошик
        </Button>
      </div>
    </Modal>
  );
};

export default Message;
