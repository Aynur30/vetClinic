import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { adminDoctorNonWorkingDTO } from "../../types/admin/adminDoctorNonWorkingDTO";
import { prepareHeadersApi } from "../lib/prepareHeaders";
import { BASE_URL } from "../lib/baseUrl";

export const adminDoctorNonWorkingAPI = createApi({
    reducerPath: 'adminDoctorNonWorkingAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/admin`,
        prepareHeaders: (headers, { getState }) => prepareHeadersApi(headers, { getState })
    }),
    tagTypes: ['CreateNonWorking'],
    endpoints: (build) => ({
        createNonWorking: build.mutation<adminDoctorNonWorkingDTO, unknown>({
            query: ({ content }) => ({
                url: 'doctor_non_working/',
                method: 'POST',
                body: content
            }),
            invalidatesTags: ['CreateNonWorking'],
        }),
        updateNonWorking: build.mutation<adminDoctorNonWorkingDTO, unknown>({
            query: ({ id, content }) => ({
                url: `doctor_non_working/${id}`,
                method: 'PUT',
                body: content
            }),
            invalidatesTags: ['CreateNonWorking'], 
        }),
        deleteNonWorking: build.mutation<adminDoctorNonWorkingDTO, unknown>({
            query: ({ id }) => ({
                url: `doctor_non_working/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['CreateNonWorking',]
        })
    })
});

export const {
    useCreateNonWorkingMutation,
    useUpdateNonWorkingMutation,
    useDeleteNonWorkingMutation
} = adminDoctorNonWorkingAPI;