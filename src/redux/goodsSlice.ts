import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Good } from './store';

export const goodsSlice: any = createSlice({
  name: 'goods',
  initialState: {
    goods: [] as any,
    loading: false,
    error: '',
    searchQuery: '',
  },
  reducers: {
    getGoods: (state, action: PayloadAction<Good[]>) => {
      state.goods = action.payload;
    },
    addGood: (state, action: PayloadAction<Good>) => {
      state.goods.push(action.payload);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    }
  },
});

export const { addGood, getGoods, setLoading, setError, setFilteredGoods, setSearchQuery } 
= goodsSlice.actions;

export default goodsSlice.reducer;
