import createDataContext from "./createDataContext";
import api from "../api";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = dispatch => async ({ email, password }) => {
  try {
    const res = await api.post("/signup", { email, password });
    console.log(res.data);
  } catch (err) {
    console.log(err.message);
  }
};

const signin = dispacth => ({ email, password }) => {};

const signout = dispatch => () => {};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { isSignedIn: false }
);
