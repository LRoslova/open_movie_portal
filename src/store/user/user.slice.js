import { createSlice } from "@reduxjs/toolkit";

const initialState = '';

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, {payload: userEmail}) => {
            return userEmail;
        },
    }
})

export const {actions, reducer} = userSlice