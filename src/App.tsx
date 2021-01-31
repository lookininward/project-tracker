import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import './App.scss';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Workflow from './routes/Workflow';
import Projects from './routes/Projects';
import Users from './routes/Users';
import Account from './routes/Account';

function App() {
  const [isOpenSideBar, setSideBarState] = React.useState<Boolean>(false);
  function toggleSidebar() {
    setSideBarState(!isOpenSideBar);
  }

  function Home() {
    return (
      <Switch>
        <Route path="/workflow">
          <Workflow />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
      </Switch>
    );
  }

  return (
    <div className="App">
      <Router>
        <Sidebar isOpenSideBar={isOpenSideBar} />
        <div className="app-body">
          <Topbar toggleSidebar={toggleSidebar} />
          <Switch>
            <Route>
              <Redirect to="/Workflow" />
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
