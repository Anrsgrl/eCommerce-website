import { createSlice } from '@reduxjs/toolkit';

interface IOrderTrackingState {
    errorMsg: boolean;
}

const initialState: IOrderTrackingState = {
    errorMsg: false,
};

export const orderTrackingSlice = createSlice({
    name: 'orderTracking',
    initialState: initialState,
    reducers: {
        checkErrors: (state) => {
            state.errorMsg = true;
        },
    },
});

export const { checkErrors } = 
orderTrackingSlice.actions;

export const orderTrackingReducer = orderTrackingSlice.reducer;
