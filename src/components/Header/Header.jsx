import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';

import Menu from 'components/Menu';

import { useMediaQuery } from 'hooks';
import { selectCart } from 'redux/cart';
import { selectFavorite } from 'redux/favorite';
import { selectComparison } from 'redux/comparison';

import classes from './Header.module.css';
import sprite from 'images/sprite.svg';
import NavLinks from 'components/NavLinks';
import CatalogList from 'components/CatalogList';
import { useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState();
  const cart = useSelector(selectCart);
  const favoriteItems = useSelector(selectFavorite);
  const comparedItems = useSelector(selectComparison);
  const isTabVersion = useMediaQuery('768px');
  const isDeskVersion = useMediaQuery('1350px');
  const { pathname } = useLocation();

  useEffect(() => {
    const shouldOpenMenu = isDeskVersion && pathname === '/';
    setIsMenuOpen(shouldOpenMenu);
  }, [isDeskVersion, pathname]);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen(state => !state);

  const getClasses = number => {
    const classList = [classes.number];

    if (number > 0) {
      classList.push(classes.active);
    } else if (!isTabVersion) {
      classList.push(classes.hidden);
    }

    return classList.join(' ');
  };

  return (
    <>
      <header className={classes.header}>
        <div className="container">
          <div className={classes.box}>
            {!isDeskVersion && (
              <button className={classes.menuBtn} type="button" onClick={openMenu}>
                <svg width="30px" height="18px">
                  <use href={sprite + '#icon-menu'}></use>
                </svg>
              </button>
            )}

            <Link className={classes.logo} to="/">
              <svg>
                <use href={sprite + '#icon-logo'}></use>
              </svg>
            </Link>
            {isDeskVersion && <NavLinks />}
          </div>

          <div className={`${classes.catalog} ${isMenuOpen ? classes.open : ''}`}>
            <button className={classes.catalogBtn} onClick={toggleMenu}>
              <svg width="25px" height="16px">
                <use href={sprite + '#icon-burger-menu'}></use>
              </svg>
              Каталог
            </button>

            {isMenuOpen && <CatalogList closeMenu={closeMenu} />}
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
                <span className={getClasses(comparedItems.length)}>{comparedItems.length}</span>
              </button>
            </li>
            <li>
              <button type="button">
                <svg width="24px" height="20px">
                  <use href={sprite + '#icon-favorite'}></use>
                </svg>
                <span className={getClasses(favoriteItems.length)}>{favoriteItems.length}</span>
              </button>
            </li>
            <li>
              <button type="button">
                <svg width="27px" height="20px">
                  <use href={sprite + '#icon-cart'}></use>
                </svg>
                <span className={getClasses(cart.length)}>{cart.length}</span>
              </button>
            </li>
          </ul>
        </div>
      </header>

      {!isDeskVersion && isMenuOpen && <Menu closeMenu={closeMenu} />}
    </>
  );
};

export default Header;
