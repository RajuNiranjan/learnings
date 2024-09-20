import { gql } from '@apollo/client'

export const SIGN_UP = gql`
mutation SignUP($input:SignUpInput!){
    signup(input:$input){
        _id
        name
        username
    }
}

`

export const LOG_IN = gql`

mutation LogIn($input:LogInInput!){
    login(input:$input){
        _id
        username
        username
    }
}
`

export const LOG_OUT = gql`

mutation LogOut {
    logout{
        message
    }
}
`