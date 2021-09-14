import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './Button.css'

const Button=(props)=> {
    const [clicked, setclicked] = useState(false)
    
    return (
        <button 
            className={clicked?'Button clicked':'Button'}
            type={props.type}
            style={{backgroundColor: props.bgColor, ...props.style}}
            onClick={(eve)=>{
                props.onClickEvent('bla bla');
                setclicked(true);
                setTimeout(()=>{
                    setclicked(false);
                }, 500);
            }}
            >{props.children}</button>
    );
}

Button.propTypes={
    children:PropTypes.any.isRequired,
    bgColor: PropTypes.string,
    style: PropTypes.object,
    onClickEvent: PropTypes.func.isRequired,
}
Button.defaultProps={
    children: 'default button value',
    bgColor: 'orange',
    onClickEvent: ()=>{}
}

export default Button;