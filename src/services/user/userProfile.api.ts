import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { UserRofile } from "../../types/user/userProfileDTO";
import { prepareHeadersApi } from "../lib/prepareHeaders";

export const userProfile = createApi({
    reducerPath: 'userProfile',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://91.241.64.154:8080/api/user/profile",
        prepareHeaders: (headers, { getState }) => prepareHeadersApi(headers, { getState })
    }),
    tagTypes: ["userProfile"],
    endpoints: (build) => ({
        getUserProfile: build.query<UserRofile, unknown>({
            query: () => '',
            providesTags: ["userProfile"],
        }),
        upDateUserProfile: build.mutation<UserRofile, unknown>({
            query: () => ({
                url: ``,
                method: "PUT",
            }),
        invalidatesTags: ["userProfile"]
        })
    })
});

export const { useGetUserProfileQuery, useUpDateUserProfileMutation } = userProfile;