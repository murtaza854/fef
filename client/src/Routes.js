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
import { Home, About, Work, Covid, Testimonial, NewsletterPage, Gallery, News, Network, Donate,ContactUs, OurStory, Governers, Founder } from './pages'
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
              <Route path="/news-events/:newsletter">
                <MainNavBar />
                <NewsletterPage />
                <div className="footer-spacing" />
                <Footer />
              </Route>
              <Route path="/admin"  >
                <Admin />
              </Route>
              <Route path="/donate" >
                <MainNavBar />
                <Donate />
                <div className="footer-spacing" />
                <Footer />
              </Route>
              <Route path="/founder" >
                <MainNavBar />
                <Founder />
                <div className="footer-spacing" />
                <Footer />
              </Route>
              <Route path="/profile" >
                <MainNavBar />
                <About />
                <div className="footer-spacing" />
                <Footer />
              </Route>
              <Route path="/our-story" >
                <MainNavBar />
                <OurStory />
                <div className="footer-spacing" />
                <Footer />
              </Route>
              <Route path="/governers" >
                <MainNavBar />
                <Governers />
                <div className="footer-spacing" />
                <Footer />
              </Route>
              <Route path="/gallery" >
                <MainNavBar />
                <Gallery />
                <div className="footer-spacing" />
                <Footer />
              </Route>
              <Route path="/testimonials">
                <MainNavBar />
                <Testimonial />
                <div className="footer-spacing" />
                <Footer />
              </Route>
              <Route path="/school-meal-program">
                <MainNavBar />
                <Work />
                <div className="footer-spacing" />
                <Footer />
              </Route>
              <Route path="/covid-19-relief-work">
                <MainNavBar />
                <Covid />
                <div className="footer-spacing" />
                <Footer />
              </Route>
              <Route path="/news-events">
                <MainNavBar />
                <News />
                <div className="footer-spacing" />
                <Footer />
              </Route>
              <Route path="/network">
                <MainNavBar />
                <Network />
                <div className="footer-spacing" />
                <Footer />
              </Route>
              <Route path="/contact-us">
                <MainNavBar />
                <ContactUs/>
                <div className="footer-spacing" />
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