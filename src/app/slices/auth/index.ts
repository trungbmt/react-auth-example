import { createSlice } from "@reduxjs/toolkit";

export type AuthUser = {
  email: string;
  token: string;
};
export interface AuthUserState {
  isAuth: boolean;
  token: string;
  user: AuthUser;
  isLoading: boolean;
}
const initialState: AuthUserState = {
  isAuth: false,
  token: "",
  user: null,
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAction: (_state, _action) => {
      _state.isAuth = true;
      const payload = _action?.payload;
      _state.token = payload?.token;

      _state.user = payload?.user;
      _state.isLoading = false;
    },
    logoutAction: (_state) => {
      _state.isAuth = false;
      _state.token = "";
      _state.user = null;
    },
    updateTokenAction: (_state, _action) => {
      _state.token = _action.payload.result?.access_token;
      _state.isAuth = true;
    },
    updateUserAction: (_state, _action) => {
      _state.user = _action.payload.result?.user;
    },
  },
});

export const {
  loginAction,
  logoutAction,
  updateTokenAction,
  updateUserAction,
} = authSlice.actions;

export default authSlice.reducer;
