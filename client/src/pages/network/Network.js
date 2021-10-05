import React, { useEffect } from 'react';
import './Network.scss';
import { Container } from 'react-bootstrap';
import { NewKitchen } from './components'

function Network(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])
    return (
        <Container className="our-network" fluid>
            {/* <div className="padding-global-top-page-start"></div> */}
            <NewKitchen />
        </Container>
    );
}

export default Network;