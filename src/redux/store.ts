import { configureStore } from '@reduxjs/toolkit';
import goodsSlice from './goodsSlice';

export const store = configureStore({
  reducer: {
    goods: goodsSlice,
  },
});

export interface Good {
  title: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  brand?: string;
  discountPercentage?: number;
  images?: string[];
  rating: number;
  thumbnail?: string;
}

interface GoodsState {
  goods: Good[];
  loading: boolean;
  error: string;
  searchQuery: string;
};

export interface IntState {
  goods: GoodsState;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch