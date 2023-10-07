import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Empty String since using Proxy
const baseQuery = fetchBaseQuery({ baseUrl: '' });

export const apiSlice = createApi ({
    baseQuery,
    tagTypes: [
        'User'
    ],
    endpoints: (builder) => ({})
})