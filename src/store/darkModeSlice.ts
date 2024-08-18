import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
    name: "darkModeSlice",
    initialState: false,
    reducers: {
        setDarkMode: (state, action) => action.payload,
        toggleDarkMode: (state) => !state
    }
});

export interface darkModeType {
    darkMode: boolean;
}

export default darkModeSlice;
export const {setDarkMode} = darkModeSlice.actions;
export const {toggleDarkMode} = darkModeSlice.actions;