import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAppointmentData, IAppointmentResponse } from '../../types/client/clientAppointmentCalendarDTO';
import { prepareHeadersApi } from '../lib/prepareHeaders';

const API_BASE_URL = "http://91.241.64.154:8080/api/";

export const clientAppointmentCalendarApi = createApi({
  reducerPath: 'clientAppointmentCalendarApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers, { getState }) => prepareHeadersApi(headers, { getState })
  }),
  tagTypes: ["clientAppointmentCalendar"],
  endpoints: (builder) => ({
    getAppointmentCalendar: builder.query<IAppointmentResponse, IAppointmentData>({
      query: ({ doctorId, date }) => `client/appointment?doctorId=${doctorId}&date=${date}`,
      providesTags: ["clientAppointmentCalendar"],
    }),
  }),
});

export const { useGetAppointmentCalendarQuery } = clientAppointmentCalendarApi;