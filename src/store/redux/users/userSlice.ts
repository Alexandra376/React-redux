import { createAppSlice } from "store/createAppSlice";
import type { UserData, UsersSliceState } from "./types"
import type { PayloadAction } from "@reduxjs/toolkit";

const usersInitialState: UsersSliceState = ({
  users: []
})

export const usersSlice = createAppSlice({
  name: "USERS",
  initialState: usersInitialState,
  reducers: create => ({
    addUser: create.reducer((state: UsersSliceState, action: PayloadAction<UserData>) => {
      state.users = [...state.users, action.payload];
    }),
    deleteAllUsers: create.reducer((state: UsersSliceState) => {
      state.users = [];
    })
  }),
  selectors: {
    users: (state: UsersSliceState) => state.users
  }
})

export const usersSliceActions = usersSlice.actions;
export const usersSliceSelectors = usersSlice.selectors;
