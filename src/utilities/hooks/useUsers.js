import { gql, useQuery } from "@apollo/client";

const GET_ALL_USERS = gql`
  query {
    users {
      name
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
      }
    }
  }
`;



export const useUsers = () => {
  const { data, error, loading } = useQuery(GET_ALL_USERS);

  return { data, error, loading };
};
