import { Button, FormControl, Input, TextField, Typography } from '@mui/material';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import api from '../../../api';

function gcd(a, b) {
    return (b === 0) ? a : gcd(b, a % b);
}

function AboutUs(props) {
    const [smallAboutUsText, setSmallAboutUsText] = React.useState({ value: '', readOnly: true });
    const [image, setImage] = React.useState({ picturePreview: '', imgURl: '' });

    const [editSmallAboutUsText, setEditSmallAboutUsText] = React.useState(false);

    const [oldFilePath, setOldFilePath] = React.useState('');

    const handleSmallAboutUsText = (e) => {
        setSmallAboutUsText(prevState => ({ ...prevState, value: e.target.value }));
    }

    React.useEffect(() => {
        async function getAboutUs() {
            try {
                const response = await fetch(`${api}/admin/get-small-about-us`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Cache-Control': 'no-store'
                    },
                });
                const data = await response.json();
                setSmallAboutUsText(prevState => ({ ...prevState, value: data.smallAboutUsText }));
                setImage({ picturePreview: '', imgURl: data.aboutUsImagePath });
                setOldFilePath(data.aboutUsImagePath);
            } catch (error) {
            }
        }
        getAboutUs();
    }, []);

    const handleAboutUsEdit = (e, flag) => {
        setSmallAboutUsText(prevState => ({ ...prevState, readOnly: !flag }));
        setEditSmallAboutUsText(flag);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            const obj = {
                smallAboutUsText: smallAboutUsText.value,
                oldFilePath: '',
            };
            if (image.picturePreview !== '') {
                formData.append('image', image.picturePreview);
                obj.oldFilePath = oldFilePath;
            }
            formData.append('data', JSON.stringify(obj));
            await fetch(`${api}/admin/small-about-us-set`, {
                method: 'POST',
                headers: {
                    'Accept': 'multipart/form-data',
                    'Cache-Control': 'no-store'
                },
                body: formData,
            });
            handleAboutUsEdit(e, false);
        } catch (error) {
        }
    }

    const imageChange = event => {
        let reader = new FileReader();
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].size / 1024 < 300) {
                reader.readAsDataURL(event.target.files[0]);
                const objectUrl = URL.createObjectURL(event.target.files[0]);
                reader.onload = ((theFile) => {
                    var image = new Image();
                    image.src = theFile.target.result;
                    image.onload = function () {
                        const w = this.width;
                        const h = this.height;
                        const r = gcd(w, h);
                        if (w / r === h / r) {
                            setImage(prevState => ({ ...prevState, picturePreview: event.target.files[0], imgURl: objectUrl, error: false }));
                        }
                        else {
                            alert("Please upload a square image.");
                        }
                    };
                });
            } else {
                alert("Size too large. Must be below 300kb.");
            }
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
                        Home Page About Us
                    </Typography>
                </Col>
            </Row>
            <div className="margin-global-top-2" />
            <Row>
                <Col md={6}>
                    <FormControl variant="standard" fullWidth>
                        <TextField
                            id="aboutUs"
                            label="About Us"
                            variant="standard"
                            value={smallAboutUsText.value}
                            onChange={handleSmallAboutUsText}
                            onBlur={handleSmallAboutUsText}
                            InputProps={{
                                readOnly: smallAboutUsText.readOnly,
                            }}
                            multiline
                            rows={10}
                        />
                    </FormControl>
                </Col>
                <Col md={6}>
                    {
                        editSmallAboutUsText ? (
                            <Row>
                                <Col>
                                    <label htmlFor="image">
                                        <Input onChange={imageChange} hidden accept="image/*" id="image" type="file" />
                                        <Button type="button" variant="contained" component="span">
                                            Upload
                                        </Button>
                                    </label>
                                </Col>
                            </Row>
                        ) : null
                    }
                    <div className="margin-global-top-2" />
                    {
                        image.imgURl !== '' ? (
                            <Row>
                                <img style={{ width: '30rem' }} src={image.imgURl} alt="Preview" />
                                <div className="margin-global-top-1" />
                            </Row>
                        ) : null
                    }
                </Col>
            </Row>
            <div className="margin-global-top-2" />
            <Row>
                {
                    !editSmallAboutUsText ? (
                        <Col className="flex-display">
                            <Button onClick={e => handleAboutUsEdit(e, true)} type="button" variant="contained" color="secondary">
                                Edit
                            </Button>
                        </Col>
                    ) : (
                        <Col className="flex-display">
                            <Button onClick={handleSubmit} type="button" variant="contained" color="secondary">
                                Save
                            </Button>
                            <div className="margin-global-05" />
                            <Button onClick={e => handleAboutUsEdit(e, false)} type="button" variant="contained" color="secondary">
                                Cancel
                            </Button>
                        </Col>
                    )
                }
            </Row>
        </div>
    );
}

export default AboutUs;