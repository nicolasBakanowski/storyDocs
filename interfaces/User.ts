export interface LoginData {
    username: string;
    password: string;
  }
export interface UserState {
    id:number | null;
    username: string | null;
    password: string | null;
    isAdmin: boolean;
    token: string | null;
  }  
export const initialState: UserState = {
    id:null,
    username: null,
    password: null,
    isAdmin: false,
    token: null,
  };
export interface User {
    username: string;
    password: string;
  }