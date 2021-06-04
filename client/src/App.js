import React, { useState } from 'react';
import './App.scss';
import { Login, AdminLayout } from './admin'
import { MainNavBar } from './components'
import { Home } from './pages'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App(props) {
  const [token, setToken] = useState();
  // if (!token) {
  //   return (<Login setToken={setToken} title="Fortify Education Foundation: Admin Login" /> );
  // }

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/admin">
            {!token ? (
              <Login setToken={setToken} title="Fortify Education Foundation: Admin Login" />
              ) : (
              <AdminLayout title="Fortify Education Foundation: Dashboard" />
            )}
          </Route>
          <Route
            path="/"
            render={({ match: { url } }) => (
              <>
                <Route path={`${url}/`} exact>
                <MainNavBar></MainNavBar>
                <Home></Home>
                </Route>
              </>
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
