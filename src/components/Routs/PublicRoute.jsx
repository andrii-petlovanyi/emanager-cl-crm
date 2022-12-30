/* eslint-disable react/prop-types */
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';
import { useGetUserQuery } from 'redux/auth/authApiSlice';

function PublicRoute() {
  try {
    const isAuth = useSelector(authSelectors.isAuth);
    const path = Cookies.get('privateRoute');
    const { isLoading } = useGetUserQuery();

    if (!isAuth && !isLoading) return <Outlet />;

    if (isAuth && !isLoading) return <Navigate to={path ? path : '/home'} />;
  } catch (error) {
    console.log(error);
  }
}

export default PublicRoute;
