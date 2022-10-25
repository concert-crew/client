import { gql, useQuery } from "@apollo/client";

const GET_USER = gql`
  query GetUser($name: String!) {
    user(name: $name) {
      name
      id
      image
      friends {
        id
        name
      }
      events {
        id
        name
        ticketmasterId
        buyTicketsUrl
        image
        date
        time
        venueName
        city
        state
        address
        longitude
        latitude
        attendees {
          name
          image
        }
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
