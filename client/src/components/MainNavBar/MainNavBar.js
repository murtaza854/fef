import React from 'react';
import "./MainNavBar.scss";
import logo from '../../logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Nav from 'react-bootstrap/Nav';
import MenuIcon from '@material-ui/icons/Menu';
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link, useHistory
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
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
      <List>
        {[{name: 'Home', url: 'home'}, {name: 'About Us', url: 'about'}, {name: 'Our Work', url: 'work'}, {name: 'Our Network', url: 'network'}, {name: 'News and Events', url: 'news-events'}, {name: 'Gallery', url: 'gallery'}, {name: 'Contact Us', url: 'contact-us'}, {name: 'Donate Now', url: 'donate'}].map((text, index) => (
          <ListItem onClick={_ => history.push(`/${text.url}`)} disableRipple={true} button key={text.url}>
            <ListItemText primary={text.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className="mainnavbar">
      <Navbar bg="transparent" expand="lg" className="navbar">
        <Navbar.Brand href="/"
          className="navbarlogo"><img
            alt=""
            src={logo}
            width="100"
            height="100"
          /></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/" className="navbartext">Home</Link>
            <Link to="/about" className="navbartext">About Us</Link>
            <Link to="/work" className="navbartext">Our Work</Link>
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