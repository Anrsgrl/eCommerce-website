import { ICartProduct, IProduct } from '../../models/Product';
import { createSlice } from '@reduxjs/toolkit';
interface IinitialState {
    cartItems: IProduct[];
    currentWishlistItems: ICartProduct[];
    cartTotalQuantity: number;
    cartTotalAmount: number;
    cartQuantity: number;
    emptyShop: boolean;
}

const initialState: IinitialState = {
    cartItems: localStorage.getItem('wishlistItems')
        ? JSON.parse(localStorage.getItem('wishlistItems') as string)
        : [],
    currentWishlistItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    cartQuantity: 0,
    emptyShop: true,
};

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist(state, action) {
            const existingIndex = state.currentWishlistItems.findIndex(
                (wishlistItem) => wishlistItem.id === action.payload.id,
            );
            if (existingIndex >= 0) {
                state.currentWishlistItems[existingIndex] = {
                    ...state.currentWishlistItems[existingIndex],
                    cartQuantity: state.currentWishlistItems[existingIndex].cartQuantity + 1,
                };
            } else {
                let tempProductItem = { ...action.payload, cartQuantity: 1 };
                state.currentWishlistItems.push(tempProductItem);
            }
        },
    },
});

export const { addToWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
export const wishlistData = (state: { wishlistHandler: { currentWishlistItems: any } }) =>
    state.wishlistHandler.currentWishlistItems;
