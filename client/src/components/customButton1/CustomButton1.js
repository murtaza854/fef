import React from 'react';
import {
    Link
  } from "react-router-dom";
import './CustomButton1.scss';

function CustomButton1(props) {
    return (
        <div className="CustomButton1">
            <Link to={props.to} className={props.classes}>
                {props.text}
            </Link>
        </div>
    );
}

export default CustomButton1;