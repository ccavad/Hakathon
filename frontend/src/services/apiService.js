import { BASE_URL } from "./constants";
import axios from "axios";

export const register = async (body) => {
  const url = `${BASE_URL}/register`;
  return axios.post(url, body);
};

export const login = async (body) => {
  const url = `${BASE_URL}/login`;
  return axios.post(url, body);
};
