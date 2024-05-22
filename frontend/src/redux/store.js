import { configureStore } from '@reduxjs/toolkit'
import MenuReducer from './slices/MenuSlice'
import WishReducer from './slices/WishSlice'

export const store = configureStore({
  reducer: {
    menu: MenuReducer,
    wish: WishReducer
  },
})