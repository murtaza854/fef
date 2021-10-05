import React from 'react';
import "./MainNavBar.scss";
import logo from '../../logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Nav from 'react-bootstrap/Nav';
import MenuIcon from '@material-ui/icons/Menu';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link, useHistory
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  tree: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
});

function MainNavBar(props) {

  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* <List>
        {[{ name: 'Home', url: 'home' }, { name: 'About Us', url: 'about', }, { name: 'Our Work', url: 'work' }, { name: 'Our Network', url: 'network' }, { name: 'News and Events', url: 'news-events' }, { name: 'Gallery', url: 'gallery' }, { name: 'Contact Us', url: 'contact-us' }, { name: 'Donate Now', url: 'donate' }].map((text, index) => (
          <ListItem onClick={_ => history.push(`/${text.url}`)} disableRipple={true} button key={text.url}>
            <ListItemText primary={text.name} />
          </ListItem>
        ))}
      </List> */}
      <List>
        <ListItem onClick={_ => history.push(`/`)} disableRipple={true} button>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem style={{paddingBottom: 0}} onClick={event => event.preventDefault()} disableRipple={true} button>
          <ListItemText primary="About Us" />
        </ListItem>
        <ListItem style={{paddingBottom: 0, paddingTop: 0}}>
          <List>
            <ListItem onClick={_ => history.push(`/profile`)} disableRipple={true} button>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem onClick={_ => history.push(`/our-story`)} disableRipple={true} button>
              <ListItemText primary="Our Story" />
            </ListItem>
            <ListItem onClick={_ => history.push(`/founder`)} disableRipple={true} button>
              <ListItemText primary="Message from Founder" />
            </ListItem>
            <ListItem onClick={_ => history.push(`/governers`)} disableRipple={true} button>
              <ListItemText primary="Founding Members" />
            </ListItem>
          </List>
        </ListItem>
        <ListItem onClick={event => event.preventDefault()} disableRipple={true} button>
          <ListItemText primary="Our Work" />
        </ListItem>
        <ListItem style={{paddingBottom: 0, paddingTop: 0}}>
          <List>
            <ListItem onClick={_ => history.push(`/school-meal-program`)} disableRipple={true} button>
              <ListItemText primary="School Meal Program" />
            </ListItem>
            <ListItem onClick={_ => history.push(`/covid-19-relief-work`)} disableRipple={true} button>
              <ListItemText primary="Covid-19 Relief Work" />
            </ListItem>
            <ListItem onClick={_ => history.push(`/testimonials`)} disableRipple={true} button>
              <ListItemText primary="Testimonials" />
            </ListItem>
          </List>
        </ListItem>
        <ListItem onClick={_ => history.push(`/network`)} disableRipple={true} button>
          <ListItemText primary="Our Network" />
        </ListItem>
        <ListItem onClick={_ => history.push(`/news-events`)} disableRipple={true} button>
          <ListItemText primary="News and Events" />
        </ListItem>
        <ListItem onClick={_ => history.push(`/gallery`)} disableRipple={true} button>
          <ListItemText primary="Gallery" />
        </ListItem>
        <ListItem onClick={_ => history.push(`/contact-us`)} disableRipple={true} button>
          <ListItemText primary="Contact Us" />
        </ListItem>
        <ListItem onClick={_ => history.push(`/donate`)} disableRipple={true} button>
          <ListItemText primary="Donate Now" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className="mainnavbar">
      <Navbar bg="transparent" expand="lg" className="navbar">
        <Navbar.Brand href="/"
          className="navbarlogo"><img
            alt="FEF"
            src={logo}
          // height="110"
          // width="110"
          /></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto spacing-right">
            <Link to="/" className="navbartext">Home</Link>
            <Link to="/" className="navbartext about-hover">
              About Us
              <div className="about-dropdown">
                <Link to="/profile" className="navbartext"><li>Profile</li></Link>
                <Link to="/our-story" className="navbartext"><li>Our Story</li></Link>
                <Link to="/founder" className="navbartext"><li>Message from Founder</li></Link>
                <Link to="/governers" className="navbartext"><li>Founding Members</li></Link>
              </div>
            </Link>
            <Link to="/" className="navbartext about-hover">
              Our Work
              <div className="about-dropdown">
                <Link to="/school-meal-program" className="navbartext"><li>School Meal Program</li></Link>
                <Link to="/covid-19-relief-work" className="navbartext"><li>Covid-19 Relief Work</li></Link>
                <Link to="/testimonials" className="navbartext"><li>Testimonials</li></Link>
              </div>
            </Link>
            <Link to="/network" className="navbartext">Our Network</Link>
            <Link to="/gallery" className="navbartext">Gallery</Link>
            <Link to="/news-events" className="navbartext">News and Events</Link>
            <Link to="/contact-us" className="navbartext">Contact Us</Link>
            <Link to="/donate" className="navbardonate">Donate Now</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="sidebar">
        {['right'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button className="hamburger-icon" disableRipple={true} onClick={toggleDrawer(anchor, true)}><MenuIcon fontSize="large" /></Button>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
              className="sidebar-slider"
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default MainNavBar;