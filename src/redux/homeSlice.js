import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({

    name:'url',

    initialState : {
        url :{},
        genres : {},
    },

    reducers:{
        getBaseUrl : (state,action) => {
            state.url = action.payload;
        },
        getGenres : ( state,action) => {
            state.genres = action.payload;
        }
    }
})

export const{ getBaseUrl } = homeSlice.actions;
export default homeSlice.reducer;