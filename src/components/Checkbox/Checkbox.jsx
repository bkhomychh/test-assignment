import PropTypes from 'prop-types';

import classes from './Checkbox.module.css';

const Checkbox = ({ children, ...otherProps }) => {
  const handleClick = ({ target }) => target.blur();

  return (
    <label className={classes.label} onClick={handleClick}>
      <input className={classes.checkbox} type="checkbox" {...otherProps} />
      <span className={classes.icon}></span>
      {children}
    </label>
  );
};

Checkbox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Checkbox;
