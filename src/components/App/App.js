import React, { useState } from "react";
import "./App.css";
import Login from "../Login/Login";
import Header from "../Header/Header";
import { Route, Switch } from "react-router-dom";
import { Abby } from "../../sampleUser";
import UserDashboard from "../UserDashboard/UserDashboard";
import EventDetails from "../../EventDetails/EventDetails";

const App = () => {
  const [currentUser, setCurrentUser] = useState("");
  console.log(currentUser);

  return (
    <main className="App">
      <Header />
      <Switch>
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
          path="/event/:id"
          render={({ match }) => {
            
              const found = currentUser.events.find(
                (event) => event.id === match.params.id
              );
         
              
            
             return <EventDetails event={found} user={currentUser}/>;
          }}
        />
        <Route
          exact
          path="/"
          render={() => <Login setCurrentUser={setCurrentUser} />}
        />
      </Switch>
    </main>
  );
};

export default App;
