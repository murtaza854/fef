import { Button, ImageList, ImageListItem, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import api from '../../../../api';

function GalleryDelete(props) {
    const params = new URLSearchParams(window.location.search);
    const selected = JSON.parse(params.get('selected'));
    const [gallery, setGallery] = React.useState([]);
    const [text, setText] = React.useState('this image');

    const history = useHistory();

    useEffect(() => {
        const fetchImages = async () => {
            const response = await fetch(`${api}/gallery/getImages`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                withCreditials: true,
                body: JSON.stringify({ selected: selected }),
            });
            const content = await response.json();
            if (content.data.length > 1) setText('these images');
            setGallery(content.data);
        };
        fetchImages();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleDelete = async () => {
        const response = await fetch(`${api}/gallery/deleteImages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            withCreditials: true,
            body: JSON.stringify({ selected: selected }),
        });
        const content = await response.json();
        console.log(content);
        if (content.data) {
            history.push('/admin/gallery');
        }
    };

    const handleCancel = () => {
        history.push('/admin/gallery');
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
                        Gallery
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
                gallery.length > 0 ? (
                    <>
                        <div className="margin-global-top-1" />
                        <Row>
                            <ImageList sx={{ height: 450 }} cols={6}>
                                {gallery.map((item, index) => (
                                    <ImageListItem key={item.path}>
                                        <img
                                            src={item.path}
                                            srcSet={item.path}
                                            alt="Preview"
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </Row>
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

export default GalleryDelete;