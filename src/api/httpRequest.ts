import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getGToken } from '../utils/storage'

export type RTKResponse<T extends any> = {
    payload: T
}

export const httpRequest = fetchBaseQuery({
    baseUrl: 'http://localhost:4000/',
    prepareHeaders: (headers) => {
        const token = getGToken()

        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }
        return headers
    },
})
