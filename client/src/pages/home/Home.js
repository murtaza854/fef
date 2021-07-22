import React, { useEffect } from 'react';
import './Home.scss'
import {Carousel,FuturePortion,MessageFounder,ThreeImages, OngoingCampaigns,HighlightsPortion,LatestNews,SignUpForm} from './components'

function Home(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])
    return (
        <div>
            <Carousel/>
            <FuturePortion/>
            {/* <div className="margin-global-top"/> */}
            <HighlightsPortion/>
            {/* <MessageFounder/> */}
            {/* <div className="margin-global-top"/> */}
            {/* <div className="margin-global-top"/>
            <OngoingCampaigns/> */}
            <div className="margin-global-top"/>
            <MessageFounder/>
            <div className="margin-global-top"/>
            <ThreeImages/>

            {/* <HighlightsPortion/> */}
            <LatestNews/>
            <SignUpForm/>
        </div>
    );
}

export default Home;