import React from 'react';
import './Home.scss'
import {Carousel,FuturePortion,MessageFounder,ThreeImages,InfoCard,InfoCard2, OngoingCampaigns} from './components'

function Home(props) {
    return (
        <div>
            {/* <Carousel/> */}
            <FuturePortion/>
            <div className="margin-global-top"/>
            <MessageFounder/>
            <div className="margin-global-top"/>
            <ThreeImages/>
            <OngoingCampaigns/>
        </div>
    );
}

export default Home;