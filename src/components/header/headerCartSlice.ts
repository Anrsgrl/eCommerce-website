import { createSlice } from '@reduxjs/toolkit';

interface CartCounterState {
    cartCount: number;
}

const initialState: CartCounterState = {
    cartCount: 0,
};

export const CartCounterSlice = createSlice({
    name: 'CartCounterSlice',
    initialState: initialState,
    reducers: {
        increase: (state) => {
            state.cartCount += 1;
        },
        decrease: (state) => {
            state.cartCount -= 1;
        },
    },
});

export const { increase, decrease } = CartCounterSlice.actions;

export const cartCounterReducer = CartCounterSlice.reducer;
