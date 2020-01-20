import React from 'react';

import { 
    FormInputContainer,
    Input,
    Label
 } from './image-input.styles.jsx';

const FormInput = ({ handleChange, label, id, ...otherProps }) => (
    <FormInputContainer>
        <Input id={id} onChange={handleChange} {...otherProps}/>
        {label ? (
            <Label for={id}>
                {label}
            </Label>
        ) : null}
    </FormInputContainer>
)

export default FormInput;