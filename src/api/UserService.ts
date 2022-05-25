import { createApi } from '@reduxjs/toolkit/query/react'
import { httpRequest, RTKResponse } from './httpRequest'
import { IUser } from '../type/Types'

const email = 'polihut@gmail.com'

export const UserService = createApi({
    reducerPath: 'userApi',
    baseQuery: httpRequest,
    tagTypes: ['User'],
    endpoints: (build) => ({
        getUser: build.query<IUser, void>({
            query: () => ({ url: `user/${email}` }),
            transformResponse: (response: RTKResponse<any>) =>
                response.payload[0],
            providesTags: ['User'],
        }),
    }),
})

export const { useGetUserQuery } = UserService
