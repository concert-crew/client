import { gql, useQuery } from "@apollo/client";

const GET_USER = gql`
  query GetUser($name: String!) {
    user(name: $name) {
      name
      events {
        name
        date
      }
    }
  }
`;


export const useUser = (name) => {
  const { data, error, loading } = useQuery(GET_USER, {
    variables: {
      name,
    },
  });

  return { data, error, loading };
};
