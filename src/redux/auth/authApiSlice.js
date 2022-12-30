import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const authApiSlice = createApi({
  reducerPath: 'authApiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://elxserver.pp.ua/api',

    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ['users'],
  endpoints: builder => ({
    signUpUser: builder.mutation({
      query: user => ({
        url: `/auth/register`,
        method: 'POST',
        body: { name: user.name, email: user.email, password: user.password },
        providesTags: ['users'],
      }),
    }),

    logInUser: builder.mutation({
      query: user => ({
        url: `/auth/login`,
        method: 'POST',
        body: { username: user.username, password: user.password },
      }),
      providesTags: ['users'],
    }),

    logOutUser: builder.mutation({
      // eslint-disable-next-line no-unused-vars
      query: token => ({
        url: `/`,
        method: 'POST',
      }),
      providesTags: ['users'],
    }),

    getUser: builder.query({
      query: () => ({
        url: '/auth/me',
      }),
      providesTags: ['users'],
    }),
  }),
});

export const {
  useSignUpUserMutation,
  useLogInUserMutation,
  useLogOutUserMutation,
  useGetUserQuery,
} = authApiSlice;

export default authApiSlice;
