import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateTimePicker from '@mui/lab/DateTimePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Button, FormControl, Input, InputLabel, TextField, Typography } from '@mui/material';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import api from '../../../api';

function MealCounter(props) {
    const [mealCounter, setMealCounter] = React.useState({ value: 0, readOnly: true });
    const [mealCounterDate, setMealCounterDate] = React.useState({ value: new Date(), readOnly: true });
    
    const [editMealCounter, setEditMealCounter] = React.useState(false);

    const [disabled, setDisabled] = React.useState(false);
    
    const handleMealCounter = (e) => {
        if (isNaN(e.target.value)) setDisabled(true);
        else setDisabled(false);
        setMealCounter(prevState => ({ ...prevState, value: e.target.value }));
    }

    React.useEffect(() => {
        async function getMealCounter() {
            try {
                const response = await fetch(`${api}/admin/get-meal-counter`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Cache-Control': 'no-store'
                    },
                });
                const data = await response.json();
                setMealCounter(prevState => ({ ...prevState, value: data.mealCounter }));
                setMealCounterDate(prevState => ({ ...prevState, value: new Date(data.mealCounterDate) }));
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
                        variant="h5"
                        id="tableTitle"
                        component="div"
                    >
                        Meal Counter
                    </Typography>
                </Col>
            </Row>
            <div className="margin-global-top-2" />
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
                            <Button disabled={disabled} onClick={handleSubmit} type="button" variant="contained" color="secondary">
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
        </div>
    );
}

export default MealCounter;