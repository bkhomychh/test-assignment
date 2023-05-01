import { useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './Description.module.css';
import sprite from 'images/sprite.svg';
import carriageImg from 'images/description/carriage.jpg';
import womanImg from 'images/description/woman.jpg';

const Description = () => {
  const [isDescriptionShown, setIsDescriptionShown] = useState(true);

  const toggleDescription = () => setIsDescriptionShown(state => !state);
  const btnClasses = [classes.btn, isDescriptionShown ? classes.active : ''];

  return (
    <section className={classes.section}>
      <div className={classes.box}>
        <h2 className={classes.title}>Опис</h2>
        <button className={btnClasses.join(' ')} type="button" onClick={toggleDescription}>
          <svg width="14px" height="8px">
            <use href={sprite + '#icon-arrow-down'}></use>
          </svg>
        </button>
      </div>
      {isDescriptionShown && (
        <div className={classes.content}>
          <p className={classes.text}>
            Ключові особливості колекції m/type PRO зосереджені на зручність для батьків і комфорт
            для дітей. Ця модель дозволяє однаково насолоджуватися прогулянками міськими вуличками і
            лісовими стежками.
          </p>
          <img className={classes.img} src={carriageImg} alt="Carriage" />
          <p className={classes.text}>
            Легке зняття люльки. Для цього досить і однієї руки. Адже система пам'яті адаптерів буде
            утримувати кнопки натиснутими, поки люльку не знімуть.
          </p>
          <img className={classes.img} src={womanImg} alt="Woman" />
          <Link className={classes.link} to="">
            Докладніше
          </Link>
        </div>
      )}
    </section>
  );
};

export default Description;
