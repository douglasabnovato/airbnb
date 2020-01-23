/**
 * definido qual é a API de consumo
 * para você não ficar passando isso por extenso toda hora
 * e já pode definir o header de Authorization 
 * passando o token jwt caso o mesmo exista
 */

import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "http://127.0.0.1:3333"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;