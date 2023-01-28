import { lazy } from 'react';

// export const Login = lazy(() => import('pages/Login/Login'));
// export const ResetPassword = lazy(() =>
//   import('pages/ResetPassword/ResetPassword')
// );

export const Layout = lazy(() => import('layouts/Layout'));

export { Login } from 'pages/Login/Login';
export { ResetPassword } from 'pages/ResetPassword/ResetPassword';

export const Dashboard = lazy(() => import('pages/Dashboard/Dashboard'));
export const MyPosts = lazy(() => import('pages/MyPosts/MyPosts'));
export const AddPosts = lazy(() => import('pages/AddPosts/AddPosts'));
export const Offers = lazy(() => import('pages/Offers/Offers'));
export const ArchivePosts = lazy(() =>
  import('pages/ArchivePosts/ArchivePosts')
);
