import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { prepareHeadersApi } from '../lib/prepareHeaders';
import {
  IClientPetResponse,
  IClientPetRequest,
} from '../../types/client/clientPet.DTO';

const API_BASE_URL = 'http://91.241.64.154:8080/api/';

export const clientPet = createApi({
  reducerPath: 'clientPet',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers, { getState }) =>
      prepareHeadersApi(headers, { getState }),
  }),
  tagTypes: ['GetClientPets', 'clientPetsUpdate'],
  endpoints: (builder) => ({
    getClientPets: builder.query<IClientPetResponse[], void>({
      query: () => ({
        url: 'client/pet',
      }),
      providesTags: ['GetClientPets'],
    }),
    getClientPetByID: builder.query<IClientPetResponse, void>({
      query: (id) => ({
        url: `client/pet${id}`,
      }),
      providesTags: ['GetClientPets'],
    }),
    addNewPet: builder.mutation<void, IClientPetRequest>({
      query: (data) => ({
        url: 'client/pet',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['clientPetsUpdate'],
    }),
    updatePet: builder.mutation<void, { data: IClientPetRequest; id: number }>({
      query: ({ data, id }) => ({
        url: `client/pet${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['clientPetsUpdate'],
    }),
    deletePet: builder.mutation<void, { id: number }>({
      query: (id) => ({
        url: `client/pet${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['clientPetsUpdate'],
    }),
  }),
});

export const { useGetClientPetsQuery, useAddNewPetMutation } = clientPet;
