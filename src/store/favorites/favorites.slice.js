import { createSlice } from "@reduxjs/toolkit";

const initialState = [];


export const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleTofavorites: (state, {payload: movie}) => {
            const isExist = state.some(m => m.id === movie.id);
            if(isExist){
                const index = state.findIndex(item => item.id === movie.id);
                if(index !== -1){
                    state.splice(index, 1);
                }
            }else{
                state.push(movie)
            }
        },
        initialTofavorites: (state, {payload: favArr}) => {
            for(let film of favArr){
                const isExist = state.some(m => m.id === film.id);
                if(isExist){
                    const index = state.findIndex(item => item.id === film.id);
                    if(index !== -1){
                        state.splice(index, 1);
                    }
                }else{
                    state.push(film)
            }
            }
        }
    }
})

export const {actions, reducer} = favoriteSlice