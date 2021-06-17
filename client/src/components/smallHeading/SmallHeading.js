import React from 'react';
import './SmallHeading.scss'

function SmallHeading(props) {
    return (
        <div className="smallHeading">
            <p className="bigger-text">{props.text}</p>
        </div>
    );
}

export default SmallHeading;