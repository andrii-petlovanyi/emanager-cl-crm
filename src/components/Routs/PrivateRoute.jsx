/* eslint-disable react/prop-types */
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';
import { useGetUserQuery } from 'redux/auth/authApiSlice';

function PrivateRoute() {
  try {
    const isAuth = useSelector(authSelectors.isAuth);
    const location = useLocation();
    Cookies.set('privateRoute', location.pathname, { expires: 7 });
    const { isLoading } = useGetUserQuery();

    if (isAuth && !isLoading) return <Outlet />;

    if (!isAuth && !isLoading) return <Navigate to="login" />;
  } catch (error) {
    console.log(error);
  }
}

export default PrivateRoute;
