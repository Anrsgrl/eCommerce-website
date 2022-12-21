import { cartCounterReducer } from '../components/header/headerCartSlice';
import { configureStore } from '@reduxjs/toolkit';
import { headerAsideReducer } from '../components/header/headerAsideSlice';
import { testPageReducer } from '../pages/TestPage/testPageSlice';

export const store = configureStore({
    reducer: {
        testPage: testPageReducer,
        asideOpener: headerAsideReducer,
        cartCounter: cartCounterReducer,
    }, //add reducers here
});

export type RootState = ReturnType<typeof store.getState>;
