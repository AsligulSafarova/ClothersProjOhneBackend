import React from 'react';
import "./button.style.scss"
const Button_Type_Classees = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

export default function Button({ children, buttonType, ...otherProps }) {
    return (
        <button className={`button-container ${Button_Type_Classees[buttonType]}`} {...otherProps}>{children}</button>
    )
}


const prop = "foo";

const obj = {
    [prop]: 123,
    prop: 456
};
console.log(obj.foo, obj.prop);