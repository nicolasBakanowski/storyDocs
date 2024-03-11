import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState, initialState} from "../../interfaces/User";



const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfoAndToken: (
      state,
      action: PayloadAction<UserState>
    ) => {
      state.username = action.payload.username;
      state.token = action.payload.token;
      state.isAdmin = action.payload.isAdmin
    },
    logout: (state) => {
        state.username = null;
        state.token = null;
        state.isAdmin = false
      },
  },
});

export const { setUserInfoAndToken,logout } = userSlice.actions;
export default userSlice.reducer;