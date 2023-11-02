import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { prepareHeadersApi } from '../lib/prepareHeaders';
import { INotification, IToUserNotification } from "../../types/admin/adminNotificationDTO";
import { BASE_URL } from "../lib/baseUrl";

export const adminNotificationApi = createApi({
    reducerPath: 'adminNotificationApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers, { getState }) =>
            prepareHeadersApi(headers, { getState }),
    }),    
    tagTypes: ['getNotification', 'getAllNotifications', 'createNotification', 'addToUserNotification', 'updateNotification', 'deleteNotification'],
    endpoints: (builder) => ({
        getNotification: builder.query<INotification, { id: number }>({
            query: (id) => ({
                url: `admin/notification/${id}`,
            }),
            providesTags: ['getNotification'],
        }),
        getAllNotifications: builder.query<INotification[], void>({
            query: () => ({
                url: `admin/notification`,
            }),
            providesTags: ['getAllNotifications'],
        }),
        createNotification: builder.mutation<INotification, { data: INotification }>({
            query: (data) => ({
                url: `admin/notification`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['createNotification'],
        }),
        addToUserNotification: builder.mutation<IToUserNotification, { id: number }>({
            query: (id) => ({
                url: `admin/notification/api/admin/notification/${id}/addToUser`,
                method: 'POST',
                body: [0],
            }),
            invalidatesTags: ['addToUserNotification'],
        }),
        updateNotification: builder.mutation<INotification, { data: INotification, id: number }>({
            query: ({ data, id }) => ({
                url: `admin/notification/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['updateNotification'],
        }),
        deleteNotification: builder.mutation<void, {id: number}>({
            query: (id) => ({
                url: `admin/notification/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['deleteNotification'],
        }),
    }),
});


export const {
    useGetNotificationQuery,
    useGetAllNotificationsQuery,
    useCreateNotificationMutation,
    useAddToUserNotificationMutation,
    useUpdateNotificationMutation,
    useDeleteNotificationMutation,
} = adminNotificationApi;  
