import { ProductCardReducer } from '../components/productCard/productCardSlice';
import { cartCounterReducer } from '../components/header/headerCartSlice';
import { configureStore } from '@reduxjs/toolkit';
import { headerAsideReducer } from '../components/header/headerAsideSlice';
import { testPageReducer } from '../pages/TestPage/testPageSlice';
import { userReducer } from '../pages/MyAccount/UserSlice';

export const store = configureStore({
    reducer: {
        testPage: testPageReducer,
        productCard: ProductCardReducer,
        asideOpener: headerAsideReducer,
        cartCounter: cartCounterReducer,
        user: userReducer, 
    }, //add reducers here
});

export type RootState = ReturnType<typeof store.getState>;
