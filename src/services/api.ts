/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_ENDPOINT } from "@/config-global";
import { auth } from "@/firebase";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

axios.interceptors.request.use(
  async (config) => {
    if (!config.headers) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      config.headers = {
        "Content-Type": "application/json",
      };
    }

    if (!config.headers.authorization) {
      const idToken = await auth.currentUser?.getIdToken();

      if (idToken) {
        config.headers.authorization = `Bearer ${idToken}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export const post = async <D = any, R = any>(
  path: string,
  data?: D,
  config?: AxiosRequestConfig<any>
): Promise<AxiosResponse<R>> => {
  return await axios.post(`${API_ENDPOINT}/${path}`, data, config);
};

export const get = async <T = any>(path: string, config?: AxiosRequestConfig<T>): Promise<AxiosResponse<T>> => {
  return await axios.get<T>(`${API_ENDPOINT}/${path}`, config);
};

export const del = async (path: string, data?: any) => {
  return await axios({ method: "DELETE", data, url: `${API_ENDPOINT}/${path}` });
};
