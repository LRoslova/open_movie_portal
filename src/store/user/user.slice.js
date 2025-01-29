import { createSlice } from "@reduxjs/toolkit";

const initialState = '';

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, {payload: userEmail}) => {
            return userEmail;
        },
        // exitUser:(state) => {
        //     return  '';
        // },
    }
})

export const {actions, reducer} = userSlice