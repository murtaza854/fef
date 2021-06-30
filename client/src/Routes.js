import React from 'react';
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import { Admin } from './admin'
import { MainNavBar, Footer } from './components'
import { Home, About, Work, Gallery, News, Network, Donate } from './pages'
import './App.scss';

function Routes(props) {
  let location = useLocation();
  return (
    <div>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="page"
          timeout={300}
        >
          <div className="page">

            <Switch location={location}>
              <Route path="/admin"  >
                <Admin />
              </Route>

              <Route path="/donate" >
                <MainNavBar />
                <Donate />
                <Footer />
              </Route>
              <Route path="/about" >
                <MainNavBar />
                <About />
                <Footer />
              </Route>
              <Route path="/gallery" >
                <MainNavBar />
                <Gallery />
                <Footer />
              </Route>
              <Route path="/work">
                <MainNavBar />
                <Work />
                <Footer />
              </Route>
              <Route path="/news-events">
                <MainNavBar />
                <News />
                <Footer />
              </Route>
              <Route path="/network">
                <MainNavBar />
                <Network />
                <Footer />
              </Route>
              <Route path="/">
                <MainNavBar />
                <Home />
                <Footer />
              </Route>
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default Routes;