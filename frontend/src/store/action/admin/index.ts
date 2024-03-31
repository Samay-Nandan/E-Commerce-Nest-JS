import { createAsyncThunk } from '@reduxjs/toolkit';
import { HttpRequest, RequestMethod } from '@src/utils';
import { LOGIN_USER } from '@store/types';
import { Endpoint } from '@src/constant';

export const loginUser = createAsyncThunk(LOGIN_USER, (body: unknown) => {
  return HttpRequest({
    url: `${Endpoint.user}/login`,
    method: RequestMethod.POST,
    body,
  });
});
