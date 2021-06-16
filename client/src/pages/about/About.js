import React from 'react';
import './About.scss'
import { OurStory, Governers } from './components'

function About(props) {
    return (
        <div>
            <div className="padding-global-top-page-start"></div>
            <OurStory></OurStory>
            <div className="margin-global-top"></div>
            <Governers></Governers>
        </div>
    );
}

export default About;