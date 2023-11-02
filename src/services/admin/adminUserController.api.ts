import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { prepareHeadersApi } from '../lib/prepareHeaders'
import { IUserController } from '../../types/admin/adminUserControllerDTO';
import { BASE_URL } from "../lib/baseUrl";

export const adminUserControllerApi = createApi({
  reducerPath: 'adminUserControllerApi',
  tagTypes: [
    'getUser',
    'getAllUsers',
    'addUser',
    'updateUser'
  ],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) =>
      prepareHeadersApi(headers, { getState }),
  }),    
  endpoints: (builder) => ({
    getUser: builder.query<IUserController[], { id: number }>({
      query: (id) => ({
        url: `admin/user/${id}`,
      }),
      providesTags: ['getUser'],
    }),
    getAllUsers: builder.query<IUserController[], {}>({
      query: () => ({
        url: `admin/user`,
      }),
      providesTags: ['getAllUsers'],
    }),
    addUser: builder.mutation<IUserController[], { data: IUserController }>({
      query: (data) => ({
        url: `admin/user`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['addUser'],
    }),
    updateUser: builder.mutation<IUserController[], { data: IUserController, id: number }>({
      query: ({ data, id}) => ({
        url: `admin/user/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['updateUser'],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetAllUsersQuery,
  useAddUserMutation,
  useUpdateUserMutation
} = adminUserControllerApi;
