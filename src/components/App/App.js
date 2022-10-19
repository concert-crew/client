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
import SearchEventsContainer from "../SearchEventsContainer/SearchEventsContainer";


const App = () => {
  const [currentUser, setCurrentUser] = useState('');
  const [searchedEvents, setSearchedEvents] = useState([])
  const [foundEvent, setFoundEvent] = useState({})

//findDetails -> event card. viewDetails button invokes findDetails. SearchedEvents to set state. Searches through currentUsers events and searches through results to line up ids

const findDetails = (id) => {
  let foundEvent
  if (currentUser.events.length) {
    foundEvent = currentUser.events.find(event => event.ticketmasterId
      === id) 
  } else {
    foundEvent = searchedEvents.find(event => event.ticketmasterId
      === id)
  }
  console.log(foundEvent)
  return foundEvent
    // setFoundEvent(foundEvent) 

}

  return (
    <main className="App">
      <Header user={currentUser} signOut={setCurrentUser} />
      <Switch>
        <Route
         exact
         path="/search"
         render={() => <SearchEventsContainer findDetails={findDetails} setSearchedEvents={setSearchedEvents}/>}
       />
        <Route
          exact
          path="/:user"
          render={({ match }) => (
            <UserDashboard
              //  user={match.params.user}
              findDetails={findDetails} 
              setCurrentUser={setCurrentUser}
            />
          )}
        />
        <Route
          exact
          path="/:user/friends"
          render={() => <FriendsDashboard findDetails={findDetails} events={currentUser.events}/>}
        />
        <Route
          exact
          path="/event/:id"
          render={({match}) => { 
            const foundEvent = findDetails(match.params.id)
          return <EventDetails event={foundEvent} user={currentUser} />}
          }/>  
        <Route
          exact
          path="/"
          render={() => 
          <Login setCurrentUser={setCurrentUser} />  
          } 
        />
        <Route component={Status404} />
        <Route component={InternalServerError} />
      </Switch>
    </main>
  );
};

export default App;
