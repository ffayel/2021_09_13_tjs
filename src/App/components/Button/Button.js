import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'

const Button=(props)=> {
    console.log(props);
    return (
        <button className={props.classColor?'Button Button-primary':'Button'} type={props.type}>{props.children}</button>
    );
}

Button.propTypes={
    children:PropTypes.any.isRequired,
    classColor: PropTypes.string,
}
Button.defaultProps={
    children: 'default button value',
    bgcolor: ''
}

export default Button;