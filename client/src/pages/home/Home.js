import React from 'react';
import './Home.scss'
import {Carousel,FuturePortion,MessageFounder,ThreeImages,InfoCard} from './components'

function Home(props) {
    return (
        <div>
            
            <FuturePortion/>
            <MessageFounder/>
            <ThreeImages/>
            <InfoCard />
        </div>
    );
}

export default Home;