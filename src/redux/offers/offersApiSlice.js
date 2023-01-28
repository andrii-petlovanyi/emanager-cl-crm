import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { store } from 'redux/store';
import { API_URL } from 'services/apiUrl';

const offersApiSlice = createApi({
  reducerPath: 'offersApiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/offers`,

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
      query: ({ page, limit }) => `/?page=${page}&limit=${limit}`,
      keepUnusedDataFor: 5,
      providesTags: ['offers'],
    }),

    getOffersById: builder.query({
      query: offerId => `/${offerId}`,
      keepUnusedDataFor: 5,
      providesTags: ['offers'],
    }),

    deleteOffer: builder.mutation({
      query: offerId => ({
        url: `/${offerId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['offers'],
    }),
  }),
  refetchOnReconnect: true,
});
export const {
  useDeleteOfferMutation,
  useGetOffersByIdQuery,
  useGetOffersQuery,
  usePrefetch,
} = offersApiSlice;

export default offersApiSlice;
