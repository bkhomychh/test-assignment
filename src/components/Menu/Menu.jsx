import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import classes from './Menu.module.css';
import sprite from 'images/sprite.svg';

const Menu = ({ closeMenu }) => {
  useEffect(() => {
    const handleClick = ({ target }) => {
      const shouldCloseMenu = target.classList.contains(classes.backdrop);

      if (shouldCloseMenu) {
        closeMenu();
      }
    };

    window.addEventListener('click', handleClick);
    document.body.classList.add('no-scroll');

    return () => {
      window.removeEventListener('click', handleClick);
      document.body.classList.remove('no-scroll');
    };
  }, [closeMenu]);

  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <button className={classes.catalogBtn} type="button">
          <svg width="25px" height="16px">
            <use href={sprite + '#icon-burger-menu'}></use>
          </svg>
          Каталог
        </button>
        <nav>
          <ul className={classes.links}>
            <li>
              <Link to="/">Про нас</Link>
            </li>
            <li>
              <Link to="/">Контакти</Link>
            </li>
            <li>
              <Link to="/">Доставка і оплата</Link>
            </li>
            <li>
              <Link to="/">Повернення і обмін</Link>
            </li>
          </ul>
        </nav>

        <div className={classes.contactInfo}>
          <a className={classes.phone} href="tel:0631284609">
            (063) 128-46-09
          </a>
          <ul className={classes.socials}>
            <li>
              <a href="/" target="_blank" rel="noopener noreferrer nofollow">
                <svg width="20px" height="20px">
                  <use href={sprite + '#icon-instagram'}></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="/" target="_blank" rel="noopener noreferrer nofollow">
                <svg width="23px" height="16px">
                  <use href={sprite + '#icon-youtube'}></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="/" target="_blank" rel="noopener noreferrer nofollow">
                <svg width="11px" height="19px">
                  <use href={sprite + '#icon-facebook'}></use>
                </svg>
              </a>
            </li>
          </ul>

          <ul className={classes.langs}>
            <li>
              <button className={`${classes.langBtn} active`} type="button">
                Укр
              </button>
            </li>
            <li>
              <button className={classes.langBtn} type="button">
                Рус
              </button>
            </li>
          </ul>

          <Link className={classes.loginBtn} to="/">
            <svg width="22px" height="21px">
              <use href={sprite + '#icon-user'}></use>
            </svg>
            Вхід
          </Link>
        </div>

        <button className={classes.closeBtn} type="button" onClick={closeMenu}>
          <svg width="25px" height="25px">
            <use href={sprite + '#icon-close'}></use>
          </svg>
        </button>
      </div>
    </div>
  );
};

Menu.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};

export default Menu;