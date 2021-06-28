import React from 'react';
// import { Admin } from './admin'
// import { MainNavBar, Footer } from './components'
// import { Home, About, Work, Gallery, News, Network } from './pages'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Routes from './Routes';

function App(props) {

  return (
    <Router>
      <Switch>
        <Route path="*">
          <Routes />
        </Route>
    </Switch>
    </Router>
    // <Router>
    //   <div>
    //     <Switch>
    //       <Route path="/admin">
    //         <Admin></Admin>
    //       </Route>
    //       <Route
    //         path="/news-events"
    //         render={({ match: { url } }) => (
    //           <>
    //             <Route path={`${url}/`} exact>
    //             <MainNavBar></MainNavBar>
    //             <News></News>
    //             <Footer></Footer>
    //             </Route>
    //           </>
    //         )}
    //       />
    //       <Route
    //         path="/network"
    //         render={({ match: { url } }) => (
    //           <>
    //             <Route path={`${url}/`} exact>
    //             <MainNavBar></MainNavBar>
    //             <Network></Network>
    //             <Footer></Footer>
    //             </Route>
    //           </>
    //         )}
    //       />
    //       <Route
    //         path="/gallery"
    //         render={({ match: { url } }) => (
    //           <>
    //             <Route path={`${url}/`} exact>
    //             <MainNavBar></MainNavBar>
    //             <Gallery></Gallery>
    //             <Footer></Footer>
    //             </Route>
    //           </>
    //         )}
    //       />
    //       <Route
    //         path="/work"
    //         render={({ match: { url } }) => (
    //           <>
    //             <Route path={`${url}/`} exact>
    //             <MainNavBar></MainNavBar>
    //             <Work></Work>
    //             <Footer></Footer>
    //             </Route>
    //           </>
    //         )}
    //       />
    //       <Route
    //         path="/about"
    //         render={({ match: { url } }) => (
    //           <>
    //             <Route path={`${url}/`} exact>
    //             {/* <MainNavBar></MainNavBar> */}
    //             <About></About>
    //             <Footer></Footer>
    //             </Route>
    //           </>
    //         )}
    //       />
    //       <Route
    //         path="/"
    //         render={({ match: { url } }) => (
    //           <>
    //             <Route path={`${url}/`} exact>
    //             <MainNavBar></MainNavBar>
    //             <Home></Home>
    //             <Footer></Footer>
    //             </Route>
    //           </>
    //         )}
    //       />
    //     {/* </Switch> */}
    //   </div>
    // </Router>
  );
}

export default App;
