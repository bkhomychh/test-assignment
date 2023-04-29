import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import Checkbox from 'components/Checkbox';

import classes from './FilterMenu.module.css';
import sprite from 'images/sprite.svg';

import producers from 'data/producers.json';
import categories from 'data/categories.json';

const FilterMenu = ({ closeMenu }) => {
  const [isCategoryShown, setIsCategoryShown] = useState(true);
  const [isPriceShown, setIsPriceShown] = useState(true);
  const [isProducerShown, setIsProducerShown] = useState(true);

  const showSection = ({ target }) => {
    const section = target.dataset.section;

    switch (section) {
      case 'category': {
        setIsCategoryShown(state => !state);
        break;
      }
      case 'price': {
        setIsPriceShown(state => !state);
        break;
      }
      case 'producer': {
        setIsProducerShown(state => !state);
        break;
      }
      default: {
        console.log('There is no such section');
      }
    }
  };

  useEffect(() => {
    const handleClick = ({ target }) => {
      const shouldCloseMenu = target.classList.contains(classes.backdrop);

      if (shouldCloseMenu) {
        closeMenu();
      }
    };

    window.addEventListener('click', handleClick);
    document.body.classList.add('no-scroll');

    return () => {
      window.removeEventListener('click', handleClick);
      document.body.classList.remove('no-scroll');
    };
  }, [closeMenu]);

  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <form noValidate>
          <div className={classes.box}>
            <button
              className={`${classes.toggle} ${isCategoryShown ? classes.active : ''}`}
              type="button"
              data-section="category"
              onClick={showSection}
            >
              Категорія
              <svg width="11px" height="6px">
                <use href={sprite + '#icon-arrow-down'}></use>
              </svg>
            </button>

            {isCategoryShown && (
              <div className={classes.list}>
                {categories.map(({ id, name }) => (
                  <label key={id}>
                    <input className={classes.radio} type="radio" name="category" value={name} />
                    <span>{name}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          <div className={classes.box}>
            <Checkbox name="available">В наявності</Checkbox>
          </div>

          <div className={classes.box}>
            <Checkbox name="discount"> Зі знижкою</Checkbox>
          </div>

          <div className={classes.box}>
            <button
              className={`${classes.toggle} ${isPriceShown ? classes.active : ''}`}
              type="button"
              data-section="price"
              onClick={showSection}
            >
              Ціна
              <svg width="11px" height="6px">
                <use href={sprite + '#icon-arrow-down'}></use>
              </svg>
            </button>
            {isPriceShown && <input type="range" name="price" min={0} max={30000} />}
          </div>

          <div className={classes.box}>
            <button
              className={`${classes.toggle} ${isProducerShown ? classes.active : ''}`}
              type="button"
              data-section="producer"
              onClick={showSection}
            >
              Виробник
              <svg width="11px" height="6px">
                <use href={sprite + '#icon-arrow-down'}></use>
              </svg>
            </button>

            {isProducerShown && (
              <div className={classes.list}>
                {producers.map(({ name, id }) => (
                  <Checkbox name="producer" value={name} key={id}>
                    {name}
                  </Checkbox>
                ))}
              </div>
            )}
          </div>

          <div className={classes.wrapper}>
            <button className={classes.submitBtn} type="submit">
              Застосувати
            </button>
          </div>
        </form>

        <button className={classes.closeBtn} type="button" onClick={closeMenu}>
          <svg width="25px" height="25px">
            <use href={sprite + '#icon-close'}></use>
          </svg>
        </button>
      </div>
    </div>
  );
};

FilterMenu.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};

export default FilterMenu;
