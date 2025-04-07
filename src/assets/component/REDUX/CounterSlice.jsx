import { createSlice } from "@reduxjs/toolkit";

export const counterFeatureKey = "counter"; // Feature key for state
const initialState = { count: 0 };

const CounterSlice = createSlice({
    name: counterFeatureKey, // Corrected name reference
    initialState,
    reducers: {
        incrementCountAction: (state) => {
            state.count += 1;
        },
        decrementCountAction: (state) => {
            state.count = state.count>1?state.count-1:1;
        },
        resetCountAction: (state) => {
            state.count = 0;
        }
    }
});

// Export actions & reducer
export const { incrementCountAction, decrementCountAction, resetCountAction } = CounterSlice.actions;
export default CounterSlice;
