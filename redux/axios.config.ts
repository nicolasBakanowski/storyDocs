import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: "https://be-storydots.onrender.com"

,
});

export default instance;
