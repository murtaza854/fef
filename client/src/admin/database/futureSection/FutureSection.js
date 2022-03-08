import { Button, FormControl, Input, InputLabel, Typography } from '@mui/material';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import api from '../../../api';

function FutureSection(props) {
    const [futureText, setFutureText] = React.useState({ value: '', readOnly: true });
    const [getInvolvedText, setGetInvolvedText] = React.useState({ value: '', readOnly: true });
    const [galleryText, setGalleryText] = React.useState({ value: '', readOnly: true });
    const [newsEventsText, setNewsEventsText] = React.useState({ value: '', readOnly: true });

    const [editFutureText, setEditFutureText] = React.useState(false);

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

    React.useEffect(() => {
        async function getFutureText() {
            try {
                const response = await fetch(`${api}/admin/get-future-text`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Cache-Control': 'no-store'
                    },
                });
                const data = await response.json();
                setFutureText(prevState => ({ ...prevState, value: data.futureText }));
                setGetInvolvedText(prevState => ({ ...prevState, value: data.getInvolvedText }));
                setGalleryText(prevState => ({ ...prevState, value: data.galleryText }));
                setNewsEventsText(prevState => ({ ...prevState, value: data.newsEventsText }));
            } catch (error) {
            }
        }
        getFutureText();
    }, []);

    const handleEditFutureText = (e, flag) => {
        setFutureText(prevState => ({ ...prevState, readOnly: !flag }));
        setGetInvolvedText(prevState => ({ ...prevState, readOnly: !flag }));
        setGalleryText(prevState => ({ ...prevState, readOnly: !flag }));
        setNewsEventsText(prevState => ({ ...prevState, readOnly: !flag }));
        setEditFutureText(flag);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch(`${api}/admin/future-text-set`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ futureText: futureText.value, getInvolvedText: getInvolvedText.value, galleryText: galleryText.value, newsEventsText: newsEventsText.value }),
            });
            // const data = await response.json();
            setFutureText(prevState => ({ ...prevState, readOnly: true }));
            setEditFutureText(false);
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
                        Future
                    </Typography>
                </Col>
            </Row>
            <div className="margin-global-top-2" />
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
                <Col md={6}>
                    <FormControl variant="standard" fullWidth>
                        <InputLabel htmlFor="getInvolvedText">Get Involved Text</InputLabel>
                        <Input id="name"
                            value={getInvolvedText.value}
                            onChange={handleGetInvolvedText}
                            onBlur={handleGetInvolvedText}
                            readOnly={getInvolvedText.readOnly}
                        />
                    </FormControl>
                </Col>
                <Col md={6}>
                    <FormControl variant="standard" fullWidth>
                        <InputLabel htmlFor="galleryText">Gallery Text</InputLabel>
                        <Input id="name"
                            value={galleryText.value}
                            onChange={handleGalleryText}
                            onBlur={handleGalleryText}
                            readOnly={galleryText.readOnly}
                        />
                    </FormControl>
                </Col>
            </Row>
            <div className="margin-global-top-2" />
            <Row>
                <Col md={6}>
                    <FormControl variant="standard" fullWidth>
                        <InputLabel htmlFor="newsEventsText">News & Events Text</InputLabel>
                        <Input id="name"
                            value={newsEventsText.value}
                            onChange={handleNewsEventsText}
                            onBlur={handleNewsEventsText}
                            readOnly={newsEventsText.readOnly}
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
        </div>
    );
}

export default FutureSection;