import { ICartProduct, IProduct } from '../../models/Product';
import { createSlice } from '@reduxjs/toolkit';
interface IinitialState {
    cartItems: IProduct[];
    currentCartItems: ICartProduct[];
    cartTotalQuantity: number;
    cartTotalAmount: number;
    cartQuantity: number;
}

const initialState: IinitialState = {
    cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems') as string)
        : [],
    currentCartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    cartQuantity: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const existingIndex = state.currentCartItems.findIndex((item) => item.id === action.payload.id);
            if (existingIndex >= 0) {
                state.currentCartItems[existingIndex] = {
                    ...state.currentCartItems[existingIndex],
                    cartQuantity: state.currentCartItems[existingIndex].cartQuantity + 1,
                    cartTotalAmount: (state.currentCartItems[existingIndex].cartTotalAmount +=
                        state.currentCartItems[existingIndex].price),
                };
            } else {
                let tempProductItem = { ...action.payload, cartQuantity: 1 };
                state.currentCartItems.push(tempProductItem);
            }
        },
    },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
export const cartsData = (state: { cartCounter: { currentCartItems: any } }) =>
    state.cartCounter.currentCartItems;
