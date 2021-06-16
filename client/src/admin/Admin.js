import React, { useEffect, useState } from 'react';
import { Login, AdminLayout } from '../admin';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import api from '../api';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route
//   } from "react-router-dom";

function Admin(props) {
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
        // background: {
        //   default: '#ededed',
        // },
        error: {
            main: '#c31200',
        },
        },
        typography: {
        fontFamily: 'Raleway',
        },
    });

    useEffect(() => {(
        async () => {
            if (token !== true) {
                const response = await fetch(`${api}/users/loggedIn`, {
                  headers: {'Content-Type': 'application/json'},
                  credentials: 'include',
                  withCredentials: true,
                });
                const content = await response.json();
                setToken(content.loggedIn);
            }
          // setDarkState(content.darkState);
          // const response1 = await fetch('http://localhost:4000/api/get-darktheme', {
          //   method: 'GET',
          //   headers: {'Content-Type': 'application/json'},
          //   credentials: 'include',
          //   withCredentials: true,
          // });
          // const content1 = await response1.json();
          // console.log(Boolean(content1.darktheme))
          // setDarkState(Boolean(content1.darktheme));
        })();
      });

    const pathArray = window.location.pathname.split('/');
    
    if (token === 'loading') return <div></div>;
    if (pathArray.length >= 2 && pathArray[1] === 'admin' && !token) {
        return (<Login setToken={setToken} title="Fortify Education Foundation: Admin Login" /> );
    }

    return (
        <ThemeProvider theme={darkTheme}>
              {!token ? (
                <Login setToken={setToken} title="Fortify Education Foundation: Admin Login" />
                ) : (
                <AdminLayout darkState={darkState} setDarkState={setDarkState} setToken={setToken} title="Fortify Education Foundation: Dashboard" />
              )}
        </ThemeProvider>
    );
}

export default Admin;