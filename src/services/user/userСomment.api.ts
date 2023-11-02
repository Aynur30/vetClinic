import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IUserCommentResponse, IUserComment } from "../../types/user/userCommentDTO";
import { prepareHeadersApi } from "../lib/prepareHeaders";
export const userCommentAPI = createApi({
    reducerPath: 'userCommentAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://91.241.64.154:8080/api/user/",
        prepareHeaders: (headers, { getState }) => prepareHeadersApi(headers, { getState })
    }),
    tagTypes: ["Comment"],
    endpoints: (build) => ({
        updateComment: build.mutation<IUserCommentResponse, IUserComment>({
            query: ({ id, content }) => ({
                url: `comment/${id}`,
                method: 'PUT',
                body: content
            }),
            invalidatesTags: ["Comment"],

        }),
        rateComment: build.mutation<unknown, IUserComment>({
            query: ({ id, positive }) => ({
                url: `comment/${id}/${positive}`,
                method: 'PUT'
            }),
            invalidatesTags: ["Comment"],
        }),
        deleteComment: build.mutation<unknown, IUserComment>({
            query: (id) => ({
                url: `comment/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ["Comment"],
        })
    })
});

export const {
    useUpdateCommentMutation,
    useRateCommentMutation,
    useDeleteCommentMutation
} = userCommentAPI