import { Link } from 'react-router-dom';

import Mailing from 'components/Mailing';

import classes from './Footer.module.css';
import sprite from 'images/sprite.svg';
import mastercardImg from 'images/footer/mastercard.jpg';
import visaImg from 'images/footer/visa.jpg';
import liqPayImg from 'images/footer/liqpay.jpg';
import catalogs from 'data/catalogs.json';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Mailing />

      <div className={classes.wrapper}>
        <div className={classes.block}>
          <div className={classes.contactInfo}>
            <div className="container">
              <a className={classes.number} href="tel:0631284609">
                (063) 128-46-09
              </a>
              <a className={classes.email} href="mailto:bubu.shop2018@gmail.com">
                bubu.shop2018@gmail.com
              </a>
              <p className={classes.location}>
                Одеса, вул. Михайлівська 8 (щодня з 10:00 до 20:00)
              </p>
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
            </div>
          </div>

          <div className={classes.additionalInfo}>
            <div className="container">
              <div className={classes.box}>
                <div>
                  <h2 className={classes.title}>Інформація</h2>
                  <nav>
                    <ul className={classes.list}>
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
                        <Link to="/">Повернення та обмін</Link>
                      </li>
                      <li>
                        <Link to="/">Політика конфеденційності</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div>
                  <h2 className={classes.title}>Каталог</h2>
                  <ul className={classes.list}>
                    {catalogs.map(({ id, name }) => (
                      <li key={id}>
                        <Link to="/">{name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.sign}>
            <div className="container">
              <p className={classes.copyright}>&copy; Bubu 2022. Всі права захищені.</p>
              <ul className={classes.payment}>
                <li>
                  <img src={mastercardImg} alt="Mastercard" />
                </li>
                <li>
                  <img src={visaImg} alt="Visa" />
                </li>
                <li>
                  <img src={liqPayImg} alt="LiqPay" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
