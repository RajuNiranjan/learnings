import { gql } from "@apollo/client";

export const GET_AUTH_USER = gql`
  query GetAuthUser {
    authUser {
      _id
      username
      name
      profilePicture
      __typename
    }
  }
`;
