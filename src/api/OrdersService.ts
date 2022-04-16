import { createApi } from '@reduxjs/toolkit/query/react'
import { httpRequest, RTKResponse } from './httpRequest'
import { IOrder, IOrders } from '../type/Types'

export const OrdersService = createApi({
    reducerPath: 'ordersApi',
    baseQuery: httpRequest,
    tagTypes: ['Orders'],
    endpoints: (build) => ({
        getAllOrders: build.query<IOrders, void>({
            query: () => ({ url: 'orders' }),
            transformResponse: (response: RTKResponse<any>) => response.payload,
            providesTags: ['Orders'],
        }),
        createOrder: build.mutation<IOrder, Partial<IOrder>>({
            query: ({ ...data }) => ({
                url: `orders/`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Orders'],
        }),
        updateOrder: build.mutation<IOrder, Partial<IOrder>>({
            query: ({ id, ...data }) => ({
                url: `orders/${id}`,
                method: 'PUT',
                body: data,
            }),
        }),
    }),
})

export const {
    useGetAllOrdersQuery,
    useCreateOrderMutation,
    useUpdateOrderMutation,
} = OrdersService
