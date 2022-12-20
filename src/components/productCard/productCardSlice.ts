import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductResponse } from '../../models/ProductResponse';


interface productCardState {
  products: ProductResponse[];
}

const initialState: productCardState = {
  products: [],
};

interface LoadProductsPayload {
  products: ProductResponse[];
}

export const ProductCardSlice = createSlice({
  name: 'productCard',
  initialState: initialState,
  reducers: {
    loadProducts: (state, action: PayloadAction<LoadProductsPayload>) => {
      state.products = action.payload.products;
    },
  },
});

export const { loadProducts } =ProductCardSlice.actions;

export const ProductCardReducer = ProductCardSlice.reducer;