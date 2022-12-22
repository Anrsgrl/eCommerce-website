import { ProductCardReducer } from '../components/productCard/productCardSlice';
import { configureStore } from '@reduxjs/toolkit';
import { headerAsideReducer } from '../components/header/headerAsideSlice';
import { testPageReducer } from '../pages/TestPage/testPageSlice';
import cartSlice from '../components/header/headerCartSlice';

export const store = configureStore({
    reducer: {
        testPage: testPageReducer,
        productCard: ProductCardReducer,
        asideOpener: headerAsideReducer,
        cartCounter: cartSlice,
    }, //add reducers here
});

export type RootState = ReturnType<typeof store.getState>;
