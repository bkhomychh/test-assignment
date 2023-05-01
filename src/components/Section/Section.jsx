import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import classes from './Section.module.css';
import sprite from 'images/sprite.svg';

const Section = ({ title, label, to, children }) => {
  return (
    <section className={classes.section}>
      <div className="container">
        {title && (
          <div className={classes.box}>
            <h2 className={classes.title}>{title}</h2>
            {label && <span className={classes.label}>{label}</span>}
            {to && (
              <Link className={classes.link} to={to}>
                <svg width="20px" height="20px">
                  <use href={sprite + '#icon-arrow-right'}></use>
                </svg>
              </Link>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Section;
