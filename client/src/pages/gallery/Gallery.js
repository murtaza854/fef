import React, { useEffect } from 'react';
import './Gallery.scss';
import { Container } from 'react-bootstrap';
import { ScrollableTabsButtonAuto } from './components'

function Gallery(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])
    return (
        <Container className="gallery" fluid>
            <div className="padding-global-top-page-start"></div>
            <ScrollableTabsButtonAuto></ScrollableTabsButtonAuto>
        </Container>
    );
}

export default Gallery;