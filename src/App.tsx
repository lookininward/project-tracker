import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import React from "react";
import { isEmpty, isLoaded } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from "react-router-dom";
import './App.scss';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import PrivateRoute from './routes/PrivateRoute';
import Home from './routes/Home';
import SignIn from './routes/SignIn';

export function App() {
  const auth = useSelector((state: any) => state.firebase.auth);
  return (
    <div data-testid="app" className="App">
      {
        !isLoaded(auth) ?
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return (
                  isEmpty(auth) ?
                    <Redirect to="/sign-in" /> :
                    <Redirect to="/home/workflow" />
                )
              }}
            />
          </Switch>
          :
          <Switch>
            <PrivateRoute path="/home">
              <div className="home">
                <Sidebar />
                <div className="app-body">
                  <Topbar />
                  <Home />
                </div>
              </div>
            </PrivateRoute>
            <Route path="/sign-in">
              <SignIn />
            </Route>
          </Switch>
      }
    </div >
  );
}

export default App;
