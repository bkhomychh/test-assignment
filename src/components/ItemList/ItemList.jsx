import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Card from 'components/Card';

import classes from './ItemList.module.css';

const ItemList = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map(item => (
        <li key={item.id}>
          <Card {...item} />
        </li>
      ))}
    </ul>
  );
};

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ItemList;
