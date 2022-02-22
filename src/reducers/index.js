import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 2500701,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    decrement1: (state) => {
      
      state.value -= 10000
    },
    decrement2: (state) => {
      state.value -= 5000
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { decrement1, decrement2, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer