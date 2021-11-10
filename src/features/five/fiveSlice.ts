// 目的： five work 获取

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchWork } from './fiveAPI'
import { Work } from '@realsee/five'

export interface FiveWork {
    value: Work | null,
    status: 'loading' | 'success'
}

const initialState: FiveWork = {
    value: null,
    status: 'loading'
}

export const fetchWorkAsync = createAsyncThunk(
    'five/fetchWork',
    async(url: string) => {
        const response = await fetchWork(url)
        return response.data
    }
)

export const fiveSlice = createSlice({
    name: 'five',
    initialState,
    reducers: {
    //    在这里定义普通的reducer
    },
    // 这里可定义需要中间件类处理的reducer
    extraReducers: (builder) => {
        builder
            .addCase(fetchWorkAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchWorkAsync.fulfilled, (state, action) => {
                state.status = 'success'
                state.value = action.payload
            })
    }
})

export const selectWork = (state: RootState) => state.five.value;

export default fiveSlice.reducer
