import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { useGetUserQuery } from 'redux/auth/authApiSlice';
import { refresh } from 'redux/auth/authSlice';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from 'components/Routs/PrivateRoute';
import Dashboard from 'pages/Dashboard/Dashboard';
import MyPosts from 'pages/MyPosts/MyPosts';
import AddPosts from 'pages/AddPosts/AddPosts';
import Offers from 'pages/Offers/Offers';
import PublicRoute from 'components/Routs/PublicRoute';
import Login from 'pages/Login/Login';
import Layout from 'layouts/Layout';

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(authSelectors.getToken);
  const { data, isLoading } = useGetUserQuery(token, {
    skip: token === null,
  });

  useEffect(() => {
    if (data) dispatch(refresh(data));
  }, [data]);

  return (
    <>
      {!isLoading ? (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route element={<PrivateRoute />}>
              <Route path="home" element={<Dashboard />} />
              <Route path="my" element={<MyPosts />} />
              <Route path="add" element={<AddPosts />} />
              <Route path="offers" element={<Offers />} />
            </Route>
            <Route element={<PublicRoute />}>
              <Route path="login" element={<Login />} />
            </Route>
          </Route>
        </Routes>
      ) : (
        <>Loading...</>
      )}
    </>
  );
};

export default App;
