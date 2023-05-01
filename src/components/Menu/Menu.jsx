import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useCloseModal } from 'hooks';
import { useDispatch } from 'react-redux/es/exports';
import { logOut } from 'redux/auth';

import classes from './Menu.module.css';
import sprite from 'images/sprite.svg';

const Menu = ({ closeMenu }) => {
  const dispatch = useDispatch();
  useCloseModal(closeMenu);

  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <div className={classes.wrapper}>
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

        <div className={classes.wrapper}>
          <button className={classes.btn} type="button">
            <svg>
              <use href={sprite + '#icon-arrow-down'}></use>
            </svg>
            Меню
          </button>

          <ul className={classes.list}>
            <li>
              <Link className={classes.link} to="/catalog" data-catalog="carriage">
                Дитячі коляски
              </Link>
            </li>
            <li>
              <Link className={classes.link} to="/catalog" data-catalog="room">
                Дитяча кімната
              </Link>
            </li>
            <li>
              <Link className={classes.link} to="/catalog" data-catalog="chair">
                Стільці і шезлонги
              </Link>
            </li>
            <li>
              <Link className={classes.link} to="/catalog" data-catalog="feeding">
                Для годування
              </Link>
            </li>
            <li>
              <Link className={classes.link} to="/catalog" data-catalog="soap">
                Гігієна і догляд
              </Link>
            </li>
            <li>
              <Link className={classes.link} to="/catalog" data-catalog="autochair">
                Автокрісла
              </Link>
            </li>
            <li>
              <Link className={classes.link} to="/catalog" data-catalog="car">
                Дитячий транспорт
              </Link>
            </li>
            <li>
              <Link className={classes.link} to="/catalog" data-catalog="toy">
                Іграшки
              </Link>
            </li>
            <li>
              <Link className={classes.link} to="/catalog" data-catalog="clothes">
                Одяг
              </Link>
            </li>
            <li>
              <Link className={classes.link} to="/catalog" data-catalog="new">
                Новий товар
              </Link>
            </li>
          </ul>
        </div>

        <div className={classes.wrapper}>
          <button className={classes.btn} type="button">
            <svg width="7px" height="13px">
              <use href={sprite + '#icon-arrow-down'}></use>
            </svg>
            Каталог
          </button>

          <ul className={classes.list}>
            <li>
              <Link to="/catalog">Коляски 2 в 1</Link>
            </li>
            <li>
              <Link to="/catalog">Зимові конверти</Link>
            </li>
            <li>
              <Link to="/catalog">Аксесуари та комплектуючі</Link>
            </li>
            <li>
              <Link to="/catalog">Муфти</Link>
            </li>
          </ul>
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
