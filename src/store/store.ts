import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice, { DarkModeType } from "./darkModeSlice";

export type StoreType = {
    darkMode: DarkModeType;
}

const store = configureStore({
    reducer: {
        darkMode: darkModeSlice.reducer
    }
});
export default store;