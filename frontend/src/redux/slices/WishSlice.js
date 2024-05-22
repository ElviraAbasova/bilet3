import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  arr: JSON.parse(localStorage.getItem("wishlist")) || [],
}

export const WishSlice = createSlice({
  name: 'wish',
  initialState,
  reducers: {

    Addwish: (state, action) => {
        let find = state.arr.find(elem=>elem._id == action.payload._id)
        if(!find){
      state.arr= [...state.arr, action.payload]


        }
        else{
            state.arr = state.arr.filter(elem=> elem._id != action.payload._id)
        }
        localStorage.setItem("wishlist", JSON.stringify(state.arr))
    },
  },
})

export const { Addwish } = WishSlice.actions

export default WishSlice.reducer