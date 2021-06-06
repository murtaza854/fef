import React from 'react';
import './CustomButton1.scss'

function CustomButton1(props) {
    return (
        <div className="CustomButton1">
            <a href={props.href} className={props.classes}>
                {props.text}
            </a>
        </div>
    );
}

export default CustomButton1;