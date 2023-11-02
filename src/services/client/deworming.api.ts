import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { prepareHeadersApi } from "../lib/prepareHeaders";
import {
  IdewormingProcedure,
  IdewormingReject,
} from "../../types/client/dewormingDTO";

const API_BASE_URL = "http://91.241.64.154:8080/api/";

export const dewormingApi = createApi({
  reducerPath: "dewormingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}client/procedure/deworming`,
    prepareHeaders: (headers, { getState }) =>
      prepareHeadersApi(headers, { getState }),
  }),
  tagTypes: ["procedure", "procedure-read", "procedure-add"],
  endpoints: (builder) => ({
    getProcedure: builder.query<IdewormingProcedure, number>({
      query: (id) => `/${id}`,
      providesTags: ["procedure", "procedure-read"],
    }),
    removeProcedure: builder.mutation<IdewormingReject, number>({
      query: (id) => ({
        url: `${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["procedure", "procedure-read"],
    }),
    getAllProcedures: builder.query<IdewormingProcedure[], number>({
      query: (petId) => `?petId=${petId}`,
      providesTags: ["procedure", "procedure-read"],
    }),
    setProcedure: builder.mutation<
      IdewormingProcedure,
      { petId: number; record: IdewormingProcedure }
    >({
      query: ({ petId, record }) => ({
        url: `?petId=${petId}`,
        method: "POST",
        body: record,
      }),
      invalidatesTags: ["procedure", "procedure-read"],
    }),
    updateProcedure: builder.mutation<
      IdewormingProcedure,
      { id: number; record: IdewormingProcedure }
    >({
      query: ({ id, record }) => ({
        url: `/${id}`,
        method: "PUT",
        body: record,
      }),
      invalidatesTags: ["procedure", "procedure-read"],
    }),
  }),
});

export const {
  useGetAllProceduresQuery,
  useGetProcedureQuery,
  useRemoveProcedureMutation,
  useSetProcedureMutation,
  useUpdateProcedureMutation,
} = dewormingApi;
