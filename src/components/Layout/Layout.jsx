import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header';

import classes from './Layout.module.css';

const Layout = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <main className={classes.main}>
        <div className="container">
          main
          <Suspense fallback={<p>Loading...</p>}>
            <Outlet />
          </Suspense>
        </div>
      </main>
      <footer>
        <div className="container">footer</div>
      </footer>
    </div>
  );
};

export default Layout;
