import { createSlice } from '@reduxjs/toolkit';

interface AsideOpenerState {
    isDrawerOpen: boolean;
    isSearchOpen: boolean;
}

const initialState: AsideOpenerState = {
    isDrawerOpen: false,
    isSearchOpen: false,
};

export const headerAsideSlice = createSlice({
    name: 'asideOpener',
    initialState: initialState,
    reducers: {
        openHamburger: (state) => {
            state.isDrawerOpen = true;
            document.body.style.overflow = 'hidden';
        },
        closeHamburger: (state) => {
            state.isDrawerOpen = false;
            document.body.style.overflow = 'auto';
        },
        openSearch: (state) => {
            state.isSearchOpen = true;
            document.body.style.overflow = 'hidden';
        },
        closeSearch: (state) => {
            state.isSearchOpen = false;
            document.body.style.overflow = 'auto';
        },
    },
});

export const { openHamburger, closeHamburger, openSearch, closeSearch } = headerAsideSlice.actions;

export const headerAsideReducer = headerAsideSlice.reducer;
