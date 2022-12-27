import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { store } from 'redux/store';

const postsApiSlice = createApi({
  reducerPath: 'postsApiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://elxserver.pp.ua/api',

    prepareHeaders: headers => {
      const token = store.getState().auth.token;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['posts', 'userPosts'],
  endpoints: builder => ({
    getPosts: builder.query({
      query: () => `/posts`,
      keepUnusedDataFor: 0,
      providesTags: ['posts'],
    }),
    getUserPosts: builder.query({
      query: () => `/posts/user/me`,
      keepUnusedDataFor: 0,
      providesTags: ['userPosts'],
    }),
    postPost: builder.mutation({
      query: contact => ({
        url: `/posts`,
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['posts'],
    }),
    deletePost: builder.mutation({
      query: contactId => ({
        url: `/posts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['posts'],
    }),
    patchPost: builder.mutation({
      query: ({ postsId, patchedPosts }) => ({
        url: `/contacts/${postsId}`,
        method: 'PATCH',
        body: patchedPosts,
      }),
      invalidatesTags: ['posts'], // subscription to updates
    }),
  }),
  refetchOnReconnect: true,
});
export const {
  useGetPostsQuery,
  useGetUserPostsQuery,
  usePostPostMutation,
  useDeletePostMutation,
  usePatchPostMutation,
} = postsApiSlice;

export default postsApiSlice;
