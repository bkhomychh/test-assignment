import { useState } from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useCloseModal, useMediaQuery } from 'hooks';

import Checkbox from 'components/Checkbox';
import Range from 'components/Range';

import classes from './FilterMenu.module.css';
import sprite from 'images/sprite.svg';
import producers from 'data/producers.json';
import categories from 'data/categories.json';

const formikInitialState = {
  category: '',
  available: false,
  discount: false,
  price: [0, 30000],
  producer: [],
};

const FilterMenu = ({ closeMenu, setFilters }) => {
  const [isCategoryShown, setIsCategoryShown] = useState(true);
  const [isPriceShown, setIsPriceShown] = useState(true);
  const [isProducerShown, setIsProducerShown] = useState(true);
  const isDeskVersion = useMediaQuery('1350px');

  useCloseModal(closeMenu);

  const formik = useFormik({
    initialValues: formikInitialState,
    validationSchema: Yup.object({
      price: Yup.array().of(Yup.number()),
    }),

    onSubmit: values => {
      const filters = [];
      const entries = Object.entries(values);

      entries.forEach(([name, value]) => {
        if (value === '' || value === false || value.length < 1) {
          return;
        }

        filters.push({ name, value });
      });

      setFilters(filters);
    },
  });

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

  const { handleSubmit, handleChange, values, errors, setFieldValue } = formik;

  const handleClick = evt => {
    if (isDeskVersion) {
      handleChange(evt);
      handleSubmit(evt);
    } else {
      handleChange(evt);
    }
  };

  return (
    <div className={classes.modal}>
      <form onSubmit={handleSubmit} noValidate>
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
                  <input
                    className={classes.radio}
                    type="radio"
                    name="category"
                    value={name}
                    checked={values.category === name}
                    onChange={handleClick}
                  />
                  <span>{name}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        <div className={classes.box}>
          <Checkbox name="available" checked={values.available} onChange={handleClick}>
            В наявності
          </Checkbox>
        </div>

        <div className={classes.box}>
          <Checkbox name="discount" checked={values.discount} onChange={handleClick}>
            Зі знижкою
          </Checkbox>
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
          {isPriceShown && (
            <>
              <Range value={values.price} onChange={val => setFieldValue('price', val)} />
              <div className={classes.container}>
                <input
                  className={`${classes.input} ${errors.price ? classes.invalid : ''}`}
                  type="text"
                  value={values.price[0]}
                  onChange={({ target }) => setFieldValue('price', [target.value, values.price[1]])}
                />
                <span>-</span>
                <input
                  className={`${classes.input} ${errors.price ? classes.invalid : ''}`}
                  type="text"
                  value={values.price[1]}
                  onChange={({ target }) => setFieldValue('price', [values.price[0], target.value])}
                />
                <button type="submit">
                  <svg width="16px" height="16px">
                    <use href={sprite + '#icon-arrow-right'}></use>
                  </svg>
                </button>
              </div>
            </>
          )}
        </div>

        <div className={`${classes.box} ${classes.borderless}`}>
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
                <Checkbox
                  key={id}
                  name="producer"
                  value={name}
                  checked={values.producer.includes(name)}
                  onChange={handleClick}
                >
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
  );
};

FilterMenu.propTypes = {
  closeMenu: PropTypes.func,
};

export default FilterMenu;
