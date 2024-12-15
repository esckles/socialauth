/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const URL: string = "http://localhost:2299/api";

export const createUser = async (data: any) => {
  try {
    const config: any = {
      headers: {
        "content-types": "multipart/form-data",
      },
    };
    return await axios.post(`${URL}/create-user`, data, config).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};

export const LoginUser = async (data: any) => {
  try {
    return await axios.post(`${URL}/login-user`, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};
