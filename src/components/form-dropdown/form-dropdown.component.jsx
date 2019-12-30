import React from 'react';

import './form-dropdown.styles.scss';

const FormDropdown = ({ handleChange, label, val, ...otherProps }) => (
    <div className='form-dropdown'>
        {label ? (
            <label
            >
                {label}
            </label>
        ) : null}

        <select onChange={handleChange} {...otherPorps}>
            <option value="val">{}</option>
        </select>
        <input className='form-input' onChange={handleChange} {...otherProps} />
        {label ? (
            <label
            >
                {label}
            </label>
        ) : null}
    </div>
)

export default FormDropdown;