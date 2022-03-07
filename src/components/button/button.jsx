import React from 'react';
import './button.css';

const Button = (props) => {
    return(
            <a href={props.link} target={props.redirect && '_blank'}  className='Button'>{props.title}</a>
    )
}

export default Button;