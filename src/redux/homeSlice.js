import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({

    name:'url',

    initialState : {
        url :{},
    },

    reducers:{
        getBaseUrl : (state,action) => {
            state.url = action.payload;
        }
    }
})

export const{ getBaseUrl } = homeSlice.actions;
export default homeSlice.reducer;