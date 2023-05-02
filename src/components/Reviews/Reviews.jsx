import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import ReviewForm from 'components/ReviewForm';
import Modal from 'components/Modal';

import { getRandomStarNumber } from 'utils';
import classes from './Reviews.module.css';
import sprite from 'images/sprite.svg';

const Reviews = ({ reviews = [], rate = 0 }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className={classes.section}>
      <div className={classes.box}>
        <h2 className={classes.title} id="reviews">
          Відгуки ({reviews.length})
        </h2>
        <p className={classes.rate}>
          Рейтинг:
          <span className={classes.number}>
            {rate}
            <svg width="18px" height="18px">
              <use href={sprite + '#icon-star'}></use>
            </svg>
          </span>
        </p>
      </div>

      <Button colored large rounded onClick={openModal}>
        + Написати відгук
      </Button>

      {isModalOpen && (
        <Modal close={closeModal}>
          <ReviewForm close={closeModal} />
        </Modal>
      )}

      <ul className={classes.reviews}>
        {reviews.map(({ id, email, body }) => (
          <li className={classes.review} key={id}>
            <p className={classes.date}>20.09.22</p>
            <div className={classes.block}>
              <span className={classes.name}>{email}</span>
              <ul className={classes.stars}>
                {[...Array(getRandomStarNumber()).keys()].map(val => (
                  <li key={val}>
                    <svg width="16px" height="16px">
                      <use href={sprite + '#icon-star'}></use>
                    </svg>
                  </li>
                ))}
              </ul>
            </div>
            <p className={classes.text}>{body}</p>
          </li>
        ))}
      </ul>

      <Link to="" className={classes.link} type="button">
        Показати більше
      </Link>
    </section>
  );
};

Reviews.propTypes = {
  rate: PropTypes.number,
  reviews: PropTypes.arrayOf(PropTypes.object),
};

export default Reviews;
