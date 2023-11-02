import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IUserNotification } from "../../types/user/userNotificationControllerDTO";
import { prepareHeadersApi } from "../lib/prepareHeaders";

export const userAPI = createApi({
    reducerPath: "userAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://91.241.64.154:8080/api/user",
        prepareHeaders: (headers, { getState }) => prepareHeadersApi(headers, { getState })
    }),
    tagTypes: ["UserNotifications"],
    endpoints: (build) => ({
        getAllUserNotifications: build.query<IUserNotification[], unknown>({
            query: () => '/notification',
            providesTags: ["UserNotifications"],
        }),
        getUserNotification: build.query<IUserNotification, string>({
            query: (id) => `/notification/${id}`,
            providesTags: ["UserNotifications"],
        }),
        upDateUserNotifications: build.mutation<string, string>({
            query: (id) => ({
                url: `/notification/${id}`,
                method: "PUT",
                body: id
            }),
            invalidatesTags: ["UserNotifications"]
        })
    })
});

export const { useGetAllUserNotificationsQuery, useGetUserNotificationQuery, useUpDateUserNotificationsMutation } = userAPI;