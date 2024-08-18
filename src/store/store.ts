import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./darkModeSlice";

const store = configureStore({
    reducer:{
        isDark: darkModeSlice.reducer
    }
});
export default store;