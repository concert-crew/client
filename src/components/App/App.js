import React, { useState } from "react";
import "./App.css";
import Login from "../Login/Login";
import Header from "../Header/Header";
import { Route, Switch } from "react-router-dom";
import { Abby } from "../../sampleUser";
import UserDashboard from "../UserDashboard/UserDashboard";
import EventDetails from "../EventDetails/EventDetails";
import FriendsDashboard from "../FriendsDashboard/FriendsDashboard";
import Status404 from "../../errorHandling/Status404";
import InternalServerError from "../../errorHandling/InternalServerError";
import SearchEventsContainer from "../SearchEventsContainer/SearchEventsContainer";


const App = () => {
  const [currentUser, setCurrentUser] = useState("");
  const [searchInput, setSearchInput] = useState("");




  return (
    <main className="App">
      <Header user={currentUser} signOut={setCurrentUser} />
      <Switch>
        <Route
         exact
         path="/search"
         render={() => <SearchEventsContainer setSearchInput={setSearchInput} />}
       />
        <Route
          exact
          path="/:user"
          render={({ match }) => (
            <UserDashboard
              //  user={match.params.user}
              user={Abby}
            />
          )}
        />
        <Route
          exact
          path="/:user/friends"
          render={() => <FriendsDashboard events={Abby.events}/>}
        />
        <Route
          exact
          path="/event/:id"
          render={({ match }) => {
            const found = currentUser.events.find(
              (event) => event.id === match.params.id
            );
            return <EventDetails event={found} user={currentUser} />;
          }}
        />  
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
