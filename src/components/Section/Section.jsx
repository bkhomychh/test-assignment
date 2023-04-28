import PropTypes from 'prop-types';

import classes from './Section.module.css';

const Section = ({ title, label, children }) => {
  return (
    <section className={classes.section}>
      <div className={classes.box}>
        {title && <h2 className={classes.title}>{title}</h2>}
        {label && <span className={classes.label}>{label}</span>}
      </div>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Section;
