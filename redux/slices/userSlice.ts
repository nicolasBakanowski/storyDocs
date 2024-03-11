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
    },
  },
});

export const { setUserInfoAndToken, } = userSlice.actions;
export default userSlice.reducer;