import { Dispatch } from "redux";
import axios from "../axios.config";
import { LoginData, User, UserState } from "../../interfaces/User";
import { setUserInfoAndToken } from "../slices/userSlice";

export const loginAction =
    (loginData: LoginData) => async (dispatch: Dispatch) => {
        try {
            const response = await axios.post("/auth/login", loginData);
            const newUserData: UserState = {
                username: loginData.username,
                password: null,
                token: response.data.token,
                isAdmin: response.data.isAdmin
            };
            dispatch(setUserInfoAndToken(newUserData));
            return true;
        } catch (error) {
            return false;
        }
    };
export const registerAction =
    (userData: User) => async (dispatch: Dispatch) => {
        try {
            const response = await axios.post("/user/new", userData);
            console.log(response.data, "asi viene la data")
            return true;
        } catch (error) {
            return false;
        }
    };