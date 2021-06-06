import React from 'react';
import './Heading2.scss'

function Heading2(props) {
    return (
        <div className="heading2">
            <h1 className={props.classes} style={{color: props.color}}>{props.first}<br/>{props.second}</h1>
        </div>
    );
}

export default Heading2;