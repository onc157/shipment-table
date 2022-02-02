// import {instance} from "./tools";
import {createApi} from "@reduxjs/toolkit/query/react";
import {httpRequest, RTKResponse} from "./httpRequest";
import {IOrders} from "../type/Types";

// export const ordersAPI = {
//     getAllOrders: async () => {
//         const res = await instance.get('orders');
//         return res.data;
//     },
//
//     updateOrder: async (payload: any) => {
//         console.log({payload})
//         const {id, ...data} = payload
//         const res = await instance.put(`orders/${id}`, data);
//         return res.data;
//     }
// }

export const OrdersService = createApi({
    reducerPath: 'ordersApi',
    baseQuery: httpRequest,
    endpoints: (build) => ({
        getAllOrders: build.query<IOrders, void>({
            query: () => ({url: '/orders'}),
            transformResponse: (response: RTKResponse<any>) => response.payload
        })
    })
})

export const {useGetAllOrdersQuery} = OrdersService;