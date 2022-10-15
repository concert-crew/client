import React, { useState } from "react";
import "./App.css";
import Login from "../Login/Login";
import { Route, Switch } from "react-router-dom";
import { Abby } from "../../sampleUser";
import UserDashboard from "../UserDashboard/UserDashboard";

const App = () => {
  const [currentUser, setCurrentUser] = useState("");
console.log(currentUser);

  return (
    <main className="App">
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
          path="/"
          render={() => <Login setCurrentUser={setCurrentUser} />}
        />
      </Switch>
    </main>
  );
};

export default App;
