import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IClientNews } from '../../types/client/clientNewsDTO'
import { prepareHeadersApi } from '../lib/prepareHeaders'

const API_BASE_URL = 'http://91.241.64.154:8080/api/';

export const clientNewsApi = createApi({
  reducerPath: 'clientNewsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers, { getState }) =>
      prepareHeadersApi(headers, { getState }),
  }),
  tagTypes: ['clientNews'],
  endpoints: (builder) => ({
    getClientNews: builder.query<IClientNews[], unknown>({
      query: () => 'client/news',
      providesTags: ['clientNews'],
    }),
  }),
});

export const { useGetClientNewsQuery } = clientNewsApi;
