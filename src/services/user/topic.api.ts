import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {prepareHeadersApi} from "../lib/prepareHeaders";
import {
  ITopic,
  INewTopic,
  ITopicComment,
  ICommentList,
  IUpdateTopic,
} from "../../types/user/topicDTO";

const API_BASE_URL = "http://91.241.64.154:8080/api/";

export const topicApi = createApi({
  reducerPath: "topicApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers, {getState}) =>
      prepareHeadersApi(headers, {getState}),
  }),
  tagTypes: ["topic"],
  endpoints: (builder) => ({
    deleteTopic: builder.mutation<unknown, number>({
      query: (id) => ({
        url: `user/topic/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["topic"],
    }),
    getTopic: builder.query<ITopic, number>({
      query: (id) => `user/topic/${id}`,
      providesTags: ["topic"],
    }),
    getClientTopics: builder.query<ITopic[], void>({
      query: () => "user/topic/yourTopics",
      providesTags: ["topic"],
    }),
    getAllTopics: builder.query<ITopic[], void>({
      query: () => "user/topic/allTopics",
      providesTags: ["topic"],
    }),
    createTopic: builder.mutation<ITopic, INewTopic>({
      query: (data) => ({
        url: "user/topic",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["topic"],
    }),
    addCommentToTopic: builder.mutation<ICommentList, ITopicComment>({
      query: ({id, content}) => ({
        url: `user/topic/${id}/addComment`,
        method: "POST",
        body: content,
      }),
      invalidatesTags: ["topic"],
    }),
    updateTopic: builder.mutation<ITopic, IUpdateTopic>({
      query: ({id, data}) => ({
        url: `user/topic/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["topic"],
    }),
  }),
});

export const {
  useDeleteTopicMutation,
  useGetTopicQuery,
  useGetClientTopicsQuery,
  useGetAllTopicsQuery,
  useCreateTopicMutation,
  useAddCommentToTopicMutation,
  useUpdateTopicMutation,
} = topicApi;
