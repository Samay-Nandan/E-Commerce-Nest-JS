import { createAsyncThunk } from '@reduxjs/toolkit';
import { HttpRequest, RequestMethod } from '@src/utils';
import {
  FETCH_ALL_PRODUCTS,
  FETCH_PRODUCT_BY_ID,
  UPDATE_PRODUCT_BY_ID,
  DELETE_PRODUCT_BY_ID,
} from '@store/types';
import { Endpoint } from '@src/constant';

export const FetchAllProduct = createAsyncThunk(FETCH_ALL_PRODUCTS, () => {
  return HttpRequest({ url: Endpoint.product, method: RequestMethod.GET });
});

export const FetchProductById = createAsyncThunk(
  FETCH_PRODUCT_BY_ID,
  (id: string) => {
    return HttpRequest({
      url: `${Endpoint.product}/${id}`,
      method: RequestMethod.GET,
    });
  }
);

export const UpdateProductById = createAsyncThunk(
  UPDATE_PRODUCT_BY_ID,
  ({ id, body }: { id: string; body: unknown }) => {
    return HttpRequest({
      url: `${Endpoint.product}/${id}`,
      method: RequestMethod.PATCH,
      body,
    });
  }
);

export const DeleteProductById = createAsyncThunk(
  DELETE_PRODUCT_BY_ID,
  (id: string) => {
    return HttpRequest({
      url: `${Endpoint.product}/${id}`,
      method: RequestMethod.DELETE,
    });
  }
);
