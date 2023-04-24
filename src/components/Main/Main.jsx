import PropTypes from 'prop-types';

import classes from './Main.module.css';

const Main = ({ children }) => {
  return (
    <main className={classes.main}>
      <div className="container">{children}</div>
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
export default Main;
