import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.scss';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './routes/Dashboard';
import Users from './routes/Users';

function App() {
  const [isOpenSideBar, setSideBarState] = React.useState<Boolean>(false);
  function toggleSidebar() {
    setSideBarState(!isOpenSideBar);
  }

  return (
    <div className="App">
      <Router>
        <Sidebar isOpenSideBar={isOpenSideBar} />
        <div className="app-body">
          <Topbar toggleSidebar={toggleSidebar} />
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
