import React from 'react';
import './Heading3.scss'

function Heading3(props) {
    return (
        <div className="heading3">
            <h1 className={props.classes} style={{textTransform: props.textTransform, color: props.color}}>{props.first}<br/>{props.second}</h1>
        </div>
    );
}

export default Heading3;