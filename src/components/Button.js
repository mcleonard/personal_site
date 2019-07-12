import React from 'react';
import './Button.css'

function Button(props) {

    return (
        <a href={props.link} className='Button'
            target={(props.new_tab ? "_blank" : "")}
            rel={(props.new_tab ? "noopener noreferrer": "")}>
            {props.text}
        </a>
    )
}

Button.defaultProps = {new_tab: true}

export default Button