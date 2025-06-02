import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./Slices/AuthSlice";
import productSliceReducer from "./Slices/ProductSlice";
const store = configureStore({
    reducer : {
        auth : authSliceReducer,
        product : productSliceReducer
    },
    devTools: true,
})

export default store;