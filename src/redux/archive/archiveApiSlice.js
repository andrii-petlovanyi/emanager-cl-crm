import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { store } from 'redux/store';
import { API_URL } from 'services/apiUrl';

const archiveApiSlice = createApi({
  reducerPath: 'archiveApiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/archive`,

    prepareHeaders: headers => {
      const token = store.getState().auth.token;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ['archive', 'posts'],
  endpoints: builder => ({
    getArchiveList: builder.query({
      query: () => `/`,
      keepUnusedDataFor: 5,
      providesTags: ['archive'],
    }),

    addToArchive: builder.mutation({
      query: postId => ({
        url: `/`,
        method: 'POST',
        body: postId,
      }),
      invalidatesTags: ['archive'],
    }),

    moveFromArchive: builder.mutation({
      query: archivePostId => ({
        url: `/${archivePostId}/move`,
        method: 'DELETE',
      }),
      invalidatesTags: ['archive'],
    }),

    deleteFromArchive: builder.mutation({
      query: archivePostId => ({
        url: `/${archivePostId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['archive'],
    }),
  }),
  refetchOnReconnect: true,
});
export const {
  useGetArchiveListQuery,
  useAddToArchiveMutation,
  useMoveFromArchiveMutation,
  useDeleteFromArchiveMutation,
} = archiveApiSlice;

export default archiveApiSlice;
