import React from 'react';
import "./ImageTextCenter.scss"
// import assembly from '../../../../assets/client/Assembly.jpg';
import eating from '../../assets/client/Eating.jpg';
// import st_class from '../../../../assets/client/Class.jpg';

function ImageTextCenter(props) {
    return (
        <div className="imgcontainers">
                    <img src={props.img} className="imagebw"/>
                    <div className={`centeredimg ${props.color}c`}>{props.msg}</div>
        </div>
    );
}

export default ImageTextCenter;