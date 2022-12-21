<<<<<<< HEAD
import { cartCounterReducer } from '../components/header/headerCartSlice';
import { configureStore } from '@reduxjs/toolkit';
import { headerAsideReducer } from '../components/header/headerAsideSlice';
=======
import { ProductCardReducer } from '../components/productCard/productCardSlice';
import { configureStore } from '@reduxjs/toolkit';

>>>>>>> cf853c78b88495e5da5b2c5208524ad66b7c13a1
import { testPageReducer } from '../pages/TestPage/testPageSlice';

export const store = configureStore({
    reducer: {
        testPage: testPageReducer,
<<<<<<< HEAD
        asideOpener: headerAsideReducer,
        cartCounter: cartCounterReducer,
    }, //add reducers here
=======
        productCard: ProductCardReducer,
    },
>>>>>>> cf853c78b88495e5da5b2c5208524ad66b7c13a1
});

export type RootState = ReturnType<typeof store.getState>;
