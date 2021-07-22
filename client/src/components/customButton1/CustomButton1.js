import React from 'react';
import {
    Link
} from "react-router-dom";
import api from '../../api';
import './CustomButton1.scss';

function CustomButton1(props) {
    const onClick = async event => {
        try {
            if (props.to.includes('our-Case-for-Action.pdf')) {
                event.preventDefault();
                const response = await fetch(`${api}/newsletter/download-pdf`, {
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                    withCredentials: true,
                });
                try {
                    window.open(response.url, "_blank");
                } catch (error) {

                }
                //   const content = await response.json();
            } else if (props.apiLink === 'submit-form') {
                // let flag = true;
                // if (props.firstName === '') flag = false;
                // else if (props.lastName === '') flag = false;
                // else if (props.email === '') flag = false;
                // if (flag) {
                //     await fetch(`${api}/newsletter/submit-form`, {
                //         method: 'POST',
                //         headers: { 'Content-Type': 'application/json' },
                //         credentials: 'include',
                //         withCredentials: true,
                //         body: JSON.stringify({firstName})
                //     });
                // }
            }
        } catch (error) {

        }
    }
    return (
        <div className="CustomButton1">
            <Link onClick={onClick} to={props.to} className={props.classes}>
                {props.text}
            </Link>
        </div>
    );
}

export default CustomButton1;