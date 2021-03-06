import { gql } from '@apollo/client';

export const LOGIN_QUERY = gql`
    query($email:String!, $password:String!){
        login(email: $email, password: $password){
            token
        }
    }
`;