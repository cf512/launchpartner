import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Users from "./components/Users";

function App(){
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Users} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;