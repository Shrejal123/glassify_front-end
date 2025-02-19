import axios from "axios";
import { API_BASE_URL } from "../../config/apiConfig";
import {
  REGISTER_REQUEST,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  LOGOUT,
} from "./ActionType";

// Register Actions
const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

export const register = (userData) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    const user = response.data;

    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    }
    console.log("User registered successfully: ", user);
    dispatch(registerSuccess(user));
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    dispatch(registerFailure(errorMessage));
  }
};

// Login Actions
const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (userData) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
    const user = response.data;

    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    }
    console.log("User logged in successfully: ", user);
    dispatch(loginSuccess(user));
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    dispatch(loginFailure(errorMessage));
  }
};

// Get User Actions
const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

export const getUser = () => async (dispatch) => {
  const jwt = localStorage.getItem("jwt");
  if (!jwt) {
    dispatch(getUserFailure("No token found. Please log in again."));
    return;
  }

  dispatch(getUserRequest());
  try {
    const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    const user = response.data;
    console.log("User profile fetched: ", user);
    dispatch(getUserSuccess(user));
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    dispatch(getUserFailure(errorMessage));
  }
};

// Logout Action
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT, payload: null });
  localStorage.clear();
};
