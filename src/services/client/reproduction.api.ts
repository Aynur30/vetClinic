import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { prepareHeadersApi } from '../lib/prepareHeaders'
import { IReproduction } from '../../types/client/reproductionDTO';
import { BASE_URL } from "../lib/baseUrl";

export const reproductionApi = createApi({
  reducerPath: 'reproductionApi',
  tagTypes: [
    'getReproduction',
    'getAllReproductions',
    'addReproduction',
    'updateReproduction',
    'deleteReproduction'
  ],
  baseQuery: fetchBaseQuery({
      baseUrl: BASE_URL,
      prepareHeaders: (headers, { getState }) =>
          prepareHeadersApi(headers, { getState }),
  }),    
  endpoints: (builder) => ({
      getReproduction: builder.query<IReproduction[], { petId: number, reproductionId: number }>({
          query: ({petId, reproductionId}) => ({
              url: `client/pet/${petId}/reproduction/${reproductionId}`,
          }),
          providesTags: ['getReproduction'],
      }),
      getAllReproductions: builder.query<IReproduction[], { petId: number }>({
          query: (petId) => ({
              url: `client/pet/${petId}/reproduction`,
          }),
          providesTags: ['getAllReproductions'],
      }),
      addReproduction: builder.mutation<IReproduction[], { data: IReproduction, petId: number }>({
          query: ({data, petId}) => ({
              url: `client/pet/${petId}/reproduction`,
              method: 'POST',
              body: data,
          }),
          invalidatesTags: ['addReproduction'],
      }),
      updateReproduction: builder.mutation<IReproduction[], { data: IReproduction, petId: number, reproductionId: number }>({
          query: ({ data, petId, reproductionId}) => ({
              url: `/api/client/pet/${petId}/reproduction/${reproductionId}`,
              method: 'PUT',
              body: data,
          }),
          invalidatesTags: ['updateReproduction'],
      }),
      deleteReproduction: builder.mutation<IReproduction[], {petId: number, reproductionId: number}>({
          query: ({petId, reproductionId}) => ({
              url: `/api/client/pet/${petId}/reproduction/${reproductionId}`,
              method: 'DELETE',
          }),
          invalidatesTags: ['deleteReproduction'],
      }),
  }),
});

export const {
  useGetReproductionQuery,
  useGetAllReproductionsQuery,
  useAddReproductionMutation,
  useUpdateReproductionMutation,
  useDeleteReproductionMutation,
} = reproductionApi;
