import { gql } from '@apollo/client';

export const AUTHENTICATE =`
  query($email:String!, $password:String!){
    login(email: $email, password: $password){
      token
    }
  }
`;

export const LOGIN_QUERY = gql`
  query($email:String!, $password:String!){
    login(email: $email, password: $password){
      token
    }
  }
`;

export const GET_COSTUMERS_OPTIONS = gql`
  query($filter: String){
    costumersSearch(filter: $filter){
      id
      fullName
      phonNumber
      email
      packages{
        account
        parcel{
          name
        }
      }
    }
  }
`;
