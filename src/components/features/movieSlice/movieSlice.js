import { createSlice } from '@reduxjs/toolkit'


export const moviesSlice = createSlice({
  name: 'movies',
  initialState:{
links:{},
categories:{},
  },
  reducers: {
getUrl:(state, action) =>{
    state.links=action.payload;

},
getCategories:(state, action) =>{
    state.categories=action.payload;

}
  },
})

// Action creators are generated for each case reducer function
export const { getUrl, getCategories } = moviesSlice.actions

export default moviesSlice.reducer