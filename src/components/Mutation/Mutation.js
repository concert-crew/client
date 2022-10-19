import React from 'react'
import { gql, useMutation } from "@apollo/client"

const CREATE_EVENT = gql`
    mutation CreateEvent($id: Int!, $name: String!, $ticketmasterId: String!, $butTicketsUrl: String!, $image: String!, $date: String!, $time: String!, $venueName: String!, $city: String!, $state: String!, $address: String!, $longitude: $String!, $latitude: $String!)
    record {
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
`

export default function Mutation() {

    const [createEvent, {data, loading, error}] = useMutation(CREATE_EVENT)
        variables: {
            // id: ,
            // name:,
            // ticketmasterId:,
            // buyTicketsUrl:,
            // image:,
            // date:,
            // time:,
            // venueName:,
            // city:,
            // state:,
            // address:,
            // longitude
            // latitude
        }
}
