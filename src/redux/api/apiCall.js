import axios from "axios"
import { AUTHENTICATE } from "../../graphql/queries";

export const authCall = (email, password)=> (
  axios.post(process.env.REACT_APP_API_URL, {
    query: AUTHENTICATE,
    variables:{email, password}
  })
  .then(({data}) => data.data.login.token)
  .catch(error =>{
    console.log(error);
  })
);
