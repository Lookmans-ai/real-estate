import Axios from "axios";

import {
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from "../constants/userContants";

export const signup = (username, email, password) => async (dispatch) => {
  dispatch({
    type: USER_SIGNUP_REQUEST,
    payload: { username, email, password },
  });
  try {
    const { data } = await Axios.post("/api/auth/signup", {
      username,
      email,
      password,
    });

    console.log(data);

    dispatch({ type: USER_SIGNUP_SUCCESS, payload: data });
    // localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGNUP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
