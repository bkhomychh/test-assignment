import PropTypes from 'prop-types';

import classes from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={classes.section}>
      {title && <h2 className={classes.title}>{title}</h2>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Section;
