import { ProductCardReducer } from '../components/productCard/productCardSlice';
import { configureStore } from '@reduxjs/toolkit';
import { headerAsideReducer } from '../components/header/headerAsideSlice';
import { testPageReducer } from '../pages/TestPage/testPageSlice';
import { userReducer } from '../pages/MyAccount/UserSlice';
import cartSlice from '../components/header/headerCartSlice';
import wishlistSlice from '../pages/wishlist/wishlistSlice';
import { orderTrackingReducer } from '../pages/OrderTracking/orderTrackingSlice';

export const store = configureStore({
    reducer: {
        testPage: testPageReducer,
        productCard: ProductCardReducer,
        asideOpener: headerAsideReducer,
        cartCounter: cartSlice,
        wishlistHandler: wishlistSlice,
        user: userReducer, 
        orderTrackingError: orderTrackingReducer,
    }, //add reducers here
});

export type RootState = ReturnType<typeof store.getState>;
