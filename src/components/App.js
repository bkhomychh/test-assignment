import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout';
import AuthLayout from './AuthLayout';

const Home = lazy(() => import('pages/Home'));
const Catalog = lazy(() => import('pages/Catalog'));
const ProductDetails = lazy(() => import('pages/ProductDetails'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":catalog" element={<Catalog />} />
          <Route path=":catalog/:id" element={<ProductDetails />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
