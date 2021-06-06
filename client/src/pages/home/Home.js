import React from 'react';
import './Home.scss'
import {Carousel,FuturePortion,MessageFounder,ThreeImages,InfoCard} from './components'

function Home(props) {
    return (
        <div>
            {/* <Carousel/> */}
            <FuturePortion/>
            <div className="margin-global-top"/>
            <MessageFounder/>
            <div className="margin-global-top"/>
            <ThreeImages/>
            <InfoCard />
        </div>
    );
}

export default Home;