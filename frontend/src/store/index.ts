import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { VITE_NODE_ENV } from '@src/constant';
import { ProductReducer, AdminReducer } from '@store/reducer';

const reducer = combineReducers({ ProductReducer, AdminReducer });

export const store = configureStore({
  reducer,
  devTools: VITE_NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
