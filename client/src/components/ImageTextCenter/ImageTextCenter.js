import React from 'react';
import "./ImageTextCenter.scss"
import { Heading3 } from '../../components'

function ImageTextCenter(props) {
    return (
        <a href='/' className="imgcontainers">
            <img src={props.img} alt={props.alt} className="imagebw"/>
            <div className="centeredimg">
            <Heading3 classes="text-shadow" first={props.first} second={props.second} color={props.color}></Heading3>
            </div>
        </a>
    );
}

export default ImageTextCenter;