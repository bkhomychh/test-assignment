import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { selectIsLoggedIn } from 'redux/auth';

const RestrictedRoute = ({ redirectTo = '/', component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};

RestrictedRoute.propTypes = {
  redirectTo: PropTypes.string,
  component: PropTypes.element.isRequired,
};

export default RestrictedRoute;
