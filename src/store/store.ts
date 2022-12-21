import { configureStore } from '@reduxjs/toolkit';
import { headerAsideReducer } from '../components/header/headerAsideSlice';
import { testPageReducer } from '../pages/TestPage/testPageSlice';

export const store = configureStore({
    reducer: {
        testPage: testPageReducer,
        asideOpener: headerAsideReducer,
    }, //add reducers here
});

export type RootState = ReturnType<typeof store.getState>;
