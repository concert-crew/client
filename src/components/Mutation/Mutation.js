import React from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_EVENT = gql`
    mutation CreateEvent($name: String!, $ticketmasterId: String!, $butTicketsUrl: String!, $image: String!, $date: String!, $time: String!, $venueName: String!, $city: String!, $state: String!, $address: String!, $longitude: $String!, $latitude: $String!) {
        createEvent(input: {
            name: $name, ticketmasterId: $ticketmasterId, buyTicketsUrl: $buyTicketsUrl, image: $image, date: $date, time: $time, venueName: $venueName, city: $city, state: $state, address: $address, longitude: $longitude, latitude: $latitude}) {
       
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

export const Mutation = (event) => {
  console.log(event);
  const [createEvent, { data, loading, error }] = useMutation(CREATE_EVENT, {
    variables: {
      name: event.name,
      ticketmasterId: event.ticketmasterId,
      buyTicketsUrl: event.buyTicketsUrl,
      image: event.image,
      date: event.date,
      time: event.time,
      venueName: event.venueName,
      city: event.city,
      state: event.state,
      address: event.address,
      longitude: event.longitude,
      latitude: event.latitude,
    },
  });
};
