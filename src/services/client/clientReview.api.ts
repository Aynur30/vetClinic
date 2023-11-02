import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { prepareHeadersApi } from '../lib/prepareHeaders';
import { IClientReviewResponse } from '../../types/client/ClientReviewDTO';

const API_BASE_URL = 'http://91.241.64.154:8080/api/';

export const clientReviewAPI = createApi({
  reducerPath: 'clientReviewAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers, { getState }) =>
      prepareHeadersApi(headers, { getState }),
  }),
  tagTypes: ['getComment', 'addComment', 'updateComment', 'deleteComment'],
  endpoints: (builder) => ({
    getComment: builder.query<IClientReviewResponse, {id: number}>({
      query: (id) => ({
        url: `client/doctor/${id}/review`,
      }),
      providesTags: ['getComment'],
    }),
    addNewComment: builder.mutation<IClientReviewResponse, { text: string; id: number }>({
      query: ({ text, id }) => ({
        url: `client/doctor/${id}/review?text=${text}`,
        method: 'POST',
      }),
      invalidatesTags: ['addComment'],
    }),
    updateComment: builder.mutation<IClientReviewResponse, {text:string, id: number }>({
      query: ({ text, id }) => ({
        url: `client/doctor/${id}/review`,
        method: 'PUT',
        body: text,
      }),
      invalidatesTags: ['updateComment'],
    }),
    deleteComment: builder.mutation<void, { id: number }>({
      query: (id) => ({
        url: `client/doctor/${id}/review`,
        method: 'DELETE',
      }),
      invalidatesTags: ['deleteComment'],
    }),
  }),
});

export const { useAddNewCommentMutation, useGetCommentQuery, useUpdateCommentMutation, useDeleteCommentMutation} = clientReviewAPI
