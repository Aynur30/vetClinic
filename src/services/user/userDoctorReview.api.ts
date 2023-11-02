import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { userDoctorReviewResponse } from "../../types/user/useDoctorReviewDTO";
import { prepareHeadersApi } from "../lib/prepareHeaders";

export const userDoctorReviewAPI = createApi({
    reducerPath: 'userDoctorReviewAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://91.241.64.154:8080/api/user/doctor",
        prepareHeaders: (headers, { getState }) => prepareHeadersApi(headers, { getState })
    }),
    tagTypes: ["DoctorReview"],
    endpoints: (build) => ({
        getReviews: build.query<userDoctorReviewResponse[], unknown>({
            query: (id) => `${id}/review`,
            providesTags: ["DoctorReview"],
        })
    })
});

export const { useGetReviewsQuery } = userDoctorReviewAPI



