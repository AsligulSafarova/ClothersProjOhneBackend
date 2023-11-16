import React from 'react';
import "./style.scss"
const Button_Type_Classees = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

export default function Button({ children, buttonType, ...otherProps }) {
    return (
        <button className={`button-container ${Button_Type_Classees[buttonType]}`} {...otherProps}>{children}</button>
    )
}
