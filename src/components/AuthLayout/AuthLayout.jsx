import { Outlet } from 'react-router-dom';

import classes from './AuthLayout.module.css';
import sprite from 'images/sprite.svg';
import { Suspense } from 'react';

const AuthLayout = () => {
  return (
    <div className={classes.wrapper}>
      <header className={classes.header}></header>
      <main className={classes.main}>
        <div className="container">
          <svg className={classes.logo} width="190px" height="44px">
            <use href={sprite + '#icon-logo'}></use>
          </svg>
          <Suspense fallback={<p>Loading...</p>}>
            <Outlet />
          </Suspense>
          <div>
            <span className={classes.divider}>Або</span>
            <p className={classes.label}>Увійти за допомогою:</p>
            <ul className={classes.socials}>
              <li>
                <button type="button">
                  <svg width="40px" height="40px">
                    <use href={sprite + '#icon-google-colored'}></use>
                  </svg>
                </button>
              </li>
              <li>
                <button type="button">
                  <svg width="40px" height="40px">
                    <use href={sprite + '#icon-facebook-colored'}></use>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <footer className={classes.footer}></footer>
    </div>
  );
};

export default AuthLayout;
