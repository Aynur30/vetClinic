import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { prepareHeadersApi } from '../lib/prepareHeaders';
import { ISchedule, ISchedulePostRequest, ISchedulePutRequest } from "../../types/admin/adminDoctorScheduleDTO";
import { BASE_URL } from "../lib/baseUrl";

export const adminDoctorScheduleApi = createApi({
    reducerPath: 'adminDoctorScheduleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers, { getState }) =>
            prepareHeadersApi(headers, { getState }),
    }),    
    tagTypes: ['createSchedule', 'updateSchedule', 'deleteSchedule'],
    endpoints: (builder) => ({
        createSchedule: builder.mutation<ISchedule, { data: ISchedulePostRequest }>({
            query: (data) => ({
                url: `admin/schedule`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['createSchedule'],
        }),
        updateSchedule: builder.mutation<ISchedule, { data: ISchedulePutRequest, id: number }>({
            query: ({ data, id }) => ({
                url: `admin/schedule/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['updateSchedule'],
        }),
        deleteSchedule: builder.mutation<void, {id: number}>({
            query: (id) => ({
                url: `admin/schedule/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['deleteSchedule'],
        }),
    }),
});


export const {
    useCreateScheduleMutation,
    useUpdateScheduleMutation,
    useDeleteScheduleMutation,
} = adminDoctorScheduleApi;  
