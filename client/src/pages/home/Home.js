import React from 'react';
import './Home.scss'
import {Carousel,FuturePortion,MessageFounder,ThreeImages, OngoingCampaigns,HighlightsPortion,LatestNews,SignUpForm} from './components'

function Home(props) {
    return (
        <div>
            <Carousel/>
            <FuturePortion/>
            <div className="margin-global-top"/>
            <MessageFounder/>
            <div className="margin-global-top"/>
            <ThreeImages/>
            <div className="margin-global-top"/>
            <OngoingCampaigns/>
            <HighlightsPortion/>
            <LatestNews/>
            <SignUpForm/>
        </div>
    );
}

export default Home;