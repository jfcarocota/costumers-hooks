import { gql } from '@apollo/client';

export const AUTHENTICATE =`
  query($email:String!, $password:String!){
    login(email: $email, password: $password){
      token
    }
  }
`;

export const GET_COSTUMERS_SEARCH = `
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

export const GET_COSTUMER_BY_ID = `
query($id: ID!){
    costumer(id: $id){
        id
        fullName
        phonNumber
        email
        packages{
            id
            account
            password
            parcel{
                id
                name
            }
        }
    }
}
`;
