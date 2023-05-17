import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    news : [],
    isLoading: false,
    error: false,
}

export const InfoSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        getNews(state, action) {
            state.news = action.payload
            state.isLoading = false 
            state.error = ''
        },
        dataLoading(state){
            state.isLoading = true
        },
    }
})

export default InfoSlice.reducer