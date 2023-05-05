import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';

import BackLink from 'components/BackLink';
import Section from 'components/Section';
import Carousel from 'components/Carousel';
import Description from 'components/Description';
import Characteristics from 'components/Сharacteristics';
import Reviews from 'components/Reviews';
import ViewedItems from 'components/ViewedItems';

import { getItemReviews } from 'services';
import { COLOR, GENDER } from 'utils';
import * as favorite from 'redux/favorite';
import * as comparison from 'redux/comparison';

import classes from './ProductDetails.module.css';
import sprite from 'images/sprite.svg';
import items from 'data/items.json';
import ItemInfo from 'components/ItemInfo';

const ProductDetails = () => {
  const [item, setItem] = useState({});
  const [color, setColor] = useState(COLOR.blue);
  const [gender, setGender] = useState(GENDER.boy);
  const [reviews, setReviews] = useState([]);

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

  const { title, rate, available, code } = item;

  const isFavorite = favoriteItems.some(el => el.id === id);
  const isCompared = comparedItems.some(el => el.id === id);

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

        <div className={classes.wrapper}>
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
        </div>

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

        {item && (
          <ItemInfo
            item={item}
            color={color}
            gender={gender}
            setColor={setColor}
            setGender={setGender}
          />
        )}
      </div>

      <Section title="З цим також купляють">
        <Carousel items={items.slice(0, 10)} />
      </Section>

      <div className={classes.additionalInfo}>
        <div className="container">
          <div className={classes.block}>
            <Description />
            <Characteristics />
          </div>
          <Reviews reviews={reviews} rate={rate} />
        </div>
      </div>

      <ViewedItems />
    </>
  );
};

export default ProductDetails;
