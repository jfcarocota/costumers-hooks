import axios from "axios"
import { AUTHENTICATE, GET_COSTUMERS_SEARCH } from "../../graphql/queries";
import jwt from "jsonwebtoken";

export const authCall = (email, password)=> (
  axios.post(process.env.REACT_APP_API_URL, {
    query: AUTHENTICATE,
    variables:{email, password}
  })
  .then(({data}) => {
    try {
      const session = jwt.verify(data.data.login.token, process.env.REACT_APP_TOKEN_KEY);
      return {token: data.data.login.token, user: session.email};
    } catch (error) {
      console.log(error.message);
    }
  })
  .catch(error =>{
    console.log(error);
  })
);

export const sessionCall = () => {
  const storedSession = JSON.parse(localStorage.getItem(process.env.REACT_APP_APP_KEY));
  //console.log(storedSession);
  try{
    const session = jwt.verify(storedSession.token, process.env.REACT_APP_TOKEN_KEY);

    return {token: storedSession.token, user: session.email};
  } catch (error) {
    console.log(error.message);
  }
}

export const costumersSearchCall = filter => (
axios.post(process.env.REACT_APP_API_URL, {
  query: GET_COSTUMERS_SEARCH,
  variables: {
    filter
  }
})
.then(({data}) => (
  data.data.costumersSearch.map(costumer => {
    const {fullName, id, phonNumber, email, packages} = costumer;
    const accounts = packages.map(element => `${element.parcel.name}: ${element.account}`);
    return {
      title: fullName,
      description: `${email}, ${phonNumber}, (${accounts.join()})`,
      id: id
    }
  })
))
.catch(error => console.log(error))
);
