import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';
import { logOut } from 'redux/auth';

import classes from './NavLinks.module.css';
import sprite from 'images/sprite.svg';

const NavLinks = () => {
  const dispatch = useDispatch();

  return (
    <>
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
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer nofollow">
              <svg width="20px" height="20px">
                <use href={sprite + '#icon-instagram'}></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer nofollow">
              <svg width="23px" height="16px">
                <use href={sprite + '#icon-youtube'}></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer nofollow">
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
    </>
  );
};

export default NavLinks;
