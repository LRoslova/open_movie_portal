import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as favoritesReducer } from './favorites/favorites.slice'
import { reducer as userReducer } from './user/user.slice'
import {reducer as menuReducer} from './menu/menu.slice'
import { filmApi } from './api/api'

const reducers = combineReducers({
    favorites: favoritesReducer,
    user: userReducer,
    menu: menuReducer,
    [filmApi.reducerPath]: filmApi.reducer,
})

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filmApi.middleware),
})