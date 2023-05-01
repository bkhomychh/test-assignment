import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';
import Spinner from 'components/Spinner';

import classes from './Layout.module.css';

const Layout = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <Main>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer />
    </div>
  );
};

export default Layout;
