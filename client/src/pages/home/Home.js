import React from 'react';
import './Home.scss'
import {Carousel,FuturePortion,MessageFounder,ThreeImages} from './components'
import crumbled from '../../assets/client/crumpled-white-paperboard.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {ReactComponent as Calendar} from '../../assets/client/calendar.svg'
import {ReactComponent as Gallery} from '../../assets/client/gallery.svg';
import {ReactComponent as Help} from '../../assets/client/help.svg';

function Home(props) {
    return (
        <div>
            
            <FuturePortion/>
            <MessageFounder/>
            <ThreeImages/>
        </div>
    );
}

export default Home;