import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { prepareHeadersApi } from '../lib/prepareHeaders'
import { IPetContact } from '../../types/client/petContactDTO';

const API_BASE_URL = 'http://91.241.64.154:8080/api/';

export const petContactAPI = createApi({
  reducerPath: 'petContactAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers, { getState }) =>
      prepareHeadersApi(headers, { getState }),
  }),
  tagTypes: ['petContact'],
  endpoints: (builder) => ({
    getPetContactById: builder.query<IPetContact, number>({
      query: (id) => `client/pet/contact/?petId=${id}`,
      providesTags: ['petContact'],
    }),

    makePetQR: builder.query<[string], number>({
      query: (id) => `client/pet/contact/qr?petId=${id}`,
      providesTags: ['petContact'],
    }),

    updatePetContact: builder.mutation<IPetContact, {data: IPetContact, id: number}>({
        query: ({data, id}) => ({
            url:`client/pet/contact/?petId=${id}`,
            method: 'PUT',
            body: data
        }),
        invalidatesTags: ['petContact'],
      }),
  }),
});

export const { useGetPetContactByIdQuery, useMakePetQRQuery, useUpdatePetContactMutation } = petContactAPI;
