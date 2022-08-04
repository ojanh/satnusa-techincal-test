import { createSlice } from "@reduxjs/toolkit";

export const sliceApp = createSlice({
    name: 'appSlice',
    initialState: {
      users: [],
      filterUsers: []
    },
    reducers: {
      setUser(state, {payload}) {
        state.users = state.filterUsers = payload;
      },
      filterUser(state, {payload: {type, id}}) {
        state.filterUsers = state.users.filter(e => e?.[type ?? '']?.includes(id))
      }
    },
  });

  export const AppActions = sliceApp.actions;
  export default sliceApp.reducer;