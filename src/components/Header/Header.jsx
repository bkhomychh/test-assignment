import { useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './Header.module.css';
import sprite from 'images/sprite.svg';
import Menu from 'components/Menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className={classes.header}>
        <div className="container">
          <div className={classes.box}>
            <button className={classes.menuBtn} type="button" onClick={openMenu}>
              <svg width="30px" height="18px">
                <use href={sprite + '#icon-menu'}></use>
              </svg>
            </button>
            <Link className={classes.logo} to="/">
              <svg>
                <use href={sprite + '#icon-logo'}></use>
              </svg>
            </Link>
          </div>

          <form className={classes.form}>
            <div className={classes.wrapper}>
              <input type="text" placeholder="Я шукаю..." />
              <button type="submit">
                <svg width="15px" height="15px">
                  <use href={sprite + '#icon-search'}></use>
                </svg>
              </button>
            </div>
          </form>

          <ul className={classes.actions}>
            <li>
              <button type="button">
                <svg width="18px" height="20px">
                  <use href={sprite + '#icon-search'}></use>
                </svg>
              </button>
            </li>
            <li>
              <button type="button">
                <svg width="30px" height="20px">
                  <use href={sprite + '#icon-comparison'}></use>
                </svg>
                <span className={classes.number}>0</span>
              </button>
            </li>
            <li>
              <button type="button">
                <svg width="24px" height="20px">
                  <use href={sprite + '#icon-favorite'}></use>
                </svg>
                <span className={classes.number}>0</span>
              </button>
            </li>
            <li>
              <button type="button">
                <svg width="27px" height="20px">
                  <use href={sprite + '#icon-cart'}></use>
                </svg>
                <span className={classes.number}>1</span>
              </button>
            </li>
          </ul>
        </div>
      </header>

      {isMenuOpen && <Menu closeMenu={closeMenu} />}
    </>
  );
};

export default Header;
