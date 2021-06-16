import React from 'react';
import "./ImageTextCenter.scss"
import { Heading2 } from '../../components'

function ImageTextCenter(props) {
    return (
        <a href='/' className="imgcontainers">
            <img src={props.img} alt={props.alt} className="imagebw"/>
            <div className="centeredimg">
            <Heading2 classes="text-shadow" first={props.first} second={props.second} color={props.color}></Heading2>
            </div>
        </a>
    );
}

export default ImageTextCenter;