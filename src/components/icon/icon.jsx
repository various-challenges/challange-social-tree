import React from 'react';
import './icon.css';

const Icon = (props) => {
    return(
        <span className="cont-icon">
            <a href={props.link} target={props.redirect && '_blank'}>
                <img src={props.image} alt={props.alt} />
            </a>
        </span>
    )
}

export default Icon;