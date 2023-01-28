import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { useGetUserQuery } from 'redux/auth/authApiSlice';
import { refresh } from 'redux/auth/authSlice';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from 'components/Routs/PrivateRoute';
import PublicRoute from 'components/Routs/PublicRoute';

import {
  Layout,
  AddPosts,
  Dashboard,
  MyPosts,
  Offers,
  ArchivePosts,
  Login,
  ResetPassword,
} from 'pages';

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(authSelectors.getToken);
  const { data, isLoading } = useGetUserQuery(token, {
    skip: token === null,
  });

  useEffect(() => {
    if (!data) return;

    dispatch(refresh(data));
  }, [data]);

  return (
    <>
      {!isLoading && (
        <Suspense fallback={false}>
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
        </Suspense>
      )}
    </>
  );
};

export default App;
