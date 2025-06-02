import {createSlice } from "@reduxjs/toolkit";


const initialState = {
    courseData : []
}

const courseSlice = createSlice({
    name : 'courses',
    initialState,
    reducers : {},
})

export default courseSlice.reducer;