import React, { useEffect, useState } from 'react';
import './App.scss';
import { Login, AdminLayout } from './admin'
import { MainNavBar } from './components'
import { Home } from './pages'
import 'bootstrap/dist/css/bootstrap.min.css';
import loggedIn from './serverRequests/loggedInUser';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App(props) {
  const [token, setToken] = useState("loading");
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: '#a8ce4c',
      },
      secondary: {
        main: '#e38454',
      },
      background: {
        default: '#ededed',
      },
      error: {
        main: '#c31200',
      },
    },
    typography: {
      fontFamily: 'Raleway',
    },
  });
  // useEffect(() => {
  //   async () => {
  //     const content = await loggedIn();
  //     console.log(content);
  //   }
  // });
  useEffect(() => {(
    async () => {
      const response = await fetch('http://localhost:4000/api/admin/loggedIn', {
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        withCredentials: true,
      });
      const content = await response.json();
      setToken(content.loggedIn);
      // setDarkState(content.darkState);
      const response1 = await fetch('http://localhost:4000/api/get-darktheme', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        withCredentials: true,
      });
      const content1 = await response1.json();
      setDarkState(Boolean(content1.darktheme));
    })();
  });
  if (token === 'loading') return <div></div>;
  if (!token) {
    return (<Login setToken={setToken} title="Fortify Education Foundation: Admin Login" /> );
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/admin">
            <ThemeProvider theme={darkTheme}>
              {!token ? (
                <Login setToken={setToken} title="Fortify Education Foundation: Admin Login" />
                ) : (
                <AdminLayout darkState={darkState} setDarkState={setDarkState} setToken={setToken} title="Fortify Education Foundation: Dashboard" />
              )}
            </ThemeProvider>
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
