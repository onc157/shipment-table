import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {OrdersInterface} from "../../type/Types";
import {RootState} from "../../app/store";
import {ordersAPI} from "../../api/ordersAPI";

export const getAllOrders = createAsyncThunk(
    'orders/getAllOrders',
    async function() {
        return ordersAPI.getAllOrders()
    }
)

export const updateOrder = createAsyncThunk(
    'orders/updateOrder',
    async function (payload: any) {
        return ordersAPI.updateOrder(payload)
    }
)

export interface OrdersState {
    orders: OrdersInterface,
    status: string | null,
    error: string | null,
}

const initialState: OrdersState = {
    orders: [],
    status: null,
    error: null,
}

export const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllOrders.pending, (state) => {
                state.status = 'loading...';
            })
            .addCase(getAllOrders.fulfilled, (state, action) => {
                state.status = 'resolved';
                state.orders = action.payload.payload;
            })
    },
})

// export const { increment } = orderSlice.actions;
export const ordersSelector = (state: RootState) => state.order.orders

export default orderSlice.reducer;