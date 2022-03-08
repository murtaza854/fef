import { FormControl, InputLabel, Typography, Input, TextField, Button } from '@mui/material';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import api from '../../../api';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

function Home(props) {
    const [mealCounter, setMealCounter] = React.useState({ value: 0, readOnly: true });
    const [mealCounterDate, setMealCounterDate] = React.useState({ value: new Date(), readOnly: true });

    const [futureText, setFutureText] = React.useState({ value: '', readOnly: true });
    const [getInvolvedText, setGetInvolvedText] = React.useState({ value: '', readOnly: true });
    const [galleryText, setGalleryText] = React.useState({ value: '', readOnly: true });
    const [newsEventsText, setNewsEventsText] = React.useState({ value: '', readOnly: true });

    const [smallAboutUsText, setSmallAboutUsText] = React.useState({ value: '', readOnly: true });

    const [smallFounderMessageText, setSmallFounderMessageText] = React.useState({ value: '', readOnly: true });
    
    const [editMealCounter, setEditMealCounter] = React.useState(false);
    const [editFutureText, setEditFutureText] = React.useState(false);
    const [editGetInvolvedText, setEditGetInvolvedText] = React.useState(false);
    const [editGalleryText, setEditGalleryText] = React.useState(false);
    const [editNewsEventsText, setEditNewsEventsText] = React.useState(false);
    const [editSmallAboutUsText, setEditSmallAboutUsText] = React.useState(false);
    const [editSmallFounderMessageText, setEditSmallFounderMessageText] = React.useState(false);
    
    const handleMealCounter = (e) => {
        setMealCounter(prevState => ({ ...prevState, value: e.target.value }));
    }

    const handleFutureText = (e) => {
        setFutureText(prevState => ({ ...prevState, value: e.target.value }));
    }

    const handleGetInvolvedText = (e) => {
        setGetInvolvedText(prevState => ({ ...prevState, value: e.target.value }));
    }

    const handleGalleryText = (e) => {
        setGalleryText(prevState => ({ ...prevState, value: e.target.value }));
    }

    const handleNewsEventsText = (e) => {
        setNewsEventsText(prevState => ({ ...prevState, value: e.target.value }));
    }

    const handleSmallAboutUsText = (e) => {
        setSmallAboutUsText(prevState => ({ ...prevState, value: e.target.value }));
    }

    const handleSmallFounderMessageText = (e) => {
        setSmallFounderMessageText(prevState => ({ ...prevState, value: e.target.value }));
    }

    React.useEffect(() => {
        async function getMealCounter() {
            try {
                const response = await fetch(`${api}/admin/get-all-data`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Cache-Control': 'no-store'
                    },
                });
                const data = await response.json();
                setMealCounter(prevState => ({ ...prevState, value: data.mealCounter }));
                setMealCounterDate(prevState => ({ ...prevState, value: new Date(data.mealCounterDate) }));
                setFutureText(prevState => ({ ...prevState, value: data.futureText }));
                setGetInvolvedText(prevState => ({ ...prevState, value: data.getInvolvedText }));
                setGalleryText(prevState => ({ ...prevState, value: data.galleryText }));
                setNewsEventsText(prevState => ({ ...prevState, value: data.newsEventsText }));
                setSmallAboutUsText(prevState => ({ ...prevState, value: data.smallAboutUsText }));
                setSmallFounderMessageText(prevState => ({ ...prevState, value: data.smallFounderMessageText }));
            } catch (error) {
            }
        }
        getMealCounter();
    }, []);

    const handleEditMealCounter = (e, flag) => {
        setMealCounter(prevState => ({ ...prevState, readOnly: !flag }));
        setMealCounterDate(prevState => ({ ...prevState, readOnly: !flag }));
        setEditMealCounter(flag);
    }

    const handleEditFutureText = (e, flag) => {
        setFutureText(prevState => ({ ...prevState, readOnly: !flag }));
        setEditFutureText(flag);
    }

    const handleEditGetInvolvedText = (e, flag) => {
        setGetInvolvedText(prevState => ({ ...prevState, readOnly: !flag }));
        setEditGetInvolvedText(flag);
    }

    const handleEditGalleryText = (e, flag) => {
        setGalleryText(prevState => ({ ...prevState, readOnly: !flag }));
        setEditGalleryText(flag);
    }

    const handleEditNewsEventsText = (e, flag) => {
        setNewsEventsText(prevState => ({ ...prevState, readOnly: !flag }));
        setEditNewsEventsText(flag);
    }

    const handleEditSmallAboutUsText = (e, flag) => {
        setSmallAboutUsText(prevState => ({ ...prevState, readOnly: !flag }));
        setEditSmallAboutUsText(flag);
    }

    const handleEditSmallFounderMessageText = (e, flag) => {
        setSmallFounderMessageText(prevState => ({ ...prevState, readOnly: !flag }));
        setEditSmallFounderMessageText(flag);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch(`${api}/admin/meal-counter-set`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ mealCounter: mealCounter.value, mealCounterDate: mealCounterDate.value }),
            });
            // const data = await response.json();
            setMealCounter(prevState => ({ ...prevState, readOnly: true }));
            setMealCounterDate(prevState => ({ ...prevState, readOnly: true }));
            setEditMealCounter(false);
        } catch (error) {
        }
    }

    return (
        <div>
            <Row>
                <Col>
                    <Typography
                        sx={{ flex: '1 1 100%' }}
                        variant="h3"
                        id="tableTitle"
                        component="div"
                    >
                        Home Edits
                    </Typography>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Typography
                        sx={{ flex: '1 1 100%' }}
                        variant="h5"
                        id="tableTitle"
                        component="div"
                    >
                        Meal Counter
                    </Typography>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <FormControl variant="standard" fullWidth>
                        <InputLabel htmlFor="mealCounter">Meal Counter</InputLabel>
                        <Input id="name"
                            value={mealCounter.value}
                            onChange={handleMealCounter}
                            onBlur={handleMealCounter}
                            readOnly={mealCounter.readOnly}
                        />
                    </FormControl>
                </Col>
                <Col md={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                            disablePortal
                            label="Meals Served Since Inception"
                            value={mealCounterDate.value}
                            readOnly={mealCounterDate.readOnly}
                            onChange={(newValue) => {
                                setMealCounterDate(prevState => ({ ...prevState, value: newValue }));
                            }}
                            renderInput={(params) => <TextField variant="standard" fullWidth {...params} />}
                        />
                    </LocalizationProvider>
                </Col>
            </Row>
            <div className="margin-global-top-2" />
            <Row>
                {
                    !editMealCounter ? (
                        <Col className="flex-display">
                            <Button onClick={e => handleEditMealCounter(e, true)} type="button" variant="contained" color="secondary">
                                Edit
                            </Button>
                        </Col>
                    ) : (
                        <Col className="flex-display">
                            <Button onClick={handleSubmit} type="button" variant="contained" color="secondary">
                                Save
                            </Button>
                            <div className="margin-global-05" />
                            <Button onClick={e => handleEditMealCounter(e, false)} type="button" variant="contained" color="secondary">
                                Cancel
                            </Button>
                        </Col>
                    )
                }
            </Row>
            <div className="margin-global-top-2" />
            <Row>
                <Col>
                    <Typography
                        sx={{ flex: '1 1 100%' }}
                        variant="h5"
                        id="tableTitle"
                        component="div"
                    >
                        Future
                    </Typography>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormControl variant="standard" fullWidth>
                        <InputLabel htmlFor="futureText">Future Text</InputLabel>
                        <Input id="name"
                            value={futureText.value}
                            onChange={handleFutureText}
                            onBlur={handleFutureText}
                            readOnly={futureText.readOnly}
                        />
                    </FormControl>
                </Col>
            </Row>
            <div className="margin-global-top-2" />
            <Row>
                {
                    !editFutureText ? (
                        <Col className="flex-display">
                            <Button onClick={e => handleEditFutureText(e, true)} type="button" variant="contained" color="secondary">
                                Edit
                            </Button>
                        </Col>
                    ) : (
                        <Col className="flex-display">
                            <Button onClick={handleSubmit} type="button" variant="contained" color="secondary">
                                Save
                            </Button>
                            <div className="margin-global-05" />
                            <Button onClick={e => handleEditFutureText(e, false)} type="button" variant="contained" color="secondary">
                                Cancel
                            </Button>
                        </Col>
                    )
                }
            </Row>
            <div className="margin-global-top-2" />
        </div>
    );
}

export default Home;