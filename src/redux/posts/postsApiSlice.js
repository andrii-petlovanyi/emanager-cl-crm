import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { store } from 'redux/store';
import { API_URL } from 'services/apiUrl';

const postsApiSlice = createApi({
  reducerPath: 'postsApiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/posts`,

    prepareHeaders: headers => {
      const token = store.getState().auth.token;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  keepUnusedDataFor: 30,
  tagTypes: ['posts'],
  endpoints: builder => ({
    getPosts: builder.query({
      query: () => `/`,
      keepUnusedDataFor: 30,
      providesTags: ['posts'],
    }),

    getPostById: builder.query({
      query: postId => `/${postId}`,
      keepUnusedDataFor: 30,
      providesTags: ['posts'],
    }),

    deletePost: builder.mutation({
      query: postId => ({
        url: `/${postId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['posts'],
    }),

    addPost: builder.mutation({
      query: post => ({
        url: `/`,
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['posts'],
    }),

    updatePost: builder.mutation({
      query: ({ postId, updatedPost }) => ({
        url: `/${postId}`,
        method: 'PUT',
        body: updatedPost,
      }),
      invalidatesTags: ['posts'], // subscription to updates
    }),
  }),
  refetchOnReconnect: true,
});
export const {
  useAddPostMutation,
  useDeletePostMutation,
  useGetPostByIdQuery,
  useGetPostsQuery,
  useUpdatePostMutation,
  usePrefetch,
} = postsApiSlice;

export default postsApiSlice;
