import React from 'react';
import './App.scss';
import { Admin } from './admin'
import { MainNavBar } from './components'
import { Home, About } from './pages'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  // Switch,
  Route
} from "react-router-dom";

function App(props) {

  return (
    <Router>
      <div>
        {/* <Switch> */}
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route
            path="/about"
            render={({ match: { url } }) => (
              <>
                <Route path={`${url}/`} exact>
                <MainNavBar></MainNavBar>
                <About></About>
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
        {/* </Switch> */}
      </div>
    </Router>
  );
}

export default App;
