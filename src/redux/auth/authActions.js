import {
  FETCH_lOGIN_REQUEST,
  FETCH_lOGIN_SUCESS,
  FETCH_lOGIN_FAILURE,
  LOGOUT,
  TRY_LOGIN
} from "./authTypes";

export const logout = () => {
  localStorage.removeItem(process.env.REACT_APP_APP_KEY);
  return {
    type: LOGOUT
  }
}

export const tryLogin = () => ({type: TRY_LOGIN});

export const fetchLoginRequest = (email, password)=> ({
  type: FETCH_lOGIN_REQUEST,
  payload: {
    email,
    password
  }
});

export const fetchLoginSucess = (payload) => {
  localStorage.setItem(
    process.env.REACT_APP_APP_KEY,
    JSON.stringify({ token: payload.token, user: payload.email})
  );
  return {
    type: FETCH_lOGIN_SUCESS
  }
}

export const fetchLoginFailure = () => ({type: FETCH_lOGIN_FAILURE});