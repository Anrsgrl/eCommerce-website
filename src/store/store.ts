<<<<<<< HEAD
=======
import { ProductCardReducer } from '../components/productCard/productCardSlice';
>>>>>>> 31a2a905c36e38cd377f0412a3130e8c06b33e22
import { cartCounterReducer } from '../components/header/headerCartSlice';
import { configureStore } from '@reduxjs/toolkit';
import { headerAsideReducer } from '../components/header/headerAsideSlice';
import { testPageReducer } from '../pages/TestPage/testPageSlice';

export const store = configureStore({
    reducer: {
        testPage: testPageReducer,
<<<<<<< HEAD
=======
        productCard: ProductCardReducer,
>>>>>>> 31a2a905c36e38cd377f0412a3130e8c06b33e22
        asideOpener: headerAsideReducer,
        cartCounter: cartCounterReducer,
    }, //add reducers here
});

export type RootState = ReturnType<typeof store.getState>;
