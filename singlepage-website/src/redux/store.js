import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/productReducer';
import loadingReducer from './slices/loadingSlice';
import cartReducer from './slices/cartSlice';
import { thunk } from 'redux-thunk';
import { applyMiddleware } from 'redux';

const store = configureStore({
  reducer: {
    product: productReducer,
    loading: loadingReducer,
    cart: cartReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export default store;
