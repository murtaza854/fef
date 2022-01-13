import React from 'react';
import Slider from '@mui/material/Slider';
import { withStyles } from '@mui/styles';

const PrettoSlider = withStyles({
    root: {
      color: '#52af77',
      height: 8,
      
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '0.125rem solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        
        boxShadow: 'inherit',
      },
      "$disabled &": {
        height: 24,
        width: 24,
        backgroundColor: '#e38454',
        border: '0.125rem solid currentColor',
        marginTop: -8,
        marginLeft: -12,
      }
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
      
    },
    track: {
      height: 8,
      // borderRadius: 4,

    },
    rail: {
      height: 8,
      // borderRadius: 4,
      backgroundColor: '#d8d8d8',
      "$disabled &" : {
        color: '#d8d8d8'
      }
    },
    disabled: {
        color: '#e38454!important',
      height: 8,
      thumb: {height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
          
          boxShadow: 'inherit',
        },}
    }

  })(Slider);

function SliderCard(props) {
    return (
        <div>
            <PrettoSlider disabled
             aria-label="pretto slider" value={props.amount} max= {props.goal}/>
        </div>
    );
}

export default SliderCard;