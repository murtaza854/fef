import React from 'react';
import { UserForm, UserTable } from './user';
import { GalleryForm, GalleryTable, GalleryDelete } from './gallery';
import { CreateUserData } from './user/userTable/CreateUserData';
import { CreateGalleryData } from './gallery/galleryTable/CreateGalleryData';
import {
    Switch,
    Route,
    useHistory
} from "react-router-dom";
import api from '../../api';
import MealCounter from './mealCounter/MealCounter';
import FutureSection from './futureSection/FutureSection';
import AboutUs from './aboutUs/AboutUs';
import Highlights from './highlights/Highlights';
import MessageFromFounder from './messageFromFounder/MessageFromFounder';
import Profile from './profile/Profile';
import Story from './story/Story';

function Database(props) {
    const [rows, setRows] = React.useState([]);
    const [filteredRows, setFilteredRows] = React.useState([]);
    const [historyChanged, setHistoryChanged] = React.useState(false);

    let history = useHistory();

    const {
        setLinkDisableObject
    } = props;

    const urlPath = window.location.pathname;
    let fetchUrl = '';
    let chosenFunction = function (params) { };
    if (urlPath === '/admin/user' || urlPath === '/admin/user/add') {
        fetchUrl = 'user/getAllUsers';
        chosenFunction = CreateUserData;
    } else if (urlPath === '/admin/gallery') {
        fetchUrl = 'gallery/getAllImages';
        chosenFunction = CreateGalleryData;
    }

    history.listen((location, action) => {
        setRows([]);
        setFilteredRows([]);
        setHistoryChanged(!historyChanged);
        // if (historyChange) setHistoryChange(true);
        // else setHistoryChange(false);
    })

    // useEffect(() => {
    //     setRows([]);
    //     setFilteredRows([]);
    // }, [])


    React.useEffect(() => {
        // const sample = [
        //     CreateData(1, 'Cupcake', 'Donut', 'example@example.com', false),
        //     CreateData(2, 'Cupcake', 'Donut', 'example@example.com', true),
        //     CreateData(3, 'Cupcake', 'Donut', 'example@example.com', false),
        //     CreateData(4, 'Cupcake', 'Donut', 'example@example.com', false),
        // ];
        if (urlPath === '/admin/user') {
            setLinkDisableObject({
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
                user: true,
            });
        } else if (urlPath === '/admin/meal-counter') {
            setLinkDisableObject({
                dashboard: false,
                'meal-counter': true,
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
        } else if (urlPath === '/admin/future-section') {
            setLinkDisableObject({
                dashboard: false,
                'meal-counter': false,
                'future-section': true,
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
        } else if (urlPath === '/admin/about-us') {
            setLinkDisableObject({
                dashboard: false,
                'meal-counter': false,
                'future-section': false,
                'about-us': true,
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
        } else if (urlPath === '/admin/highlights') {
            setLinkDisableObject({
                dashboard: false,
                'meal-counter': false,
                'future-section': false,
                'about-us': false,
                'highlights': true,
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
        } else if (urlPath === '/admin/message-from-founder') {
            setLinkDisableObject({
                dashboard: false,
                'meal-counter': false,
                'future-section': false,
                'about-us': false,
                'highlights': false,
                'message-from-founder': true,
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
        } else if (urlPath === '/admin/founder-message') {
            setLinkDisableObject({
                dashboard: false,
                'meal-counter': false,
                'future-section': false,
                'about-us': false,
                'highlights': false,
                'message-from-founder': false,
                profile: false,
                story: false,
                'founder-message': true,
                'founding-members': false,
                'school-meal-program': false,
                'covid-19': false,
                'network': false,
                gallery: false,
                user: false,
            });
        } else if (urlPath === '/admin/founding-members') {
            setLinkDisableObject({
                dashboard: false,
                'meal-counter': false,
                'future-section': false,
                'about-us': false,
                'highlights': false,
                'message-from-founder': false,
                profile: false,
                story: false,
                'founder-message': false,
                'founding-members': true,
                'school-meal-program': false,
                'covid-19': false,
                'network': false,
                gallery: false,
                user: false,
            });
        } else if (urlPath === '/admin/school-meal-program') {
            setLinkDisableObject({
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
                'school-meal-program': true,
                'covid-19': false,
                'network': false,
                gallery: false,
                user: false,
            });
        } else if (urlPath === '/admin/covid-19') {
            setLinkDisableObject({
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
                'covid-19': true,
                'network': false,
                gallery: false,
                user: false,
            });
        } else if (urlPath === '/admin/network') {
            setLinkDisableObject({
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
                'network': true,
                gallery: false,
                user: false,
            });
        } else if (urlPath === '/admin/gallery') {
            setLinkDisableObject({
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
                gallery: true,
                user: false,
            });
        } else if (urlPath === '/admin/profile') {
            setLinkDisableObject({
                dashboard: false,
                'meal-counter': false,
                'future-section': false,
                'about-us': false,
                'highlights': false,
                'message-from-founder': false,
                profile: true,
                story: false,
                'founder-message': false,
                'founding-members': false,
                'school-meal-program': false,
                'covid-19': false,
                'network': false,
                gallery: false,
                user: false,
            });
        } else if (urlPath === '/admin/story') {
            setLinkDisableObject({
                dashboard: false,
                'meal-counter': false,
                'future-section': false,
                'about-us': false,
                'highlights': false,
                'message-from-founder': false,
                profile: false,
                story: true,
                'founder-message': false,
                'founding-members': false,
                'school-meal-program': false,
                'covid-19': false,
                'network': false,
                gallery: false,
                user: false,
            });
        } else {
            setLinkDisableObject({
                dashboard: true,
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
        }
        if (fetchUrl !== '') {
            fetch(`${api}/${fetchUrl}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
                .then(data => {
                    console.log(data);
                    const rows = data.data.map(obj => {
                        return chosenFunction(obj);
                    });
                    setRows(rows);
                    setFilteredRows(rows);
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchUrl, urlPath, historyChanged]);

    return (
        <Switch>
            <Route path="/admin/gallery/delete">
                <GalleryDelete />
            </Route>
            <Route path="/admin/gallery/add">
                <GalleryForm
                    rows={rows}
                    setRows={setRows}
                    setFilteredRows={setFilteredRows}
                />
            </Route>
            <Route path="/admin/user/add">
                <UserForm rows={rows} />
            </Route>
            <Route exact path="/admin/gallery">
                <GalleryTable
                    rows={rows}
                    filteredRows={filteredRows}
                    setFilteredRows={setFilteredRows}
                    tableOrder="image"
                    searchField="image"
                />
            </Route>
            <Route path="/admin/user">
                <UserTable
                    rows={rows}
                    setRows={setRows}
                    filteredRows={filteredRows}
                    setFilteredRows={setFilteredRows}
                    tableOrder="name"
                    searchField="name"
                />
            </Route>
            <Route path="/admin/meal-counter">
                <MealCounter />
            </Route>
            <Route path="/admin/future-section">
                <FutureSection />
            </Route>
            <Route path="/admin/about-us">
                <AboutUs />
            </Route>
            <Route path="/admin/highlights">
                <Highlights />
            </Route>
            <Route path="/admin/message-from-founder">
                <MessageFromFounder />
            </Route>
            <Route path="/admin/profile">
                <Profile />
            </Route>
            {/* <Route path="/admin/story">
                <Story />
            </Route> */}
        </Switch>
    );
}

export default Database;