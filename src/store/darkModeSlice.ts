import { createSlice } from "@reduxjs/toolkit";

export type DarkModeType = boolean;

const darkModeSlice = createSlice({
    name: "darkModeSlice",
    initialState: false,
    reducers: {
        setDarkMode: (state, action) => action.payload,
        toggleDarkMode: (state) => !state
    }
});

export default darkModeSlice;
export const {setDarkMode} = darkModeSlice.actions;
export const {toggleDarkMode} = darkModeSlice.actions;