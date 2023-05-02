import Button from 'components/Button';
import ItemOptions from 'components/ItemOptions';
import MetaCarousel from 'components/MetaCarousel';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as cart from 'redux/cart';
import classes from './ItemInfo.module.css';
import sprite from 'images/sprite.svg';
import Message from 'components/Message';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const ItemInfo = ({ item, color, gender, setColor, setGender }) => {
  const [isMessageShown, setIsMessageShown] = useState();
  const dispatch = useDispatch();

  const { id, title, img, imgL, price, newPrice, discount, available } = item;

  const addToCart = () => {
    dispatch(cart.addItem({ id, title, color, gender }));
    setIsMessageShown(true);
  };

  return (
    <div className={classes.mainInfo}>
      <MetaCarousel img={img} imgL={imgL} />
      <div>
        <ItemOptions color={color} setColor={setColor} gender={gender} setGender={setGender} />
        <div className={classes.list}>
          <span className={newPrice ? classes.oldPrice : classes.price}>{price} грн</span>
          {newPrice && <span className={classes.newPrice}>{newPrice} грн</span>}
          {discount && <span className={classes.discount}>-{discount}</span>}
        </div>
        <ul className={classes.shopping}>
          <li>
            <Button type="button" disabled={!available} colored large rounded onClick={addToCart}>
              <svg width="23px" height="17px">
                <use href={sprite + '#icon-cart'}></use>
              </svg>
              Купити
            </Button>
          </li>
          <li>
            <Button type="button" disabled={!available} large rounded onClick={addToCart}>
              Купити в 1 клік
            </Button>
          </li>
        </ul>

        {isMessageShown && <Message close={() => setIsMessageShown(false)} />}

        <div className={classes.call}>
          <b>Ви з Одеси? Заберіть товар у магазині</b>
          <p>
            <svg>
              <use href={sprite + '#icon-location'}></use>
            </svg>
            Одеса, вул. Михайлівська, 8 (10:00-19:00 щодня)
          </p>
          <Link to="">Забрати сьогодні</Link>
        </div>

        <ul className={classes.links}>
          <li>
            <Link to="">Оплата і доставка</Link>
          </li>
          <li>
            <Link to="">Повернення і обмін</Link>
          </li>
          <li>
            <Link to="">Контакти</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

ItemInfo.propTypes = {
  item: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  setColor: PropTypes.func.isRequired,
  setGender: PropTypes.func.isRequired,
};

export default ItemInfo;
