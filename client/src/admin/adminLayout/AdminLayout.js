import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AppBar, Drawer, DrawerHeader } from './layoutHelpers';
import Database from '../database/Database';
import { Link } from 'react-router-dom';
// import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import ReceiptIcon from '@mui/icons-material/Receipt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LabelIcon from '@mui/icons-material/Label';
// import PublicIcon from '@mui/icons-material/Public';
// import LocationCityIcon from '@mui/icons-material/LocationCity';
import CollectionsIcon from '@mui/icons-material/Collections';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LogoutIcon from '@mui/icons-material/Logout';
import PasswordIcon from '@mui/icons-material/Password';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Tooltip } from '@mui/material';

export default function AdminLayout() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [linkDisableObject, setLinkDisableObject] = React.useState({
        dashboard: false,
        'meal-counter': false,
        'future-section': false,
        'about-us': false,
        'highlights': false,
        'message-from-founder': false,
        profile: false,
        story: false,
        'founder-message': false,
        'founding-members': false,
        'school-meal-program': false,
        'covid-19': false,
        'network': false,
        gallery: false,
        user: false,
    });

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleLinkDisable = (e, link) => {
        if (linkDisableObject[link]) {
            e.preventDefault();
            return;
        }
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" color="primary" open={open} enableColorOnDark>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                        Fortify Education Foundation Admin
                    </Typography>
                    <Tooltip title="Change Password">
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                        >
                            <PasswordIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Logout">
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                        >
                            <LogoutIcon />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <Link onClick={e => handleLinkDisable(e, 'meal-counter')} style={{ color: 'black', textDecoration: 'none' }} to="/admin/meal-counter">
                        <ListItem disabled={linkDisableObject['meal-counter']} button>
                            <ListItemIcon>
                                <GroupIcon />
                            </ListItemIcon>
                            <ListItemText primary="Meal Counter" />
                        </ListItem>
                    </Link>
                    <Link onClick={e => handleLinkDisable(e, 'future-section')} style={{ color: 'black', textDecoration: 'none' }} to="/admin/future-section">
                        <ListItem disabled={linkDisableObject['future-section']} button>
                            <ListItemIcon>
                                <LocalShippingIcon />
                            </ListItemIcon>
                            <ListItemText primary="Future Section" />
                        </ListItem>
                    </Link>
                    <Link onClick={e => handleLinkDisable(e, 'about-us')} style={{ color: 'black', textDecoration: 'none' }} to="/admin/about-us">
                        <ListItem disabled={linkDisableObject['about-us']} button>
                            <ListItemIcon>
                                <CollectionsIcon />
                            </ListItemIcon>
                            <ListItemText primary="About Us" />
                        </ListItem>
                    </Link>
                    <Link onClick={e => handleLinkDisable(e, 'highlights')} style={{ color: 'black', textDecoration: 'none' }} to="/admin/highlights">
                        <ListItem disabled={linkDisableObject['highlights']} button>
                            <ListItemIcon>
                                <ReceiptIcon />
                            </ListItemIcon>
                            <ListItemText primary="Highlights" />
                        </ListItem>
                    </Link>
                    <Link onClick={e => handleLinkDisable(e, 'message-from-founder')} style={{ color: 'black', textDecoration: 'none' }} to="/admin/message-from-founder">
                        <ListItem disabled={linkDisableObject['message-from-founder']} button>
                            <ListItemIcon>
                                <LabelIcon />
                            </ListItemIcon>
                            <ListItemText primary="Founder Message" />
                        </ListItem>
                    </Link>
                </List>
                <Divider />
                <List>
                    <Link onClick={e => handleLinkDisable(e, 'profile')} style={{ color: 'black', textDecoration: 'none' }} to="/admin/profile">
                        <ListItem disabled={linkDisableObject['profile']} button>
                            <ListItemIcon>
                                <AccountCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItem>
                    </Link>
                    <Link onClick={e => handleLinkDisable(e, 'story')} style={{ color: 'black', textDecoration: 'none' }} to="/admin/story">
                        <ListItem disabled={linkDisableObject['story']} button>
                            <ListItemIcon>
                                <DescriptionIcon />
                            </ListItemIcon>
                            <ListItemText primary="Story" />
                        </ListItem>
                    </Link>
                    <Link onClick={e => handleLinkDisable(e, 'founder-message')} style={{ color: 'black', textDecoration: 'none' }} to="/admin/founder-message">
                        <ListItem disabled={linkDisableObject['founder-message']} button>
                            <ListItemIcon>
                                <LabelIcon />
                            </ListItemIcon>
                            <ListItemText primary="Founder Message" />
                        </ListItem>
                    </Link>
                    <Link onClick={e => handleLinkDisable(e, 'founding-members')} style={{ color: 'black', textDecoration: 'none' }} to="/admin/founding-members">
                        <ListItem disabled={linkDisableObject['founding-members']} button>
                            <ListItemIcon>
                                <GroupIcon />
                            </ListItemIcon>
                            <ListItemText primary="Founding Members" />
                        </ListItem>
                    </Link>
                </List>
                <Divider />
                <List>
                    <Link onClick={e => handleLinkDisable(e, 'school-meal-program')} style={{ color: 'black', textDecoration: 'none' }} to="/admin/school-meal-program">
                        <ListItem disabled={linkDisableObject['school-meal-program']} button>
                            <ListItemIcon>
                                <LocalMallIcon />
                            </ListItemIcon>
                            <ListItemText primary="School Meal Program" />
                        </ListItem>
                    </Link>
                    <Link onClick={e => handleLinkDisable(e, 'covid-19')} style={{ color: 'black', textDecoration: 'none' }} to="/admin/covid-19">
                        <ListItem disabled={linkDisableObject['covid-19']} button>
                            <ListItemIcon>
                                <LocalMallIcon />
                            </ListItemIcon>
                            <ListItemText primary="Covid-19" />
                        </ListItem>
                    </Link>
                </List>
                <Divider />
                <List>
                    <Link onClick={e => handleLinkDisable(e, 'network')} style={{ color: 'black', textDecoration: 'none' }} to="/admin/network">
                        <ListItem disabled={linkDisableObject['network']} button>
                            <ListItemIcon>
                                <GroupIcon />
                            </ListItemIcon>
                            <ListItemText primary="Network" />
                        </ListItem>
                    </Link>
                </List>
                <Divider />
                <List>
                    <Link onClick={e => handleLinkDisable(e, 'gallery')} style={{ color: 'black', textDecoration: 'none' }} to="/admin/gallery">
                        <ListItem disabled={linkDisableObject.gallery} button>
                            <ListItemIcon>
                                <CollectionsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Gallery" />
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <div className="margin-global-top-6" />
                <Database
                    linkDisableObject={linkDisableObject}
                    setLinkDisableObject={setLinkDisableObject}
                />
            </Box>
        </Box>
    );
}