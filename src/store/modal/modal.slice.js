import { createSlice } from "@reduxjs/toolkit";

const initialState = {isOpen: false, data: {name: 'rrr'}};

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setIsModalOpen: (state, {payload: value}) => {
            return {isOpen: value.isOpen, data: value.data};
        },
    }
})

export const {actions, reducer} = modalSlice