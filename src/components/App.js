import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout';
import AuthLayout from './AuthLayout';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';

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
          <Route index element={<PrivateRoute component={<Home />} />} />
          <Route path=":catalog" element={<PrivateRoute component={<Catalog />} />} />
          <Route path=":catalog/:id" element={<PrivateRoute component={<ProductDetails />} />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<RestrictedRoute component={<Login />} />} />
          <Route path="/register" element={<RestrictedRoute component={<Register />} />} />
        </Route>

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
