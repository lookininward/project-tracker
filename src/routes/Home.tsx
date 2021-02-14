import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Workflow from './Workflow';
import Projects from './Projects';
import Users from './Users';
import Account from './Account';

const Home = () => {
  return (
    <Switch>
      <Route path="/home/workflow">
        <Workflow />
      </Route>
      <Route path="/home/projects">
        <Projects />
      </Route>
      <Route path="/home/users">
        <Users />
      </Route>
      <Route path="/home/account">
        <Account />
      </Route>
    </Switch>
  );
}

export default Home;