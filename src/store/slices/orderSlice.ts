import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from "../../app/store";

interface OrderState {
    id: number | null,
    name: string | null
}

const initialState: OrderState = {
    id: null,
    name: null
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setId: (state) => {
            state.id = 5;
        },
        setName: (state) => {
            state.name = 'John';
        },
        incId: (state, action: PayloadAction<number>) => {
            if (state.id) {
                state.id += action.payload;
            }
        }
     }
})

export const { setId, setName, incId } = orderSlice.actions;

export const selectOrderName = (state: RootState) => state.order.name;

export default orderSlice.reducer;