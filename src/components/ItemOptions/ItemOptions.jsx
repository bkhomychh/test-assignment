import { COLOR, GENDER } from 'utils';
import classes from './ItemOptions.module.css';

const ItemOptions = ({ color, setColor, gender, setGender }) => {
  return (
    <>
      <span className={classes.label}>Колір: </span>
      <ul className={classes.list}>
        <li>
          <button
            className={`${classes.colorBtn} ${color === COLOR.blue ? classes.active : ''}`}
            type="button"
            data-color={COLOR.blue}
            onClick={() => setColor(COLOR.blue)}
          ></button>
        </li>
        <li>
          <button
            className={`${classes.colorBtn} ${color === COLOR.red ? classes.active : ''}`}
            type="button"
            data-color={COLOR.red}
            onClick={() => setColor(COLOR.red)}
          ></button>
        </li>
        <li>
          <button
            className={`${classes.colorBtn} ${color === COLOR.green ? classes.active : ''}`}
            type="button"
            data-color={COLOR.green}
            onClick={() => setColor(COLOR.green)}
          ></button>
        </li>
      </ul>

      <span className={classes.label}>Стать: </span>
      <ul className={classes.list}>
        <li>
          <button
            className={`${classes.genderBtn} ${gender === GENDER.boy ? classes.active : ''}`}
            type="button"
            onClick={() => setGender(GENDER.boy)}
          >
            Хлопчик
          </button>
        </li>
        <li>
          <button
            className={`${classes.genderBtn} ${gender === GENDER.girl ? classes.active : ''}`}
            type="button"
            onClick={() => setGender(GENDER.girl)}
          >
            Дівчинка
          </button>
        </li>
      </ul>
    </>
  );
};

export default ItemOptions;
