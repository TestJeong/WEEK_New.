import {combineReducers} from '@reduxjs/toolkit';
import {h1} from './catagory';

const rootReducer = combineReducers({
  counter: h1,
});

export type ReducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
