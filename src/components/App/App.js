import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "../Login/Login";
import Header from "../Header/Header";
import { Route, Switch } from "react-router-dom";
import UserDashboard from "../UserDashboard/UserDashboard";
import EventDetails from "../EventDetails/EventDetails";
import FriendsDashboard from "../FriendsDashboard/FriendsDashboard";
import Status404 from "../../errorHandling/Status404";
import InternalServerError from "../../errorHandling/InternalServerError";
import SearchForm from "../../components/SearchForm/SearchForm";
import { gql, useQuery } from "@apollo/client";
import { ProgressSpinner } from "../SpinLogo/SpinLogo";

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
const App = () => {
  const [currentUser, setCurrentUser] = useState("");
  const [searchedEvents, setSearchedEvents] = useState([]);
  // eslint-disable-next-line
  const [hasError404, setHasError404] = useState("");
  const [friends, setFriends] = useState([])

  let { data, error, loading } = useQuery(GET_ALL_USERS);

  if (loading) return <ProgressSpinner />;
  if (error) return <Status404 setHasError404={setHasError404} />;

  const findDetails = (id) => {
    let foundEvent;
    let foundSearch = searchedEvents.find(
      (event) => event.ticketmasterId === id
    );
    let foundUser = currentUser.events.find(
      (event) => event.ticketmasterId === id
    );
    foundEvent = foundSearch ? foundSearch : foundUser;
    return foundEvent;
  };



  const findFriends = () => {
    let matches = []
    data.users.forEach((friend) => {
    currentUser.friends.forEach((friend2) => {
      if (friend.name === friend2.name) {
        matches.push(friend.events)
      }
    });
  });

  setCurrentUser({...currentUser, friendEvents: matches.flat()});
}



  return (
    <main className="App">
      <Header user={currentUser} 
      signOut={setCurrentUser}
      findFriends ={findFriends}
      />
      <Switch>
        <Route
          exact
          path="/search"
          render={() => (
            <SearchForm
              findDetails={findDetails}
              setSearchedEvents={setSearchedEvents}
            />
          )}
        />
        <Route
          exact
          path="/:user"
          render={({ match }) => (
            <UserDashboard
              findDetails={findDetails}
              setCurrentUser={setCurrentUser}
              setHasError404={setHasError404}
            />
          )}
        />
        <Route
          exact
          path="/:user/friends"
          render={() => (
            <FriendsDashboard
              findDetails={findDetails}
              setHasError404={setHasError404}
              currentUser={currentUser}
            />
          )}
        />
        <Route
          exact
          path="/event/:id"
          render={({ match }) => {
            const foundEvent = findDetails(match.params.id);
            return (
              <EventDetails
                event={foundEvent}
                user={currentUser}
                setCurrentUser={setCurrentUser}
              />
            );
          }}
        />
        <Route exact path="/" render={() => <Login />} />
        <Route component={Status404} setCurrentUser={setCurrentUser} />
        <Route component={InternalServerError} />
      </Switch>
    </main>
  );
};

export default App;
