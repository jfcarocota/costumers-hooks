import { gql } from '@apollo/client';

export const LOGIN_QUERY = gql`
    query($email:String!, $password:String!){
        login(email: $email, password: $password){
            token
        }
    }
`;

export const GET_COSTUMERS_OPTIONS = gql`
    query($fullName: String){
        costumersSearch(fullName: $fullName){
            id
            firstName
            middleName
            lastName
            secondLastName,
            fullName
        }
    }
`;
