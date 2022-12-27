import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { store } from 'redux/store';

const offersApiSlice = createApi({
  reducerPath: 'offersApiSlice',
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
  tagTypes: ['offers'],
  endpoints: builder => ({
    getOffers: builder.query({
      query: () => `/offers`,
      keepUnusedDataFor: 0,
      providesTags: ['offers'],
    }),

    deletePost: builder.mutation({
      query: offerId => ({
        url: `/offers/${offerId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['offers'],
    }),
  }),
  refetchOnReconnect: true,
});
export const { useDeletePostMutation, useGetOffersQuery } = offersApiSlice;

export default offersApiSlice;
