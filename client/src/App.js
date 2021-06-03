import React, { Component } from 'react';
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

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route
              path="/admin"
              render={({ match: { url } }) => (
                <>
                  <Route path={`${url}/login`} exact>
                  <Login title="Fortify Education Foundation: Admin Login" />
                  </Route>
                  <Route path={`${url}/dashoard`}>
                  <AdminLayout title="Fortify Education Foundation: Dashboard" />
                  </Route>
                </>
              )}
            />
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
}

export default App;
