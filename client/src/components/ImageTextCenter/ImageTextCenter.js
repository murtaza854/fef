import React from 'react';
import "./ImageTextCenter.scss"
// import assembly from '../../../../assets/client/Assembly.jpg';
import eating from '../../assets/client/Eating.jpg';
// import st_class from '../../../../assets/client/Class.jpg';
import { Heading2 } from '../../components'

function ImageTextCenter(props) {
    return (
        <a className="imgcontainers">
            <img src={props.img} className="imagebw"/>
            <div className="centeredimg">
            <Heading2 classes="text-shadow" first={props.first} second={props.second} color={props.color}></Heading2>
            </div>
        </a>
    );
}

export default ImageTextCenter;