import createDataContext from "./createDataContext";
import { AsyncStorage } from "react-native";
import api from "../api";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };

    case "signup":
      return { ...state, token: action.payload, errorMessage: "" };

    default:
      return state;
  }
};

const signup = dispatch => async ({ email, password }, callback) => {
  try {
    const res = await api.post("/signup", { email, password });
    const { token } = res.data;
    await AsyncStorage.setItem("token", token);
    dispatch({ type: "signup", payload: token });

    // navigate to main flow :)
    if (callback) callback();
  } catch (err) {
    if (err.response) {
    } else {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up"
      });
    }
  }
};

const signin = dispacth => ({ email, password }) => {};

const signout = dispatch => () => {};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, errorMessage: "" }
);
