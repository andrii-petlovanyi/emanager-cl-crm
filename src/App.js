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
import ResetPassword from 'pages/ResetPassword/ResetPassword';
import { useGetPostsQuery } from 'redux/posts/postsApiSlice';
import ArchivePosts from 'pages/ArchivePosts/ArchivePosts';

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(authSelectors.getToken);
  const { data, isLoading } = useGetUserQuery(token, {
    skip: token === null,
  });

  //test
  const { data: newDate } = useGetPostsQuery();
  console.log(newDate);
  //test

  useEffect(() => {
    if (!data) return;

    dispatch(refresh(data));
  }, [data]);

  return (
    <>
      {!isLoading && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route element={<PrivateRoute />}>
              <Route index element={<Dashboard />} />
              <Route path="my" element={<MyPosts />} />
              <Route path="add" element={<AddPosts />} />
              <Route path="offers" element={<Offers />} />
              <Route path="archive" element={<ArchivePosts />} />
            </Route>
            <Route element={<PublicRoute />}>
              <Route path="login" element={<Login />} />
              <Route path="reset-pass" element={<ResetPassword />} />
            </Route>
          </Route>
        </Routes>
      )}
    </>
  );
};

export default App;
