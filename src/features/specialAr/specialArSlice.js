import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    specialLists: [],
    
  }

  export const specialArSlice = createSlice({
    name: 'specialLists',
    initialState,
    // extraReducers: (builder) => {
    // }
  })


  export default specialArSlice.reducer