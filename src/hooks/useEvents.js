import { gql, useQuery } from "@apollo/client";

const GET_EVENTS = gql`
  query GetEvents($name: String!) {
    events(name: $name) {
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
