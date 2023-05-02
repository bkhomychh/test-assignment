import { useState } from 'react';
import { useCloseModal } from 'hooks';
import { useDispatch } from 'react-redux/es/exports';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { logOut } from 'redux/auth';

import classes from './Menu.module.css';
import sprite from 'images/sprite.svg';
import { MENU } from 'utils';
import catalogs from 'data/catalogs.json';
import categories from 'data/categories.json';

const Menu = ({ closeMenu }) => {
  const [currentMenu, setCurrentMenu] = useState(MENU.main);
  const dispatch = useDispatch();

  useCloseModal(closeMenu);

  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        {currentMenu === MENU.main && (
          <div className={classes.mainMenu}>
            <button
              className={classes.catalogBtn}
              type="button"
              onClick={() => setCurrentMenu(MENU.catalog)}
            >
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
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <svg width="20px" height="20px">
                      <use href={sprite + '#icon-instagram'}></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <svg width="23px" height="16px">
                      <use href={sprite + '#icon-youtube'}></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
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

              <button className={classes.loginBtn} onClick={() => dispatch(logOut())}>
                <svg width="22px" height="21px">
                  <use href={sprite + '#icon-user'}></use>
                </svg>
                Вихід
              </button>
            </div>
          </div>
        )}

        {currentMenu === MENU.catalog && (
          <div className={classes.catalogMenu}>
            <button className={classes.btn} type="button" onClick={() => setCurrentMenu(MENU.main)}>
              <svg>
                <use href={sprite + '#icon-arrow-down'}></use>
              </svg>
              Меню
            </button>

            <ul className={classes.list}>
              {catalogs.map(({ id, name, shorthand }) => (
                <li key={id}>
                  <button
                    className={classes.link}
                    data-catalog={shorthand}
                    onClick={() => setCurrentMenu(MENU.category)}
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {currentMenu === MENU.category && (
          <div className={classes.categoryMenu}>
            <button
              className={classes.btn}
              type="button"
              onClick={() => setCurrentMenu(MENU.catalog)}
            >
              <svg width="7px" height="13px">
                <use href={sprite + '#icon-arrow-down'}></use>
              </svg>
              Каталог
            </button>

            <ul className={classes.list}>
              {categories.map(({ id, name }) => (
                <li key={id}>
                  <Link to="/catalog">{name}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}

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
