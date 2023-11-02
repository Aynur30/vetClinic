import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { prepareHeadersApi } from '../lib/prepareHeaders';
import { 
    IVaccinationResponse,
    IVaccinationPostRequest,
    IVaccinationPutRequest
} from "../../types/client/vaccinationDTO";

const API_BASE_URL = "http://91.241.64.154:8080/api/";

export const vaccinationApi = createApi({
    reducerPath: 'vaccinationApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
        prepareHeaders: (headers, { getState }) =>
            prepareHeadersApi(headers, { getState }),
    }),    
    tagTypes: ['getVaccination', 'getAllVaccinations', 'addVaccination', 'updateVaccination', 'deleteVaccination'],
    endpoints: (builder) => ({
        getVaccination: builder.query<IVaccinationResponse, { id: number }>({
            query: (id) => ({
                url: `client/procedure/vaccination/${id}`,
            }),
            providesTags: ['getVaccination'],
        }),
        getAllVaccinations: builder.query<IVaccinationResponse[], { petId: number }>({
            query: (petId) => ({
                url: `client/procedure/vaccination?petId=${petId}`,
            }),
            providesTags: ['getAllVaccinations'],
        }),
        addVaccination: builder.mutation<void, { data: IVaccinationPostRequest }>({
            query: (data) => ({
                url: `client/procedure/vaccination`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['addVaccination'],
        }),
        updateVaccination: builder.mutation<void, { data: IVaccinationPutRequest, id: number }>({
            query: ({ data, id }) => ({
                url: `client/procedure/vaccination/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['updateVaccination'],
        }),
        deleteVaccination: builder.mutation<void, {id: number}>({
            query: (id) => ({
                url: `client/procedure/vaccination/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['deleteVaccination'],
        }),
    }),
});


export const {
    useGetVaccinationQuery,
    useGetAllVaccinationsQuery,
    useAddVaccinationMutation,
    useUpdateVaccinationMutation,
    useDeleteVaccinationMutation,
} = vaccinationApi;  
