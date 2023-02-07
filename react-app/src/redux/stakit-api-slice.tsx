import { createApi } from '@reduxjs/toolkit/query/react'
import fetchDefaultBaseQuery from './BaseQuerySettings'

export const stakitApiSlice = createApi({
    reducerPath: 'stakit_api',
    tagTypes: [
        'services', 'service',
        'groups', 'group', "group-services",
        'users', 'user',
        "announcements", "announcement",
        "statusOfGroups", "subscription", "confirmSubscription",
        
    ],
    refetchOnMountOrArgChange: true,
    baseQuery: fetchDefaultBaseQuery(),
    endpoints: () => ({}),
})


