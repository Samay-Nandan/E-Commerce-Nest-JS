import { createSlice } from '@reduxjs/toolkit';
import { DefaultProduct } from '@store/constant';
import {
  FetchAllProduct,
  FetchProductById,
  UpdateProductById,
} from '@store/action';
import { ProductDto, ProductState } from '@store/dto';
import { removeAdminCookie } from '@src/utils';

const initialState: ProductState = {
  loading: true,
  products: [],
  product: DefaultProduct,
  error: '',
};

const Product = createSlice({
  name: 'Product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchAllProduct.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = typeof payload === 'string' ? payload : '';
        state.products =
          typeof payload !== 'string' ? (payload as ProductDto[]) : [];
      })
      .addCase(FetchProductById.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = typeof payload === 'string' ? payload : '';
        state.product =
          typeof payload !== 'string'
            ? (payload as ProductDto)
            : DefaultProduct;
      })
      .addCase(UpdateProductById.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = typeof payload === 'string' ? payload : '';
        typeof payload === 'string' && removeAdminCookie();
        state.product =
          typeof payload !== 'string'
            ? (payload as ProductDto)
            : DefaultProduct;
      });
  },
});

export const ProductReducer = Product.reducer;
