import { createSlice } from "@reduxjs/toolkit";

const initialState = 'home';

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setPage: (state, {payload: page}) => {
            return page;
        },
    }
})

export const {actions, reducer} = menuSlice