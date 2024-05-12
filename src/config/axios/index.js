import axios from "axios";
import { logoutAction } from "@app/slices/auth";
import { store } from "@app/store";
let BASE_URL = "http://localhost:3000/";
export const AxiosAPI = axios.create({
  baseURL: `${BASE_URL}api`,
});
AxiosAPI.interceptors.request.use(
  (config) => {
    if (!config.headers.Authorization) {
      const token = store.getState().auth?.token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);
AxiosAPI.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalConfig = error.config;
    const url = originalConfig?.url;

    if (error.response && url !== "/auth/refresh" && url !== "/auth/login") {
      if (error.response.status === 401) {
        try {
          store.dispatch(logoutAction());
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(error);
  }
);
