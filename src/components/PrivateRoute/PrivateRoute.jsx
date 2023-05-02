import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { selectIsLoggedIn } from 'redux/auth';

const PrivateRoute = ({ redirectTo = '/login', component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? component : <Navigate to={redirectTo} />;
};

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string,
  component: PropTypes.element.isRequired,
};

export default PrivateRoute;
