import React from 'react';
import "./ImageTextCenter.scss"
import { Heading3 } from '../../components';
import {
    Link
  } from "react-router-dom";

function ImageTextCenter(props) {
    const handleClick = e => {
        if (props.flag === true) e.preventDefault();
    }
    return (
        <Link to='donate' onClick={handleClick} className="imgcontainers">
            <img src={props.img} alt={props.alt} className="imagebw"/>
            <div className="centeredimg">
            <Heading3 classes="text-shadow" first={props.first} second={props.second} color={props.color}></Heading3>
            </div>
        </Link>
    );
}

export default ImageTextCenter;