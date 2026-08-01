import { createSlice } from '@reduxjs/toolkit';
import storeData from '../../data/storeData.json';

export const dataSlice = createSlice({
  name: 'data',
  initialState: storeData,
  reducers: {}
});

export default dataSlice.reducer;