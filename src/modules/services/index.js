import { AxiosAPI } from "@config/axios";
export const login = (formData) => {
  return AxiosAPI.post(`/auth/login`, formData);
};
