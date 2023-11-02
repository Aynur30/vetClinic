import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IUser, IUserResponce } from "../../types/auth/authenticationDTO";
import { prepareHeadersApi } from "../lib/prepareHeaders";

export const authAPI = createApi({
  reducerPath: "authAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://91.241.64.154:8080/api/auth",
    prepareHeaders: (headers, { getState }) => prepareHeadersApi(headers, { getState })
  }),
  tagTypes: ["Auth"],
  endpoints: (build) => ({
    auth: build.mutation<IUserResponce, IUser>({
      query: (credentials) => ({
        url: "",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Auth"],
      transformResponse: (data: IUserResponce) => {
        const jwtToken = data?.jwtToken || '';
        const saveToken = localStorage.getItem("saveToken");
        if (saveToken) {
          localStorage.setItem("jwtToken", jwtToken);
        } else {
          sessionStorage.setItem("jwtToken", jwtToken);
        }
        return data
      },
    }),
    logout: build.mutation<unknown, unknown>({
      query: () => ({
        url: "/logout",
        method: "POST",
        body: "",
      }),
      invalidatesTags: ["Auth"],
    }),
    token: build.mutation<boolean, string>({
      query: (token) => ({
        url: "/token",
        method: "POST",
        body: token,
      }),
      invalidatesTags: ["Auth"],
    }),
    getCurrent: build.query<IUserResponce, unknown>({
      query: () => ( {
        url: "/getCurrent",
        method: "GET",
      }),
      providesTags: () => ['Auth'],
    }),
  }),
});

export const {
  useAuthMutation,
  useLogoutMutation,
  useTokenMutation,
  useGetCurrentQuery,
} = authAPI;
