import { lazy } from 'react';

export const Layout = lazy(() => import('layouts/Layout'));

export { Login } from 'pages/Login/Login';
export { ResetPassword } from 'pages/ResetPassword/ResetPassword';

export const Dashboard = lazy(() => import('pages/Dashboard/Dashboard'));
export const AllPosts = lazy(() => import('pages/AllPosts/AllPosts'));
export const AddPosts = lazy(() => import('pages/AddPosts/AddPosts'));
export const Offers = lazy(() => import('pages/Offers/Offers'));
export const ArchivePosts = lazy(() =>
  import('pages/ArchivePosts/ArchivePosts')
);
export const NotFound = lazy(() => import('pages/NotFound/NotFound'));
