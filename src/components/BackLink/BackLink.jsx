import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import classes from './BackLink.module.css';

const BackLink = ({ to = '/', classNames = [], children }) => {
  const classList = [classes.link, ...classNames];

  return (
    <Link className={classList.join(' ')} to={to}>
      {children}
    </Link>
  );
};

BackLink.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  classNames: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default BackLink;
