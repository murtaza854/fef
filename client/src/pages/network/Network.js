import React from 'react';
import './Network.scss';
import { Container } from 'react-bootstrap';
import { Kitchen } from './components'

function Network(props) {
    return (
        <Container className="our-network" fluid>
            <div className="padding-global-top-page-start"></div>
            <Kitchen />
        </Container>
    );
}

export default Network;