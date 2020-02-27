import React from 'react';

import { 
    FormInputContainer,
    Input,
    Label
 } from './form-input.styles.jsx';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <FormInputContainer>
        <Input 
            onChange={handleChange} 
            {...otherProps}
        />
        {label ? (
            <Label>
                {label}
            </Label>
        ) : null}
    </FormInputContainer>
)

export default FormInput;