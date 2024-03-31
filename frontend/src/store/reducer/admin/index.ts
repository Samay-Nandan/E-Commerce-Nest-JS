import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from '@store/action';
import { AdminDto, AdminState } from '@store/dto';
import { DefaultAdmin } from '@store/constant';
import { setAdminCookie } from '@src/utils';

const initialState: AdminState = {
  loading: true,
  admin: DefaultAdmin,
};

const Admin = createSlice({
  name: 'Admin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.admin =
        typeof payload !== 'string' ? (payload as AdminDto) : DefaultAdmin;
      setAdminCookie(state.admin);
    });
  },
});

export const AdminReducer = Admin.reducer;
