import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import React from "react";
import { Switch, Route } from "react-router-dom";
import './App.scss';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import PrivateRoute from './routes/PrivateRoute';
import Home from './routes/Home';
import SignIn from './routes/SignIn';

function App() {
  const [isOpenSideBar, setSideBarState] = React.useState<Boolean>(false);
  function toggleSidebar() {
    setSideBarState(!isOpenSideBar);
  }

  return (
    <div className="App">
      <Sidebar isOpenSideBar={isOpenSideBar} />
      <div className="app-body">
        <Topbar toggleSidebar={toggleSidebar} />
        <Switch>
          <PrivateRoute path="/home">
            <Home />
          </PrivateRoute>
          <Route path="/">
            <SignIn />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
