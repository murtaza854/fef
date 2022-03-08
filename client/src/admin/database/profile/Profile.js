import { Button, FormControl, Input, TextField, Typography } from '@mui/material';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import api from '../../../api';

function gcd(a, b) {
    return (b === 0) ? a : gcd(b, a % b);
}

function Profile(props) {
    const [profileText, setProfileText] = React.useState({ value: '', readOnly: true });
    const [image, setImage] = React.useState({ picturePreview: '', imgURl: '' });

    const [ourVision, setOurVision] = React.useState({ value: '', readOnly: true });
    const [ourMission, setOurMission] = React.useState({ value: '', readOnly: true });
    const [ourCredentials, setOurCredentials] = React.useState({ value: '', readOnly: true });
    const [bankDetails, setBankDetails] = React.useState({ value: '', readOnly: true });

    const [editProfileText, setEditProfileText] = React.useState(false);

    const [oldFilePath, setOldFilePath] = React.useState('');

    const handleProfileText = (e) => {
        setProfileText(prevState => ({ ...prevState, value: e.target.value }));
    }

    const handleOurVision = (e) => {
        setOurVision(prevState => ({ ...prevState, value: e.target.value }));
    }

    const handleOurMission = (e) => {
        setOurMission(prevState => ({ ...prevState, value: e.target.value }));
    }

    const handleOurCredentials = (e) => {
        setOurCredentials(prevState => ({ ...prevState, value: e.target.value }));
    }

    const handleBankDetails = (e) => {
        setBankDetails(prevState => ({ ...prevState, value: e.target.value }));
    }

    React.useEffect(() => {
        async function getAboutUs() {
            try {
                const response = await fetch(`${api}/admin/get-profile`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Cache-Control': 'no-store'
                    },
                });
                const data = await response.json();
                setProfileText(prevState => ({ ...prevState, value: data.profileText }));
                setImage({ picturePreview: '', imgURl: data.profileImagePath });
                setOurVision({ value: data.ourVision, readOnly: true });
                setOurMission({ value: data.ourMission, readOnly: true });
                setOurCredentials({ value: data.ourCredentials, readOnly: true });
                setBankDetails({ value: data.bankDetails, readOnly: true });
                setOldFilePath(data.profileImagePath);
            } catch (error) {
            }
        }
        getAboutUs();
    }, []);

    const handleAboutUsEdit = (e, flag) => {
        setProfileText(prevState => ({ ...prevState, readOnly: !flag }));
        setEditProfileText(flag);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            const obj = {
                profileText: profileText.value,
                oldFilePath: '',
                ourVision: ourVision.value,
                ourMission: ourMission.value,
                ourCredentials: ourCredentials.value,
                bankDetails: bankDetails.value,
            };
            if (image.picturePreview !== '') {
                formData.append('image', image.picturePreview);
                obj.oldFilePath = oldFilePath;
            }
            formData.append('data', JSON.stringify(obj));
            await fetch(`${api}/admin/profile-set`, {
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
                        Profile Page
                    </Typography>
                </Col>
            </Row>
            <div className="margin-global-top-2" />
            <Row>
                <Col md={6}>
                    <FormControl variant="standard" fullWidth>
                        <TextField
                            id="aboutUs"
                            label="Profile"
                            variant="standard"
                            value={profileText.value}
                            onChange={handleProfileText}
                            onBlur={handleProfileText}
                            InputProps={{
                                readOnly: profileText.readOnly,
                            }}
                            multiline
                            rows={10}
                        />
                    </FormControl>
                </Col>
                <Col md={6}>
                    {
                        editProfileText ? (
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
                <Col md={6}>
                    <FormControl variant="standard" fullWidth>
                        <TextField
                            id="ourVision"
                            label="Our Vision"
                            variant="standard"
                            value={ourVision.value}
                            onChange={handleOurVision}
                            onBlur={handleOurVision}
                            InputProps={{
                                readOnly: ourVision.readOnly,
                            }}
                            multiline
                            rows={10}
                        />
                    </FormControl>
                </Col>
                <Col md={6}>
                    <FormControl variant="standard" fullWidth>
                        <TextField
                            id="ourMission"
                            label="Our Mission"
                            variant="standard"
                            value={ourMission.value}
                            onChange={handleOurMission}
                            onBlur={handleOurMission}
                            InputProps={{
                                readOnly: ourMission.readOnly,
                            }}
                            multiline
                            rows={10}
                        />
                    </FormControl>
                </Col>
            </Row>
            <div className="margin-global-top-2" />
            <Row>
                <Col md={6}>
                    <FormControl variant="standard" fullWidth>
                        <TextField
                            id="ourCredentials"
                            label="Our Credentials"
                            variant="standard"
                            value={ourCredentials.value}
                            onChange={handleOurCredentials}
                            onBlur={handleOurCredentials}
                            InputProps={{
                                readOnly: ourCredentials.readOnly,
                            }}
                            multiline
                            rows={10}
                        />
                    </FormControl>
                </Col>
                <Col md={6}>
                    <FormControl variant="standard" fullWidth>
                        <TextField
                            id="bankDetails"
                            label="Bank Details"
                            variant="standard"
                            value={bankDetails.value}
                            onChange={handleBankDetails}
                            onBlur={handleBankDetails}
                            InputProps={{
                                readOnly: bankDetails.readOnly,
                            }}
                            multiline
                            rows={10}
                        />
                    </FormControl>
                </Col>
            </Row>
            <div className="margin-global-top-2" />
            <Row>
                {
                    !editProfileText ? (
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

export default Profile;