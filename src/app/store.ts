import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { OrdersService } from '../api/OrdersService'
import { setupListeners } from '@reduxjs/toolkit/query'
import { UserService } from '../api/UserService'

export const store = configureStore({
    reducer: {
        [OrdersService.reducerPath]: OrdersService.reducer,
        [UserService.reducerPath]: UserService.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(OrdersService.middleware)
            .concat(UserService.middleware),
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
