import React, { useState } from "react";
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

const App = () => {
  const [currentUser, setCurrentUser] = useState("");
  const [searchedEvents, setSearchedEvents] = useState([]);
  // eslint-disable-next-line
  const [hasError404, setHasError404] = useState("");


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

  return (
    <main className="App">
      <Header user={currentUser} signOut={setCurrentUser} />
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
              currentUser={currentUser}
              //this can be reduced to only passing the user obj rather than user and user events
              findDetails={findDetails}
              events={currentUser.events}
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
