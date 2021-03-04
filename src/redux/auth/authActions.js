import TRY_lOGIN  from "./authTypes";

export const tryLogin = (email = '', password = '')=> {
  return {
    type: TRY_lOGIN,
    payload:{
      email,
      password
    }
  }
}