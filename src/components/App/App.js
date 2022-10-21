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
import SearchForm from "../../components/SearchForm/SearchForm"



const App = () => {
  const [currentUser, setCurrentUser] = useState("");
  const [searchedEvents, setSearchedEvents] = useState([]);
  const [foundEvent, setFoundEvent] = useState({});
  const [hasError404, setHasError404] = useState("");
  //findDetails -> event card. viewDetails button invokes findDetails. SearchedEvents to set state. Searches through currentUsers events and searches through results to line up ids

  const findDetails = (id) => {
    console.log(id);
    
    let foundEvent;
    // if (searchedEvents.length) {
    //   foundEvent = searchedEvents.find((event) => event.ticketmasterId === id);
    // } else {
    //   foundEvent = currentUser.events.find(
    //     (event) => event.ticketmasterId === id
    //   );
    // }
    let foundSearch = searchedEvents.find(
      (event) => event.ticketmasterId === id
    );
    console.log(foundSearch);
    
    let foundUser = currentUser.events.find(
      (event) => event.ticketmasterId === id
    );
     console.log(foundUser);
    foundEvent = foundSearch ? foundSearch : foundUser;
    console.log(foundEvent);
    return foundEvent;
    // setFoundEvent(foundEvent)
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
              //  user={match.params.user}
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
