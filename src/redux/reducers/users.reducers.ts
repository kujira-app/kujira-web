import { PayloadAction } from "@reduxjs/toolkit";

import * as Types from "@/types";

import { EntitiesState } from "../slices/entities-slice";

export const usersReducers = {
  setCurrentUser: (
    state: EntitiesState,
    action: PayloadAction<Types.UserModel>
  ) => {
    state.currentUser = action.payload;
  },
  logoutUser: (state: EntitiesState) => {
    state.currentUser = null;
  },
};
