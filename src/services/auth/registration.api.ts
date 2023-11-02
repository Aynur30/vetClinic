import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUserInfo, IUserRegistration, IRegistrationResponse } from '../../types/auth/registrationDTO';
import { prepareHeadersApi } from '../lib/prepareHeaders';

const API_BASE_URL = "http://91.241.64.154:8080/api/";

export const registrationApi = createApi({
  reducerPath: 'registrationApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers, { getState }) => prepareHeadersApi(headers, { getState })
     }),
  tagTypes: ["registr"],  
  endpoints: (builder) => ({
    confirmRegistration: builder.query<IUserInfo, string>({
      query: (token) => `registration/confirm/${token}`,
      providesTags: ["registr"],
    }),
    register: builder.mutation<IRegistrationResponse, IUserRegistration>({
      query: (data) => ({
        url: 'registration',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ["registr"],
    }),
  }),
});

export const {useConfirmRegistrationQuery, useRegisterMutation} = registrationApi




