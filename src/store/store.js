import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as favoritesReducer } from './favorites/favorites.slice'
import { reducer as userReducer } from './user/user.slice'
import {reducer as menuReducer} from './menu/menu.slice'

const reducers = combineReducers({
    favorites: favoritesReducer,
    user: userReducer,
    menu: menuReducer,
})

export const store = configureStore({
  reducer: reducers,
})