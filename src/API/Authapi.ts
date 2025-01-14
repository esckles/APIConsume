/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const URL = "http://localhost:7000/api";

export const signup = async (data: any) => {
  try {
    return await axios.post(`${URL}/signup-user`, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};

export const verifyaccount = async (userID: string) => {
  try {
    return await axios.get(`${URL}/verify-user/${userID}`).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};

export const signin = async (data: any) => {
  try {
    return await axios.post(`${URL}/signin-user`, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};

export const readone = async (userID: string) => {
  try {
    return await axios.get(`${URL}/readone/${userID}`).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};

export const readall = async (data: any) => {
  try {
    return await axios.get(`${URL}/readall`, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};
export const forgetPassword = async (email: string) => {
  try {
    return await axios
      .patch(`${URL}/forget-password`, { email })
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};

export const changePassword = async (password: string, userID: string) => {
  try {
    return await axios
      .patch(`${URL}/change-password/${userID}`, { password })
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};
