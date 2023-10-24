import { configureStore } from "@reduxjs/toolkit";
import  homeSlice  from "./homeSlice";

const store = configureStore({

    reducer : {
        homeSlice
    }
})


export default store;