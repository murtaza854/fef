import React from 'react';
import {
    BrowserRouter as Router,
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
        <MainNavBar />
            <TransitionGroup>
            <CSSTransition
                key={location.key}
                classNames="page"
                timeout={300}
            >
            <div className="page">
                <Switch location={location}>
                <Route path="/admin" children={<Admin />} />
                <Route path="/donate" children={<Donate />} />
                <Route path="/about" children={<About />} />
                <Route path="/gallery" children={<Gallery />} />
                <Route path="/work" children={<Work />} />
                <Route path="/news-events" children={<News />} />
                <Route path="/network" children={<Network />} />
                <Route path="/" children={<Home />} />
                </Switch>
                <Footer />
                </div>
            </CSSTransition>
            </TransitionGroup>
        </div>
    );
}

export default Routes;