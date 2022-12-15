import { configureStore } from '@reduxjs/toolkit';
import { testPageReducer } from '../pages/TestPage/testPageSlice';

export const store = configureStore({
    reducer: {
        testPage: testPageReducer,
    }, //add reducers here
});

export type RootState = ReturnType<typeof store.getState>;
