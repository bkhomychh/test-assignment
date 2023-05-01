import PropTypes from 'prop-types';
import { Link, useLocation, useParams } from 'react-router-dom';

import classes from './Card.module.css';
import imgPlaceholder from 'images/img-placeholder.png';

const Card = ({ id, title, img, price, discount, newPrice }) => {
  const { catalog = 'catalog' } = useParams();
  const location = useLocation();

  return (
    <Link className={classes.card} to={`/${catalog}/${id}`} state={{ from: location }}>
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
