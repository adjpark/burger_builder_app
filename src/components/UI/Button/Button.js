import React from 'react';

import styles from './Button.css';


const Button = (props) => (
    <button
        disabled={props.disabled}
        onClick={props.clicked}
        className={[styles.Button, styles[props.btnType]].join(' ')}
    >{props.children}</button>
);

export default Button;
