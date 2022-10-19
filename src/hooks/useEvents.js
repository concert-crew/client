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
//restful fetch request to get all event search results. interpolate url with keyword as user's search value
//when we send event to users table, will be graphql mutation


export const useUser = (name) => {
  const { data, error, loading } = useQuery(GET_USER, {
    variables: {
      name,
    },
  });

  return { data, error, loading };
};
