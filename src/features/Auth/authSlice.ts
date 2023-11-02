import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

import { IUserResponce, UserRole } from "../../types/auth/authenticationDTO";
import { authAPI } from "../../services/auth/authentication.api";
const initialState: IUserResponce = {
  jwtToken: sessionStorage.getItem('jwtToken') || '',
  role: sessionStorage.getItem('role') || null
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setCredentials: (state: IUserResponce, { payload: { jwtToken, role } }: PayloadAction<{ jwtToken: string; role: UserRole | null }>
      ) => {
        state.jwtToken = jwtToken,
        state.role = role
      },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authAPI.endpoints.auth.matchFulfilled,
      (state, payload) => {
        const role = payload.payload.role;
        switch (role) {
          case "ADMIN":
            state.role = UserRole.ADMIN;
            sessionStorage.setItem('role', UserRole.ADMIN)
            break;
          case "MANAGER":
            state.role = UserRole.MANAGER;
            sessionStorage.setItem('role', UserRole.MANAGER)
            break;
          case "DOCTOR":
            state.role = UserRole.DOCTOR;
            sessionStorage.setItem('role', UserRole.DOCTOR)
            break;
          case "CLIENT":
            state.role = UserRole.CLIENT;
            sessionStorage.setItem('role', UserRole.CLIENT)
            break;
        }
        state.jwtToken = payload.payload.jwtToken;
      }
    );
    builder.addMatcher(
      authAPI.endpoints.getCurrent.matchFulfilled,
      (state, payload) => {
        const role = payload.payload.role;
        switch (role) {
          case "ADMIN":
            state.role = UserRole.ADMIN;
            break;
          case "MANAGER":
            state.role = UserRole.MANAGER;
            break;
          case "DOCTOR":
            state.role = UserRole.DOCTOR;
            break;
          case "CLIENT":
            state.role = UserRole.CLIENT;
            break;
        }
        state.jwtToken = payload.payload.jwtToken;
      }
    );
  },
});

export default authSlice.reducer;

export const { setCredentials } = authSlice.actions;
