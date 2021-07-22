import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: state => {
      state.count += 1;
    },
    decrement: state => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export interface User {
  nums: number;
}

const test = createSlice({
  name: 'num',
  initialState: {
    nums: 10,
  },
  reducers: {
    testcode: (state, action: PayloadAction<number>) => {
      state.nums += action.payload;
    },
  },
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export const {testcode} = test.actions;

export const h1 = test.reducer;
