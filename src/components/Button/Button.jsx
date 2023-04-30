import PropTypes from 'prop-types';

import classes from './Button.module.css';

const Button = ({ children, colored = false, large = false, rounded = false, ...otherProps }) => {
  const classList = [
    classes.btn,
    colored ? classes.colored : classes.default,
    large ? classes.large : '',
    rounded ? classes.rounded : '',
  ];
  return (
    <button className={classList.join(' ')} {...otherProps}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  colored: PropTypes.bool,
};

export default Button;
