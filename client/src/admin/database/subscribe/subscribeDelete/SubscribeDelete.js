import { Button, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import api from '../../../../api';

function SubscribeDelete(props) {
    const params = new URLSearchParams(window.location.search);
    const selected = JSON.parse(params.get('selected'));
    const [emails, setEmails] = React.useState([]);
    const [text, setText] = React.useState('this email');

    const history = useHistory();

    useEffect(() => {
        const fetchImages = async () => {
            const response = await fetch(`${api}/user/getSubscribedEmails`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                withCreditials: true,
                body: JSON.stringify({ selected: selected }),
            });
            const content = await response.json();
            if (content.data.length > 1) setText('these emails');
            setEmails(content.data);
        };
        fetchImages();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleDelete = async () => {
        const response = await fetch(`${api}/user/deleteSubscribedEmails`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            withCreditials: true,
            body: JSON.stringify({ selected: selected }),
        });
        const content = await response.json();
        if (content.data) {
            history.push('/admin/subscribe');
        }
    };

    const handleCancel = () => {
        history.push('/admin/subscribe');
    };

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Typography
                        sx={{ flex: '1 1 100%' }}
                        variant="h4"
                        id="tableTitle"
                        component="div"
                    >
                        Subscribed Emails
                    </Typography>
                </Col>
            </Row>
            <div className="margin-global-top-1" />
            <Row>
                <Col>
                    <p>
                        Are you sure you want to delete {text}?
                    </p>
                </Col>
            </Row>
            {
                emails.length > 0 ? (
                    <>
                        <div className="margin-global-top-1" />
                    </>
                ) : null
            }
            <div className="margin-global-top-1" />
            <Row>
                <Col className="flex-display">
                    <Button onClick={handleDelete} type="button" variant="contained" color="primary">
                        Delete
                    </Button>
                    <div className="margin-global-05" />
                    <Button onClick={handleCancel} type="button" variant="contained" color="secondary">
                        Cancel
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default SubscribeDelete;