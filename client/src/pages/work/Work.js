import React, { useEffect } from 'react';
// import { Projects } from './components';
import { MenuPlan, Smp, DonateMeal, Children, Covid } from './components'
import './Work.scss';

function Work(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])
    return (
        <div>
            <div className="padding-global-top-page-start"></div>
            <Smp></Smp>
            <div className="margin-global-top"/>
            <MenuPlan></MenuPlan>
            <DonateMeal></DonateMeal>
            <Children></Children>
            <div className="margin-global-top"/>
            <Covid></Covid>
        </div>
    );
}

export default Work;