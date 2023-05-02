import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';

import classes from './Card.module.css';
import imgPlaceholder from 'images/img-placeholder.png';
import Button from 'components/Button';
import { useDispatch, useSelector } from 'react-redux';

import * as cart from 'redux/cart';
import * as favorite from 'redux/favorite';
import * as comparison from 'redux/comparison';

import sprite from 'images/sprite.svg';
import { useState } from 'react';
import Message from 'components/Message';

const Card = ({ id, title, img, price, discount, newPrice, available }) => {
  const [isMessageShown, setIsMessageShown] = useState(false);
  const favoriteItems = useSelector(favorite.selectFavorite);
  const comparedItems = useSelector(comparison.selectComparison);
  const dispatch = useDispatch();
  const { catalog = 'catalog' } = useParams();

  const isFavorite = favoriteItems.some(el => el.id === id);
  const isCompared = comparedItems.some(el => el.id === id);

  const addToCart = () => {
    dispatch(cart.addItem({ id, title }));
    setIsMessageShown(true);
  };

  return (
    <div className={classes.wrapper}>
      <Link className={classes.card} to={`/${catalog}/${id}`}>
        <div className={classes.thumb}>
          <img src={img || imgPlaceholder} alt={title} loading="lazy" />
          {discount && <span>-{discount}</span>}
        </div>
        <h3 className={classes.title}>{title}</h3>
        <div className={classes.meta}>
          <span className={newPrice ? classes.oldPrice : classes.price}>{price} грн</span>
          {newPrice && <span className={classes.newPrice}>{newPrice} грн</span>}
        </div>
      </Link>

      <div className={classes.footer}>
        {available ? (
          <ul className={classes.actions}>
            <li className={classes.action}>
              <Button colored onClick={addToCart}>
                Купити
              </Button>
            </li>
            <li className={classes.action}>
              <button
                className={classes.favoriteBtn}
                type="button"
                onClick={() => {
                  if (isFavorite) dispatch(favorite.deleteItem(id));
                  else dispatch(favorite.addItem({ id, title }));
                }}
              >
                <svg width="23px" height="19px">
                  <use href={sprite + '#icon-favorite'}></use>
                </svg>
              </button>
            </li>
            <li className={classes.action}>
              <button
                className={classes.comparisonBtn}
                type="button"
                onClick={() => {
                  if (isCompared) dispatch(comparison.deleteItem(id));
                  else dispatch(comparison.addItem({ id, title }));
                }}
              >
                <svg width="29px" height="19px">
                  <use href={sprite + '#icon-comparison'}></use>
                </svg>
              </button>
            </li>
          </ul>
        ) : (
          <p className={classes.notice}>Немає в наявності</p>
        )}
      </div>

      {isMessageShown && <Message close={() => setIsMessageShown(false)} />}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  newPrice: PropTypes.number,
  discount: PropTypes.string,
  img: PropTypes.string,
};

export default Card;
