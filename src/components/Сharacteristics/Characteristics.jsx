import { useState } from 'react';

import classes from './Characteristics.module.css';
import sprite from 'images/sprite.svg';

const Characteristics = () => {
  const [isCharacteristicsShown, setIsCharacteristicsShown] = useState(true);

  const toggleDescription = () => setIsCharacteristicsShown(state => !state);
  const btnClasses = [classes.btn, isCharacteristicsShown ? classes.active : ''];

  return (
    <section className={classes.section}>
      <div className={classes.box}>
        <h2 className={classes.title}>Характеристики</h2>
        <button className={btnClasses.join(' ')} type="button" onClick={toggleDescription}>
          <svg width="14px" height="8px">
            <use href={sprite + '#icon-arrow-down'}></use>
          </svg>
        </button>
      </div>
      {isCharacteristicsShown && (
        <ul className={classes.list}>
          <li>
            <span className={classes.name}>Виробник</span>
            <span className={classes.value}>Anex</span>
          </li>
          <li>
            <span className={classes.name}>Країна</span>
            <span className={classes.value}>Польща</span>
          </li>
          <li>
            <span className={classes.name}>Колір</span>
            <span className={classes.value}>Сірий</span>
          </li>
          <li>
            <span className={classes.name}>Стать</span>
            <span className={classes.value}>Хлопчик/дівчинка</span>
          </li>
          <li>
            <span className={classes.name}>Вага</span>
            <span className={classes.value}>14кг</span>
          </li>
          <li>
            <span className={classes.name}>Розмір (ДхШхВ)</span>
            <span className={classes.value}>108.5х60х124.5 см</span>
          </li>
        </ul>
      )}
    </section>
  );
};

export default Characteristics;
