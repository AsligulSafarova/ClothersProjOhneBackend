import React from 'react';
import "./style.scss"

export default function FormInputs({ label, ...otherProps }) {
    return (
        <div className='group'>
            <input className='form-input' {...otherProps} />

            {
                label && (<label className={`${otherProps.value.length ? 'shrink' : ''}form-input-label`}> {label}  </label>)

            }
        </div>
    )
}
