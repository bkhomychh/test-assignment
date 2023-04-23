import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout';

const Home = lazy(() => import('pages/Home'));
const Catalog = lazy(() => import('pages/Catalog'));
const ProductDetails = lazy(() => import('pages/ProductDetails'));
const SignIn = lazy(() => import('pages/SignIn'));
const Register = lazy(() => import('pages/Register'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":catalog" element={<Catalog />} />
          <Route path=":catalog/:id" element={<ProductDetails />} />
          <Route path="login" element={<SignIn />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
