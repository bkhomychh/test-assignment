import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';

import Button from 'components/Button';
import BackLink from 'components/BackLink';
import Section from 'components/Section';
import MetaCarousel from 'components/MetaCarousel';
import Carousel from 'components/Carousel';
import Description from 'components/Description';
import Characteristics from 'components/Сharacteristics';
import Reviews from 'components/Reviews';
import ViewedItems from 'components/ViewedItems';

import { getItemReviews } from 'services';
import { COLOR, GENDER } from 'utils';
import * as cart from 'redux/cart';
import * as favorite from 'redux/favorite';
import * as comparison from 'redux/comparison';

import classes from './ProductDetails.module.css';
import sprite from 'images/sprite.svg';
import items from 'data/items.json';
import Message from 'components/Message';

const ProductDetails = () => {
  const [item, setItem] = useState(null);
  const [color, setColor] = useState(COLOR.blue);
  const [gender, setGender] = useState(GENDER.boy);
  const [reviews, setReviews] = useState([]);
  const [isMessageShown, setIsMessageShown] = useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();
  const favoriteItems = useSelector(favorite.selectFavorite);
  const comparedItems = useSelector(comparison.selectComparison);

  useEffect(() => {
    const data = items.find(el => +el.id === +id);
    setItem(data);
    getItemReviews(id)
      .then(res => setReviews(res))
      .catch(err => console.log(err.message));
  }, [id]);

  const { title, img, imgL, rate, available, code, price, newPrice, discount } = item || {};

  const isFavorite = favoriteItems.some(el => el.id === id);
  const isCompared = comparedItems.some(el => el.id === id);

  const addToCart = () => {
    dispatch(cart.addItem({ id, title }));
    setIsMessageShown(true);
  };

  return (
    <>
      <div className="container">
        <div className={classes.box}>
          <BackLink classNames={[classes.link]} to="/">
            Головна &gt;
          </BackLink>
          <BackLink classNames={[classes.link]} to="/catalog">
            Дитячі коляски &gt;
          </BackLink>
        </div>

        <h1 className={classes.title}>{title}</h1>
        <ul className={classes.actions}>
          <li>
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
              {isFavorite ? 'З вибраного' : 'У вибране'}
            </button>
          </li>
          <li>
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
              Порівняти
            </button>
          </li>
        </ul>

        <div className={classes.container}>
          {available ? (
            <span className={classes.available}>В наявності</span>
          ) : (
            <span className={classes.unavailable}>Немає в наявності</span>
          )}
          <span className={classes.code}>Код: {code}</span>
          <span className={classes.rate}>
            {rate}
            <svg width="18px" height="18px">
              <use href={sprite + '#icon-star'}></use>
            </svg>
          </span>
          <a className={classes.reviewsNumber} href="#reviews">
            <span className={classes.mob}>({reviews.length})</span>
            <span className={classes.tab}>{reviews.length} відгуків</span>
          </a>
        </div>

        <div className={classes.mainInfo}>
          <MetaCarousel img={img} imgL={imgL} />

          <div>
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

            <div className={classes.list}>
              <span className={newPrice ? classes.oldPrice : classes.price}>{price} грн</span>
              {newPrice && <span className={classes.newPrice}>{newPrice} грн</span>}
              {discount && <span className={classes.discount}>-{discount}</span>}
            </div>

            <ul className={classes.shopping}>
              <li>
                <Button
                  type="button"
                  disabled={!available}
                  colored
                  large
                  rounded
                  onClick={addToCart}
                >
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
      </div>

      <Section title="З цим також купляють">
        <Carousel items={items.slice(0, 10)} />
      </Section>

      <div className={classes.additionalInfo}>
        <div className="container">
          <Description />
          <Characteristics />
          <Reviews reviews={reviews} rate={rate} />
        </div>
      </div>

      <ViewedItems />
    </>
  );
};

export default ProductDetails;
