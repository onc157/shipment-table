import {instance} from "./tools";

export const ordersAPI = {
    getAllOrders: async () => {
        const res = await instance.get('orders');
        return res.data;
    },

    updateOrder: async (payload: any) => {
        const {id, ...data} = payload
        const res = await instance.put(`orders/${id}`, data);
        return res.data;
    }
}