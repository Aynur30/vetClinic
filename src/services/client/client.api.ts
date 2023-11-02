import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IClientInfo, IAvatar, IAvatarResponse } from '../../types/client/clientDTO';
import { prepareHeadersApi } from '../lib/prepareHeaders';

const API_BASE_URL = "http://91.241.64.154:8080/api/";

export const clientApi = createApi({
  reducerPath: 'clientApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers, { getState }) => prepareHeadersApi(headers, { getState })
     }),
     tagTypes: ["client", "client-read", "client-add"],  
  endpoints: (builder) => ({
    getClient: builder.query<IClientInfo, unknown>({
      query: () => 'client',
      providesTags: ["client", "client-read"],
    }),
    getClientAvatar: builder.query<IAvatar, unknown>({
        query: () => 'client/avatar',
        providesTags: ["client", "client-read"],
      }),
    sendClientAvatar: builder.mutation<IAvatarResponse, FormData>({
      query: (data) => ({
        url: 'client/avatar',
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
          },
        body: data,
      }),
      invalidatesTags: ["client", "client-add"],
    }),
  }),
});

export const {useGetClientQuery, useGetClientAvatarQuery, useSendClientAvatarMutation} = clientApi
