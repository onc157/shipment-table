import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getGToken } from '../utils/storage'

export type RTKResponse<T extends any> = {
    payload: T
}

export const httpRequest = fetchBaseQuery({
    baseUrl: 'https://onc157.ru',
    prepareHeaders: (headers) => {
        const token = getGToken()

        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }
        return headers
    },
})
