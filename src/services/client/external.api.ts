import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  IExternalRecord,
  IExternalReject,
} from "../../types/client/externalDTO";
import { prepareHeadersApi } from "../lib/prepareHeaders";

const API_BASE_URL = "http://91.241.64.154:8080/api/";

export const externalApi = createApi({
  reducerPath: "externalApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}client/procedure/external`,
    prepareHeaders: (headers, { getState }) =>
      prepareHeadersApi(headers, { getState }),
  }),
  tagTypes: ["record", "record-read", "record-add"],
  endpoints: (builder) => ({
    getRecord: builder.query<IExternalRecord, number>({
      query: (id) => `/${id}`,
      providesTags: ["record", "record-read"],
    }),
    removeRecord: builder.mutation<IExternalReject, number>({
      query: (id) => ({
        url: `${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["record", "record-read"],
    }),
    getAllRecords: builder.query<IExternalRecord[], number>({
      query: (petId) => `?petId=${petId}`,
      providesTags: ["record", "record-read"],
    }),
    setRecord: builder.mutation<
      IExternalRecord,
      { petId: number; record: IExternalRecord }
    >({
      query: ({ petId, record }) => ({
        url: `?petId=${petId}`,
        method: "POST",
        body: record,
      }),
      invalidatesTags: ["record", "record-read"],
    }),
    updateRecord: builder.mutation<
      IExternalRecord,
      { id: number; record: IExternalRecord }
    >({
      query: ({ id, record }) => ({
        url: `/${id}`,
        method: "PUT",
        body: record,
      }),
      invalidatesTags: ["record", "record-read"],
    }),
  }),
});

export const {
  useGetAllRecordsQuery,
  useGetRecordQuery,
  useRemoveRecordMutation,
  useSetRecordMutation,
  useUpdateRecordMutation,
} = externalApi;
