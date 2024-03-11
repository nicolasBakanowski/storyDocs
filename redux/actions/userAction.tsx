import { Dispatch } from "redux";
import axios from "../axios.config";
import { LoginData, User, UserState } from "../../interfaces/User";
import { setUserInfoAndToken, changeToAdminSlice } from "../slices/userSlice";

export const loginAction =
    (loginData: LoginData) => async (dispatch: Dispatch) => {
        try {
            const response = await axios.post("/auth/login", loginData);
            const newUserData: UserState = {
                id: response.data.id,
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
            return true;
        } catch (error) {
            return false;
        }
    };
export const changeToAdmin =
    (userName: string, token: string) => async (dispatch: Dispatch) => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            };
            const response = await axios.put(`/user/updateIsAdmin/`, { userName }, config);
            console.log(response.data, "aver que pasa")
            dispatch(changeToAdminSlice())
            return true;
        } catch (error) {
            console.error(error)
        }
    };