import { Button, FormControl, Input, TextField, Typography } from '@mui/material';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import api from '../../../api';

function gcd(a, b) {
    return (b === 0) ? a : gcd(b, a % b);
}

function MessageFromFounder(props) {
    const [messageFromFounderText, setMessageFromFounderText] = React.useState({ value: '', readOnly: true });
    const [image, setImage] = React.useState({ picturePreview: '', imgURl: '' });

    const [editMessageFromFounderText, setEditMessageFromFounderText] = React.useState(false);

    const [oldFilePath, setOldFilePath] = React.useState('');

    const handleMessageFromFounderText = (e) => {
        setMessageFromFounderText(prevState => ({ ...prevState, value: e.target.value }));
    }

    React.useEffect(() => {
        async function getMessageFromFounder() {
            try {
                const response = await fetch(`${api}/admin/get-message-from-founder`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Cache-Control': 'no-store'
                    },
                });
                const data = await response.json();
                setMessageFromFounderText(prevState => ({ ...prevState, value: data.messageFromFounderText }));
                setImage({ picturePreview: '', imgURl: data.messageFromFounderImagePath });
                setOldFilePath(data.messageFromFounderImagePath);
            } catch (error) {
            }
        }
        getMessageFromFounder();
    }, []);

    const handleMessageFromFounderEdit = (e, flag) => {
        setMessageFromFounderText(prevState => ({ ...prevState, readOnly: !flag }));
        setEditMessageFromFounderText(flag);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            const obj = {
                messageFromFounderText: messageFromFounderText.value,
                oldFilePath: '',
            };
            if (image.picturePreview !== '') {
                formData.append('image', image.picturePreview);
                obj.oldFilePath = oldFilePath;
            }
            formData.append('data', JSON.stringify(obj));
            await fetch(`${api}/admin/message-from-founder-set`, {
                method: 'POST',
                headers: {
                    'Accept': 'multipart/form-data',
                    'Cache-Control': 'no-store'
                },
                body: formData,
            });
            handleMessageFromFounderEdit(e, false);
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
                        Home Page Message From Founder
                    </Typography>
                </Col>
            </Row>
            <div className="margin-global-top-2" />
            <Row>
                <Col md={6}>
                    <FormControl variant="standard" fullWidth>
                        <TextField
                            id="MessageFromFounder"
                            label="Message From Founder"
                            variant="standard"
                            value={messageFromFounderText.value}
                            onChange={handleMessageFromFounderText}
                            onBlur={handleMessageFromFounderText}
                            InputProps={{
                                readOnly: messageFromFounderText.readOnly,
                            }}
                            multiline
                            rows={10}
                        />
                    </FormControl>
                </Col>
                <Col md={6}>
                    {
                        editMessageFromFounderText ? (
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
                    !editMessageFromFounderText ? (
                        <Col className="flex-display">
                            <Button onClick={e => handleMessageFromFounderEdit(e, true)} type="button" variant="contained" color="secondary">
                                Edit
                            </Button>
                        </Col>
                    ) : (
                        <Col className="flex-display">
                            <Button onClick={handleSubmit} type="button" variant="contained" color="secondary">
                                Save
                            </Button>
                            <div className="margin-global-05" />
                            <Button onClick={e => handleMessageFromFounderEdit(e, false)} type="button" variant="contained" color="secondary">
                                Cancel
                            </Button>
                        </Col>
                    )
                }
            </Row>
        </div>
    );
}

export default MessageFromFounder;