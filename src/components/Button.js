import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css'

function Button(props) {

    let link = (props.route ? 
        <Link to={props.link} className='Button'
              target={(props.new_tab ? "_blank" : "")}
              rel={(props.new_tab ? "noopener noreferrer": "")}>
        {props.text}
        </Link>
        : 
        <a href={props.link} className='Button'
           target={(props.new_tab ? "_blank" : "")}
           rel={(props.new_tab ? "noopener noreferrer": "")}>
        {props.text}
        </a>
        )

    return link
}

Button.defaultProps = {new_tab: true,
                       route: false}

export default Button