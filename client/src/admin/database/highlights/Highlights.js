import { Button, FormControl, TextField, Typography } from '@mui/material';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import api from '../../../api';

function Highlights(props) {
    const [highlightsText, setHighlightsText] = React.useState({ value: '', readOnly: true });
    const [bullets, setBullets] = React.useState([]);

    const [editHighlightsText, setEditHighlightsText] = React.useState(false);

    const handleHighlightsText = (e) => {
        setHighlightsText(prevState => ({ ...prevState, value: e.target.value }));
    }

    const handleBullets = (e, index) => {
        const newBullets = [...bullets];
        newBullets[index] = { ...newBullets[index], value: e.target.value };
        setBullets(newBullets);
    }

    const handleAddBullet = () => {
        setBullets(prevState => [...prevState, { value: '', readOnly: !editHighlightsText }]);
    }

    const handleRemoveBullet = (index) => {
        const newBullets = [...bullets];
        newBullets.splice(index, 1);
        setBullets(newBullets);
    }

    React.useEffect(() => {
        async function getHighlights() {
            try {
                const response = await fetch(`${api}/admin/get-highlights`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Cache-Control': 'no-store'
                    },
                });
                const data = await response.json();
                setHighlightsText(prevState => ({ ...prevState, value: data.highlights }));
                if (data.bullets !== '') {
                    const array = data.bullets.split('\n');
                    array.forEach(bullet => {
                        setBullets(prevState => [...prevState, { value: bullet, readOnly: true }]);
                    });
                }
            } catch (error) {
            }
        }
        getHighlights();
    }, []);

    const handleHighlightsEdit = (e, flag) => {
        setHighlightsText(prevState => ({ ...prevState, readOnly: !flag }));
        const newBullets = [...bullets];
        newBullets.forEach(bullet => {
            bullet.readOnly = !flag;
        });
        setBullets(newBullets);
        setEditHighlightsText(flag);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch(`${api}/admin/highlights-set`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-store'
                },
                body: JSON.stringify({
                    highlight: highlightsText.value,
                    bullets: bullets.map(bullet => bullet.value).join('\n'),
                })
            });
            handleHighlightsEdit(e, false);
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
                        Home Page Highlights
                    </Typography>
                </Col>
            </Row>
            <div className="margin-global-top-2" />
            <Row>
                <Col md={6}>
                    <FormControl variant="standard" fullWidth>
                        <TextField
                            id="Highlights"
                            label="Highlights"
                            variant="standard"
                            value={highlightsText.value}
                            onChange={handleHighlightsText}
                            onBlur={handleHighlightsText}
                            InputProps={{
                                readOnly: highlightsText.readOnly,
                            }}
                            multiline
                            rows={10}
                        />
                    </FormControl>
                </Col>
                <Col md={6}>
                    {
                        editHighlightsText ? (
                            <>
                                <Row>
                                    <Col>
                                        <Button
                                            type="button"
                                            variant="contained"
                                            color="primary"
                                            onClick={handleAddBullet}
                                        >
                                            Add Bullet
                                        </Button>
                                    </Col>
                                </Row>
                                <Row>
                                    {
                                        bullets.map((bullet, index) => (
                                            <Row key={index} style={{ marginTop: '1rem' }}>
                                                <Col>
                                                    <FormControl variant="standard" fullWidth>
                                                        <TextField
                                                            label="Bullet"
                                                            variant="standard"
                                                            value={bullet.value}
                                                            onChange={(e) => handleBullets(e, index)}
                                                            onBlur={(e) => handleBullets(e, index)}
                                                            InputProps={{
                                                                readOnly: bullet.readOnly,
                                                            }}
                                                            rows={1}
                                                        />
                                                    </FormControl>
                                                </Col>
                                                <Col>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        onClick={() => handleRemoveBullet(index)}
                                                    >
                                                        Remove
                                                    </Button>
                                                </Col>
                                            </Row>
                                        ))
                                    }
                                </Row>
                            </>
                        ) : (
                            <>
                                {
                                    bullets.map((bullet, index) => (
                                        <Row key={index} style={{ marginTop: '1rem' }}>
                                            <Col>
                                                <FormControl variant="standard" fullWidth>
                                                    <TextField
                                                        label="Bullet"
                                                        variant="standard"
                                                        value={bullet.value}
                                                        InputProps={{
                                                            readOnly: true,
                                                        }}
                                                    />
                                                </FormControl>
                                            </Col>
                                        </Row>
                                    ))
                                }
                            </>
                        )
                    }
                </Col>
            </Row>
            <div className="margin-global-top-2" />
            <Row>
                {
                    !editHighlightsText ? (
                        <Col className="flex-display">
                            <Button onClick={e => handleHighlightsEdit(e, true)} type="button" variant="contained" color="secondary">
                                Edit
                            </Button>
                        </Col>
                    ) : (
                        <Col className="flex-display">
                            <Button onClick={handleSubmit} type="button" variant="contained" color="secondary">
                                Save
                            </Button>
                            <div className="margin-global-05" />
                            <Button onClick={e => handleHighlightsEdit(e, false)} type="button" variant="contained" color="secondary">
                                Cancel
                            </Button>
                        </Col>
                    )
                }
            </Row>
        </div>
    );
}

export default Highlights;