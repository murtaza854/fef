import React, { useEffect } from 'react';
// import { Projects } from './components';
import { MenuPlan, Smp, DonateMeal, Children, ChildTable } from './components'
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
            <ChildTable></ChildTable>
        </div>
    );
}

export default Work;