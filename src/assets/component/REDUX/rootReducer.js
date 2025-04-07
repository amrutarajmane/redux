import { combineReducers } from "@reduxjs/toolkit";
import CounterSlice, { counterFeatureKey } from "./CounterSlice"; // Import CounterSlice and key
import  taskSlice, { taskFeatureKey } from "../SAGA/TaskSlice";

const rootReducer = combineReducers({
   
    [counterFeatureKey]: CounterSlice.reducer, // Ensure counterFeatureKey is correctly defined
    [taskFeatureKey]:taskSlice.reducer
});

export default rootReducer;
