import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from 'services/apiUrl';

const authApiSlice = createApi({
  reducerPath: 'authApiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/users`,

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
        url: `/signup`,
        method: 'POST',
        body: { name: user.name, email: user.email, password: user.password },
        providesTags: ['users'],
      }),
    }),

    logInUser: builder.mutation({
      query: user => ({
        url: `/signin`,
        method: 'POST',
        body: { email: user.email, password: user.password },
      }),
      providesTags: ['users'],
    }),

    logOutUser: builder.mutation({
      query: () => ({
        url: `/logout`,
      }),
      providesTags: ['users'],
    }),

    getUser: builder.query({
      query: () => ({
        url: '/current',
      }),
      providesTags: ['users'],
    }),

    resetUserPass: builder.mutation({
      query: email => ({
        url: `/password-reset`,
        method: 'POST',
        body: { email },
      }),
      providesTags: ['users'],
    }),

    changeUserPass: builder.mutation({
      query: user => ({
        url: `/${user.userId}/password`,
        method: 'PATCH',
        body: { password: user.password },
      }),
      providesTags: ['users'],
    }),

    changeUserEmail: builder.mutation({
      query: user => ({
        url: `/${user.userId}/email`,
        method: 'PATCH',
        body: { email: user.email },
      }),
      providesTags: ['users'],
    }),

    updateNote: builder.mutation({
      query: data => ({
        url: `/${data.userId}/note`,
        method: 'PATCH',
        body: { note: data.note },
      }),
      invalidatesTags: ['users'],
    }),
  }),
});

export const {
  useSignUpUserMutation,
  useLogInUserMutation,
  useLogOutUserMutation,
  useChangeUserPassMutation,
  useChangeUserEmailMutation,
  useResetUserPassMutation,
  useGetUserQuery,
  useUpdateNoteMutation,
} = authApiSlice;

export default authApiSlice;
