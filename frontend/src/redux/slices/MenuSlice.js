import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  arr: [],
}

export const MenuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {

    Addmenu: (state, action) => {
      state.arr = action.payload
    },
    Deletemenu: (state, action) => {
      state.arr = state.arr.filter(elem=>elem._id != action.payload._id)
    },
    Searchmenu: (state, action) => {
      state.arr = state.arr.filter(elem=>elem.title.toUpperCase().includes(action.payload.toUpperCase()))
    },
  },
})

export const { Addmenu, Deletemenu, Searchmenu } = MenuSlice.actions

export default MenuSlice.reducer