import { gql } from '@apollo/client'

export const GET_AUTHORISED_USER = gql`

    query GetAuthorisedUser{
        authUser{
            _id
            name
            username
        }
    }


`