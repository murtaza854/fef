import React from 'react';
import './Heading1.scss'

function Heading1(props) {
    return (
        <div className="heading1">
            <h1 style={{textTransform: props.textTransform, color: props.color}}>{props.first}<br/>{props.second}</h1>
        </div>
    );
}

export default Heading1;