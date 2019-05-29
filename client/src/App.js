import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Title from './components/Title';
import Home from "./pages/Home";
import Edit from "./pages/Edit";

function App(){
  return (
    <Router>
      <div>
        <Title />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/edit/:id" component={ Edit } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;