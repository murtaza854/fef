import React, { Component } from 'react';
import './App.scss';
import { Login, AdminLayout } from './admin'
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
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/admin/login">
              <Login title="Fortify Education Foundation: Admin Login" />
            </Route>
            <Route path="/admin/dashoard">
              <AdminLayout title="Fortify Education Foundation: Dashboard" />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
