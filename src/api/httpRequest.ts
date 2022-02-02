import {fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export type RTKResponse<T extends any> = {
    payload: T
}

export const httpRequest = fetchBaseQuery({baseUrl: 'http://localhost:4000/'})