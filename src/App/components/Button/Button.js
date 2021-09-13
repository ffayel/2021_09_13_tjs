import React from 'react';
import './Button.css'

const Button=(props)=> {
    console.log(props);
    return (
        <button className="Button Button-primary">{props.children}</button>
    );
}

export default Button;