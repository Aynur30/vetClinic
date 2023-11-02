import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { prepareHeadersApi } from '../lib/prepareHeaders';
import { IBreed, IColor } from '../../types/client/appearanceDTO';

const API_BASE_URL = "http://91.241.64.154:8080/api/";

export const clientApi = createApi({
  reducerPath: 'clientApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers, { getState }) => prepareHeadersApi(headers, { getState })
     }),
    tagTypes: ["client", "client-read", "client-add"], 
  endpoints: (builder) => ({
    getAppearanceBreed: builder.query<IBreed[], unknown>({
      query: () => 'appearance/breed',
      providesTags: ["client", "client-read"],
    }),
    getAppearanceColor: builder.query<IColor[], unknown>({
        query: () => 'appearance/color',
        providesTags: ["client", "client-read"],
      }),
  }),
});

export const {useGetAppearanceBreedQuery, useGetAppearanceColorQuery} = clientApi